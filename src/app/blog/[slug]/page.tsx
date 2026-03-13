import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowLeft, Clock, User, Calendar, ChevronRight } from 'lucide-react';
import AdSenseUnit from '@/components/AdSenseUnit';
import { parseMarkdown } from '@/lib/markdown';
import StructuredData from '@/components/StructuredData';
import SchemaBridge from '@/components/SchemaBridge';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const fullPath = path.join(process.cwd(), `src/content/posts/${slug}.md`);
    
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { metadata } = parseMarkdown(fileContents);
        
        // Root layout handles the "| CorsoGuard" suffix via title.template
        return {
            title: metadata.title,
            description: metadata.description || `Expert Cane Corso advice on ${metadata.title}. E-E-A-T backed guide.`,
            openGraph: {
                title: metadata.title,
                description: metadata.description,
                url: `https://corsoguard.com/blog/${slug}`,
                images: [metadata.image || '/breed-guide-card.png'],
                type: 'article',
                publishedTime: metadata.date,
            },
        };
    } catch (e) {
        return { title: "Guide Not Found" };
    }
}

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    let fileNames: string[] = [];
    try {
        fileNames = fs.readdirSync(postsDirectory);
    } catch (e) { }

    return fileNames.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
    }));
}

// Helper to get related articles
async function getRelatedArticles(currentSlug: string, category: string) {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = fileNames
        .filter(fn => fn.endsWith('.md') && !fn.includes(currentSlug))
        .map(fn => {
            const content = fs.readFileSync(path.join(postsDirectory, fn), 'utf8');
            const { metadata } = parseMarkdown(content);
            return {
                slug: fn.replace(/\.md$/, ''),
                title: metadata.title,
                image: metadata.image,
                category: metadata.category,
                date: metadata.date
            };
        })
        .filter(p => p.category === category)
        .slice(0, 3);
    
    return posts;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const baseUrl = 'https://corsoguard.com';

    const fullPath = path.join(process.cwd(), `src/content/posts/${slug}.md`);
    let fileContents = '';
    try {
        fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
        fileContents = '# 404 Guide Not Found';
    }

    const { metadata, html } = parseMarkdown(fileContents);
    const relatedArticles = await getRelatedArticles(slug, metadata.category || 'General');

    // Breadcrumb remains standard for all
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': baseUrl },
            { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${baseUrl}/blog` },
            { '@type': 'ListItem', 'position': 3, 'name': metadata.title || slug, 'item': `${baseUrl}/blog/${slug}` }
        ]
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <StructuredData data={breadcrumbSchema} />
            <SchemaBridge slug={slug} metadata={metadata} baseUrl={baseUrl} />

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] min-h-[400px]">
                <Image 
                    src={metadata.image || '/breed-guide-card.png'} 
                    alt={metadata.title || 'Guide'} 
                    fill 
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto left-1/2 -translate-x-1/2">
                    <Link href="/blog" className="inline-flex items-center text-primary hover:text-white transition-colors mb-6 font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Guides
                    </Link>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                            {metadata.category || 'Breed Guide'}
                        </span>
                        <span className="flex items-center text-neutral-400 text-xs font-bold uppercase tracking-wider">
                            <Clock className="w-3 h-3 mr-1" /> {metadata.readTime || '5 min'}
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-4xl">
                        {metadata.title || slug.replace(/-/g, ' ')}
                    </h1>
                    
                    <div className="flex items-center gap-8 text-neutral-400">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm font-medium">{metadata.author || 'CorsoGuard Team'}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm font-medium">{metadata.date || 'March 2024'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-8 md:p-16">
                <AdSenseUnit slotId="blog-post-top" type="banner" className="mb-12" />

                <article className="prose prose-invert prose-primary max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>

                {/* Related Articles Selection */}
                {relatedArticles.length > 0 && (
                    <div className="mt-20 pt-12 border-t border-white/10">
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-8">Related Tactical Guides</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary transition duration-300">
                                    <div className="relative h-40 w-full">
                                        <Image src={post.image || '/breed-guide-card.png'} alt={post.title || 'Related Guide'} fill className="object-cover group-hover:scale-110 transition duration-500" />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-white font-bold text-sm leading-tight mb-2 group-hover:text-primary transition">{post.title || 'Related Guide'}</h4>
                                        <span className="text-[10px] text-neutral-500 uppercase font-black tracking-widest flex items-center">
                                            Read More <ChevronRight className="w-3 h-3 ml-1" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-16 pt-12 border-t border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-8">Fuel Your Corso's Potential</h3>
                    <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-8 backdrop-blur-xl">
                        <p className="text-neutral-300 mb-6">Want to ensure your Cane Corso is growing correctly? Use our tactical tools to track development and nutrition.</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/growth" className="bg-primary text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
                                Growth Predictor
                            </Link>
                            <Link href="/checklist" className="bg-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition">
                                Socialization Checklist
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
