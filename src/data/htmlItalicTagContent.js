export const HTML_ITALIC_TAG_CONTENT = {
  title: 'HTML i Tag (Make Text Italic)',
  lastUpdated: '26 Jun, 2026',
  intro:
    'The <i> tag displays text in an alternate voice or mood, commonly shown in italic style. It is often used for terms, thoughts, or foreign words.',
  highlights: [
    'Use <i> for text that is offset from normal prose.',
    'Browsers typically render <i> text in italic style.',
    'For semantic emphasis, prefer <em> instead of <i>.',
    'CSS font-style can also be used for styling control.',
  ],
  syntax: '<i>Italic text</i>',
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <p>This is <i>italic text</i> using the i tag.</p>\n  <p><i>GeeksforGeeks</i> provides web development tutorials.</p>\n</body>\n</html>`,
  basicExampleNotes: [
    'The <i> element changes visual text style to italic in most browsers.',
    'It can be used inline within headings, paragraphs, and list items.',
  ],
  semanticComparisonCode: '<p><i>Homo sapiens</i> is a scientific name.</p>\n<p><em>Warning:</em> Save your work before closing.</p>',
  semanticComparisonNotes: [
    '<i> is for alternate voice/mood or terms.',
    '<em> is for stress emphasis and has semantic meaning for assistive technologies.',
  ],
  cssExampleCode: '<p class="italics">Styled with CSS font-style.</p>\n\n<style>\n  .italics {\n    font-style: italic;\n  }\n</style>',
  cssExampleNote: 'Use CSS when styling should be separated from document structure.',
  bestPractices: [
    'Use <i> for conventional technical or foreign terms, not for generic emphasis.',
    'Prefer <em> when the text should carry semantic emphasis.',
    'Keep usage consistent across the page for readability.',
  ],
  quiz: {
    question: 'Which element is better when you need semantic emphasis?',
    options: ['A. <i>', 'B. <span>', 'C. <em>', 'D. <b>'],
    answer: 'C. <em>',
  },
  author: {
    name: 'GeeksforGeeks',
    initial: 'G',
    url: 'https://www.geeksforgeeks.org/html/html-i-tag/',
  },
  reactions: 4,
  articleTags: ['HTML', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-i-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-i-tag/',
  explore: [
    {
      heading: 'Explore',
      items: [
        { label: 'HTML Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
        { label: 'HTML Text Formatting', url: 'https://www.geeksforgeeks.org/html/html-text-formatting/' },
        { label: 'Bold Text', url: 'https://www.geeksforgeeks.org/html/html-b-tag/' },
        { label: 'Emphasized Text', url: 'https://www.geeksforgeeks.org/html/html-em-tag/' },
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
      ],
    },
  ],
};
