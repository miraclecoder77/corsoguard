import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Tag } from 'lucide-react';
import AdSenseUnit from '@/components/AdSenseUnit';
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid';
import { parseMarkdown, BlogPostMetadata } from '@/lib/markdown';

export default function BlogIndex() {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    let postData: { slug: string, metadata: Partial<BlogPostMetadata> }[] = [];

    try {
        const fileNames = fs.readdirSync(postsDirectory);
        postData = fileNames.map(fileName => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { metadata } = parseMarkdown(fileContents);
            return { slug, metadata };
        });

        // Sort by date descending
        postData.sort((a, b) => {
            if (!a.metadata.date || !b.metadata.date) return 0;
            return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
        });
    } catch (e) {
        console.error("Error reading blog posts:", e);
    }

    return (
        <div className="min-h-screen p-8 pt-24 max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
            </Link>

            <div className="mb-12">
                <h1 className="text-5xl font-extrabold text-white mb-4">Ultimate Cane Corso Guides</h1>
                <p className="text-neutral-400 text-lg max-w-2xl">Expert tips on behavior, health, and training for protective owners. E-E-A-T backed for reliable guardian dog advice.</p>
            </div>

            <AdSenseUnit slotId="blog-list-top" type="banner" className="mb-12" />

            <BentoGrid className="md:auto-rows-[25rem]">
                {postData.map(({ slug, metadata }, index) => (
                    <BentoGridItem
                        key={slug}
                        title={metadata.title || slug.replace(/-/g, ' ')}
                        description={
                            <div className="flex flex-col space-y-2">
                                <p className="line-clamp-2">{metadata.description}</p>
                                <div className="flex items-center gap-4 mt-auto pt-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {metadata.readTime || '5 MIN'}
                                    </span>
                                    <span className="flex items-center gap-1 text-primary">
                                        <Tag className="w-3 h-3" /> {metadata.category || 'GUIDE'}
                                    </span>
                                </div>
                            </div>
                        }
                        header={
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover/bento:scale-110"
                                style={{ backgroundImage: `url(${metadata.image || '/breed-guide-card.png'})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                {index === 0 && (
                                    <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                                        Featured
                                    </div>
                                )}
                            </div>
                        }
                        className={index === 0 ? "md:col-span-2" : "md:col-span-1"}
                        icon={<BookOpen className="w-4 h-4" />}
                        href={`/blog/${slug}`}
                    />
                ))}
            </BentoGrid>

            <div className="mt-16">
                <AdSenseUnit slotId="blog-list-bottom" type="multiplex" />
            </div>
        </div>
    );
}
