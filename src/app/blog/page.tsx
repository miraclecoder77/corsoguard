import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AdSenseUnit from '@/components/AdSenseUnit';

export default function BlogIndex() {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    let posts: string[] = [];
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        posts = fileNames.map(f => f.replace(/\.md$/, ''));
    } catch (e) {
        // If folder doesn't exist
    }

    return (
        <div className="min-h-screen p-8 pt-24 max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
            </Link>
            <h1 className="text-4xl font-extrabold text-white mb-2">Tactical Breed Guides</h1>
            <p className="text-neutral-400 mb-12">Expert E-E-A-T guides on Cane Corso behavior, health, and training.</p>

            <AdSenseUnit slotId="blog-list-top" type="banner" className="mb-12" />

            <div className="grid gap-6">
                {posts.map(slug => (
                    <Link key={slug} href={`/blog/${slug}`} className="block">
                        <div className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:bg-neutral-900 transition mb-4">
                            <h2 className="text-xl font-bold text-white mb-2 capitalize">{slug.replace(/-/g, ' ')}</h2>
                            <p className="text-primary text-sm font-bold">Read Guide →</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-16">
                <AdSenseUnit slotId="blog-list-bottom" type="multiplex" />
            </div>
        </div>
    );
}
