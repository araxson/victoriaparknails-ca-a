import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // A more robust markdown parser with improved regex patterns
  const processContent = (markdown: string) => {
    // Process headers (h1, h2, h3)
    let processed = markdown
      .replace(/^### (.*$)/gm, "<h3>$1</h3>")
      .replace(/^## (.*$)/gm, "<h2>$1</h2>")
      .replace(/^# (.*$)/gm, "<h1>$1</h1>");

    // Process bold and italic text
    processed = processed
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Process links
    processed = processed.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" rel="noopener noreferrer">$1</a>',
    );

    // Process lists - improved to handle nested lists better
    processed = processed.replace(/^\- (.*$)/gm, "<li>$1</li>");

    // Wrap lists in <ul> tags more effectively
    const paragraphs = processed.split(/\n\s*\n/);
    processed = paragraphs
      .map((p) => {
        // Check if paragraph contains list items
        if (p.includes("<li>")) {
          return `<ul>${p.replace(/<\/li>\s*<li>/g, "</li><li>")}</ul>`;
        }

        // Handle headings and other elements
        if (
          p.trim().startsWith("<h1>") ||
          p.trim().startsWith("<h2>") ||
          p.trim().startsWith("<h3>") ||
          !p.trim()
        ) {
          return p.trim();
        }

        // Regular paragraphs
        return `<p>${p.trim()}</p>`;
      })
      .join("\n\n");

    // Fix any duplicate tags
    processed = processed.replace(/<\/ul>\s*<ul>/g, "");

    return processed;
  };

  return (
    <div
      className="markdown-content prose prose-sm md:prose-base lg:prose-lg dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: processContent(content) }}
    />
  );
}
