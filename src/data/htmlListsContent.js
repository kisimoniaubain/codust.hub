export const HTML_LISTS_CONTENT = {
  title: 'HTML Lists',
  lastUpdated: '26 Jun, 2026',
  intro:
    'HTML lists are used to organize related items clearly. The three main list types are unordered lists (<ul>), ordered lists (<ol>), and description lists (<dl>).',
  highlights: [
    'Use <ul> for bullet lists when order is not important.',
    'Use <ol> for numbered/ordered steps or ranking.',
    'Use <dl> for term-definition pairs.',
  ],
  syntax: '<ul>\n  <li>Item</li>\n</ul>\n\n<ol>\n  <li>Step</li>\n</ol>\n\n<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>',
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <h3>Unordered List</h3>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n\n  <h3>Ordered List</h3>\n  <ol>\n    <li>Plan</li>\n    <li>Build</li>\n    <li>Test</li>\n  </ol>\n\n  <h3>Description List</h3>\n  <dl>\n    <dt>HTML</dt>\n    <dd>Structure of a web page.</dd>\n    <dt>CSS</dt>\n    <dd>Presentation and styling.</dd>\n  </dl>\n</body>\n</html>`,
  basicExampleNotes: [
    '<ul> displays list items with bullets.',
    '<ol> displays list items with numbers by default.',
    '<dl> is used for definitions using <dt> and <dd>.',
  ],
  nestedExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <ul>\n    <li>Frontend\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n      </ul>\n    </li>\n    <li>Backend\n      <ul>\n        <li>Node.js</li>\n        <li>Database</li>\n      </ul>\n    </li>\n  </ul>\n</body>\n</html>`,
  nestedExampleNotes: [
    'You can place one list inside another to create hierarchy.',
    'Nested lists are useful for categories and sub-categories.',
  ],
  bestPractices: [
    'Choose the list type based on meaning, not just appearance.',
    'Keep list items concise and parallel in style.',
    'Use CSS to control spacing, bullets, and numbering style.',
  ],
  quiz: {
    question: 'Which HTML element is best for term-definition pairs?',
    options: ['A. <ul>', 'B. <ol>', 'C. <dl>', 'D. <li>'],
    answer: 'C. <dl>',
  },
  author: {
    name: 'Vijay Sirra',
    initial: 'V',
    url: 'https://www.geeksforgeeks.org/html/html-lists/',
  },
  reactions: 4,
  articleTags: ['Web Technologies', 'HTML', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-lists/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-lists/',
  explore: [
    {
      heading: 'Explore',
      items: [
        { label: 'HTML Basics', url: 'https://www.geeksforgeeks.org/html/html-introduction/' },
        { label: 'Structure & Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
        { label: 'Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
        { label: 'Visuals & Media', url: 'https://www.geeksforgeeks.org/html/html-media/' },
        { label: 'Layouts & Designs', url: 'https://www.geeksforgeeks.org/html/html-layout/' },
        { label: 'Projects & Advanced Topics', url: 'https://www.geeksforgeeks.org/html/html-projects/' },
        { label: 'Tutorial References', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
      ],
    },
  ],
};
