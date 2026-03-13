/**
 * Bulk Indexing Maintenance Script
 * 
 * Usage:
 * 1. Ensure 'google-indexing-key.json' is in the root directory.
 * 2. Run: npx ts-node scripts/bulk-index.ts
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://corsoguard.com';
const keyPath = path.join(process.cwd(), 'google-indexing-key.json');
const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');

// Utility to sleep for rate limiting
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function getRoutes() {
  const routes: string[] = [];
  
  // 1. Static Routes (matching sitemap.ts)
  const staticRoutes = [
    '',
    '/growth',
    '/checklist',
    '/age-converter',
    '/harness',
    '/lifetime-cost',
    '/blog',
    '/about',
    '/disclosure',
    '/privacy',
  ];

  staticRoutes.forEach(route => routes.push(`${baseUrl}${route}`));

  // 2. Dynamic Blog Routes
  if (fs.existsSync(postsDirectory)) {
    try {
      const fileNames = fs.readdirSync(postsDirectory);
      fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .forEach((fileName) => {
          const slug = fileName.replace(/\.md$/, '');
          routes.push(`${baseUrl}/blog/${slug}`);
        });
    } catch (error) {
      console.error('Error reading blog posts:', error);
    }
  }

  return routes;
}

async function requestIndexing(url: string, jwtClient: any) {
  try {
    const options = {
      url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      method: 'POST',
      auth: jwtClient,
      data: {
        url: url,
        type: 'URL_UPDATED',
      },
    };

    await google.indexing('v3').urlNotifications.publish(options);
    console.log(`[SUCCESS] ${url}`);
    return true;
  } catch (error: any) {
    console.error(`[FAILED] ${url} - ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('Starting bulk indexing process...');

  if (!fs.existsSync(keyPath)) {
    console.error('Error: google-indexing-key.json not found in root directory.');
    process.exit(1);
  }

  const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  const jwtClient = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ['https://www.googleapis.com/auth/indexing']
  });

  try {
    await jwtClient.authorize();
    const urls = await getRoutes();
    
    console.log(`Found ${urls.length} URLs to index.`);
    
    for (const url of urls) {
      await requestIndexing(url, jwtClient);
      // Rate limiting: 500ms between requests
      await sleep(500);
    }

    console.log('\nBulk indexing completed.');
  } catch (error: any) {
    console.error('Core error during bulk indexing:', error.message);
    process.exit(1);
  }
}

main();
