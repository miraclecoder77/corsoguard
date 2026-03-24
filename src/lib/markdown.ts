
export interface BlogPostMetadata {
    title: string;
    description: string;
    date: string;
    author: string;
    image: string;
    category: string;
    readTime: string;
}

export function parseMarkdown(content: string) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = content.match(frontmatterRegex);
    
    let metadata: Partial<BlogPostMetadata> = {};
    let markdownContent = content;

    if (match) {
        const yaml = match[1];
        markdownContent = content.replace(frontmatterRegex, '');
        
        yaml.split('\n').forEach(line => {
            const [key, ...value] = line.split(':');
            if (key && value.length) {
                const k = key.trim() as keyof BlogPostMetadata;
                const v = value.join(':').trim();
                metadata[k] = v;
            }
        });
    }

    // Basic markdown to HTML conversion (reusing logic from page.tsx but more robust)
    let html = markdownContent;

    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-extrabold text-white mb-6 mt-12">$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-4 mt-8">$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-4 mt-6">$1</h3>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<div class="bg-neutral-800/50 border-l-4 border-primary p-6 my-8 rounded-r-xl text-neutral-200 text-lg shadow-lg border-y border-r border-white/5">$1</div>');

    // Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

    // Lists
    html = html.replace(/^\s*-\s+(.*$)/gim, '<li class="text-neutral-300 ml-4 mb-2 list-disc">$1</li>');
    html = html.replace(/(<li.*<\/li>)/gms, '<ul class="mb-6">$1</ul>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-white underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all font-medium">$1</a>');

    // Paragraphs
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs.map(p => {
        const trimmed = p.trim();
        if (trimmed.startsWith('<h') || trimmed.startsWith('<div') || trimmed.startsWith('<ul') || trimmed.startsWith('[[')) {
            return p;
        }
        return `<p class="text-neutral-300 mb-6 leading-relaxed">${p.replace(/\n/g, ' ')}</p>`;
    }).join('\n');

    return { metadata, html };
}
