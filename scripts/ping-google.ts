/**
 * Google Indexing API Ping Script
 * 
 * Usage: 
 * 1. Obtain a service account JSON from Google Cloud Console.
 * 2. Save it as 'google-indexing-key.json' in the root directory.
 * 3. Install 'googleapis' package: npm install googleapis
 * 4. Run: npx ts-node scripts/ping-google.ts https://corsoguard.com/blog/your-new-post
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

async function pingGoogle(url: string) {
  const keyPath = path.join(process.cwd(), 'google-indexing-key.json');
  
  if (!fs.existsSync(keyPath)) {
    console.error('Error: google-indexing-key.json not found in root directory.');
    console.log('Please follow the instructions in the script header.');
    return;
  }

  const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  try {
    await jwtClient.authorize();
    
    const options = {
      url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      method: 'POST',
      auth: jwtClient,
      data: {
        url: url,
        type: 'URL_UPDATED',
      },
    };

    const response = await google.indexing('v3').urlNotifications.publish(options);
    console.log(`Success! Notified Google about: ${url}`);
    console.log('Response:', response.data);
  } catch (error: any) {
    console.error('Error pinging Google Indexing API:', error.message);
  }
}

const targetUrl = process.argv[2];
if (!targetUrl) {
  console.error('Usage: ts-node ping-google.ts <url>');
  process.exit(1);
}

pingGoogle(targetUrl);
