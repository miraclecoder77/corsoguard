---
description: How to create a new Tactical Breed Guide blog post
---

Follow these steps to add a new article to your blog:

### 1. Create the Content File
Create a new file in the `src/content/posts/` directory. Use a "kebab-case" filename (all lowercase, words separated by hyphens) as this will be your URL slug.
- **Example**: `cane-corso-recall-training.md`

### 2. Add Required Metadata (Frontmatter)
At the very top of your file, add the following block. This metadata is used for the index grid, the hero section, and SEO.

```markdown
---
title: How to Master Recall with Your Cane Corso
description: Step-by-step drills to ensure your 120lb dog comes back every single time.
date: 2024-03-10
author: CorsoGuard Team
image: /blog/recall-guide.png
category: Training
readTime: 6 min
---
```

### 3. Prepare the Featured Image
1. Generate or select a high-quality image (ideally 16:9 aspect ratio).
2. Save it as a `.png` or `.jpg` in the `public/blog/` directory.
3. Ensure the `image` field in your frontmatter (Step 2) matches the filename exactly.

### 4. Write Your Article
Below the closing `---`, write your content using standard Markdown.
- Use `#` for the main title (it will be styled as a premium header).
- Use `##` for subheadings.
- Use `**bold**` for emphasis.
- Use `> ` for tactical tips or highlights.

### 5. Verify the Result
- **Index Page**: Navigate to `/blog` to see your new article appear automatically in the Bento grid.
- **Post Layout**: Click the card to view the cinematic hero header and formatted content.
