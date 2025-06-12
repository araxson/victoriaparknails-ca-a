import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // A very simple markdown parser
  const processContent = (markdown: string) => {
    // Process headers (h1, h2, h3)
    let processed = markdown
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>');

    // Process bold text
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Process italic text
    processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Process lists
    processed = processed.replace(/^\- (.*$)/gm, '<li>$1</li>');
    processed = processed.replace(/(<li>.*<\/li>)/gm, '<ul>$1</ul>');
    
    // Fix duplicate <ul> tags
    processed = processed.replace(/<\/ul>\s*<ul>/g, '');
    
    // Process paragraphs
    const paragraphs = processed.split(/\n\s*\n/);
    processed = paragraphs
      .map(p => {
        if (
          p.trim().startsWith('<h1>') || 
          p.trim().startsWith('<h2>') || 
          p.trim().startsWith('<h3>') || 
          p.trim().startsWith('<ul>') ||
          !p.trim()
        ) {
          return p.trim();
        }
        return `<p>${p.trim()}</p>`;
      })
      .join('\n\n');

    return processed;
  };

  return (
    <div 
      className="markdown-content" 
      dangerouslySetInnerHTML={{ __html: processContent(content) }}
    />
  );
} 