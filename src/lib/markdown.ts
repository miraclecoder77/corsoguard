
export interface FAQItem {
    question: string;
    answer: string;
}

export interface BlogPostMetadata {
    title: string;
    description: string;
    date: string;
    dateModified: string;
    author: string;
    image: string;
    category: string;
    readTime: string;
    faqs: FAQItem[];
}

// Frontmatter values are commonly wrapped in quotes so that titles containing a
// colon survive YAML parsing. Those quotes are delimiters, not content — leaving
// them in place puts literal `"` characters into <title> and meta description.
function unquote(value: string): string {
    const trimmed = value.trim();
    if (trimmed.length >= 2) {
        const first = trimmed[0];
        const last = trimmed[trimmed.length - 1];
        if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
            return trimmed.slice(1, -1).replace(/\\"/g, '"');
        }
    }
    return trimmed;
}

/**
 * Minimal frontmatter reader. Supports `key: value` scalars plus the nested
 * list-of-maps shape used by `faqs`:
 *
 *   faqs:
 *     - question: "..."
 *       answer: "..."
 */
function parseFrontmatter(yaml: string): Partial<BlogPostMetadata> {
    const metadata: Record<string, unknown> = {};
    const lines = yaml.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim() || line.trim().startsWith('#')) continue;
        // Only top-level keys start a new field; indented lines belong to a block.
        if (/^\s/.test(line)) continue;

        const separator = line.indexOf(':');
        if (separator === -1) continue;

        const key = line.slice(0, separator).trim();
        const inlineValue = line.slice(separator + 1).trim();

        if (inlineValue) {
            metadata[key] = unquote(inlineValue);
            continue;
        }

        // Empty value → gather the indented block that follows.
        const block: string[] = [];
        while (i + 1 < lines.length && (/^\s+\S/.test(lines[i + 1]) || !lines[i + 1].trim())) {
            block.push(lines[++i]);
        }
        const items = parseListOfMaps(block);
        if (items.length) metadata[key] = items;
    }

    return metadata as Partial<BlogPostMetadata>;
}

function parseListOfMaps(block: string[]): Record<string, string>[] {
    const items: Record<string, string>[] = [];
    let current: Record<string, string> | null = null;

    for (const raw of block) {
        if (!raw.trim()) continue;
        const isNewItem = /^\s*-\s/.test(raw);
        const body = raw.replace(/^\s*-\s*/, '').trim();
        const separator = body.indexOf(':');
        if (separator === -1) continue;

        if (isNewItem) {
            current = {};
            items.push(current);
        }
        if (!current) continue;

        current[body.slice(0, separator).trim()] = unquote(body.slice(separator + 1));
    }

    return items;
}

export function parseMarkdown(content: string) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = content.match(frontmatterRegex);

    let metadata: Partial<BlogPostMetadata> = {};
    let markdownContent = content;

    if (match) {
        markdownContent = content.replace(frontmatterRegex, '');
        metadata = parseFrontmatter(match[1]);
    }

    // Basic markdown to HTML conversion
    let html = markdownContent;

    // Headers
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-extrabold text-white mb-6 mt-12">$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-4 mt-8">$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-4 mt-6">$1</h3>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<div class="bg-neutral-800/50 border-l-4 border-primary p-6 my-8 rounded-r-xl text-neutral-200 text-lg shadow-lg border-y border-r border-white/5">$1</div>');

    // Markdown tables — process full table blocks (header + separator + rows)
    html = html.replace(
        /(\|[^\n]+\|\n)((?:\|[-: ]+)+\|\n)((?:\|[^\n]+\|\n?)*)/gm,
        (match, header, _sep, body) => {
            const parseRow = (row: string, tag: string) =>
                '<tr>' +
                row.split('|')
                   .slice(1, -1)
                   .map(cell => `<${tag} class="${tag === 'th' ? 'py-2 px-3 text-left text-primary text-xs uppercase tracking-widest font-bold border-b border-white/10' : 'py-2 px-3 text-neutral-300 border-b border-white/5'}">${cell.trim()}</${tag}>`)
                   .join('') +
                '</tr>';
            const headerRow = parseRow(header.trim(), 'th');
            const bodyRows = body.trim().split('\n').filter(Boolean).map((r: string) => parseRow(r, 'td')).join('');
            return `<div class="overflow-x-auto my-8"><table class="w-full text-sm border-collapse bg-white/[0.02] rounded-xl overflow-hidden"><thead>${headerRow}</thead><tbody>${bodyRows}</tbody></table></div>`;
        }
    );

    // Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

    // Ordered lists
    html = html.replace(/^\d+\.\s+(.*$)/gim, '<li class="text-neutral-300 ml-4 mb-2 list-decimal">$1</li>');

    // Unordered lists
    html = html.replace(/^\s*[-*]\s+(.*$)/gim, '<li class="text-neutral-300 ml-4 mb-2 list-disc">$1</li>');

    // Wrap consecutive list items
    html = html.replace(/(<li.*<\/li>)/gms, '<ul class="mb-6">$1</ul>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-white underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all font-medium">$1</a>');

    // Paragraphs
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs.map(p => {
        const trimmed = p.trim();
        if (trimmed.startsWith('<h') || trimmed.startsWith('<div') || trimmed.startsWith('<ul') || trimmed.startsWith('<table') || trimmed.startsWith('[[')) {
            return p;
        }
        return `<p class="text-neutral-300 mb-6 leading-relaxed">${p.replace(/\n/g, ' ')}</p>`;
    }).join('\n');

    return { metadata, html };
}
