import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AdSenseUnit from '@/components/AdSenseUnit';

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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const fullPath = path.join(process.cwd(), `src/content/posts/${slug}.md`);
    let fileContents = '';
    try {
        fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
        fileContents = '# 404 Guide Not Found';
    }

    // Quick markdown parser for placeholders
    let parsedContent = fileContents;

    // Headers
    parsedContent = parsedContent.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-extrabold text-white mb-6 mt-12">$1</h1>');
    parsedContent = parsedContent.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-4 mt-8">$1</h2>');

    // Blockquotes
    parsedContent = parsedContent.replace(/^> (.*$)/gim, '<div class="bg-neutral-800/50 border-l-4 border-primary p-6 my-8 rounded-r-xl text-neutral-200 text-lg shadow-lg border-y border-r border-white/5">$1</div>');

    // Bold text
    parsedContent = parsedContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

    // Links
    parsedContent = parsedContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-white underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all font-medium">$1</a>');

    // Paragraph breaks
    parsedContent = parsedContent.replace(/\n\n/g, '</p><p class="text-neutral-300 mb-6 leading-relaxed">');

    // Wrap text not starting with HTML tags in <p>
    const htmlContent = parsedContent.replace(/^(?!<h|<p|<div)(.*)$/gim, '<p class="text-neutral-300 mb-6 leading-relaxed">$1</p>');

    return (
        <div className="min-h-screen p-8 pt-24 max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
            </Link>

            <AdSenseUnit slotId="blog-post-top" type="banner" className="mb-8" />

            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

            <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Related Reads</h3>
                <AdSenseUnit slotId="blog-post-multiplex" type="multiplex" />
            </div>
        </div>
    );
}
