export const HTML_DESCRIPTION_LISTS_CONTENT = {
  title: 'HTML Description Lists',
  lastUpdated: '26 Jun, 2026',
  intro:
    'HTML description lists use <dl> to represent term-description pairs. Terms are written with <dt> and descriptions are written with <dd>.',
  highlights: [
    'Use <dl> for glossaries, FAQs, metadata, and key-value style content.',
    '<dt> defines the term (name/title).',
    '<dd> defines the description or value for the term.',
    'A single term can have multiple descriptions.',
  ],
  syntax: '<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>',
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <h2>Web Terms</h2>\n  <dl>\n    <dt>HTML</dt>\n    <dd>Used to structure web pages.</dd>\n\n    <dt>CSS</dt>\n    <dd>Used to style web pages.</dd>\n\n    <dt>JavaScript</dt>\n    <dd>Used to add interactivity.</dd>\n  </dl>\n</body>\n</html>`,
  basicExampleNotes: [
    '<dl> wraps the full description list.',
    'Each <dt> can be followed by one or more <dd> elements.',
  ],
  multiDescriptionCode: '<dl>\n  <dt>Python</dt>\n  <dd>A high-level programming language.</dd>\n  <dd>Popular for web, automation, and data science.</dd>\n\n  <dt>React</dt>\n  <dd>A JavaScript library for building UIs.</dd>\n</dl>',
  multiDescriptionNote: 'One term can map to multiple description entries.',
  nestedExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <h2>Course Catalog</h2>\n  <dl>\n    <dt>Frontend</dt>\n    <dd>\n      <ul>\n        <li>HTML Basics</li>\n        <li>CSS Fundamentals</li>\n      </ul>\n    </dd>\n\n    <dt>Backend</dt>\n    <dd>\n      <ul>\n        <li>Node.js</li>\n        <li>Database Design</li>\n      </ul>\n    </dd>\n  </dl>\n</body>\n</html>`,
  nestedExampleNotes: [
    'Description content can include lists, links, and other HTML elements.',
    'This is useful for detailed term explanations.',
  ],
  bestPractices: [
    'Use description lists only for true term-description relationships.',
    'Keep each term concise and each description clear.',
    'Avoid using <dl> as a generic layout container.',
  ],
  quiz: {
    question: 'Which tag is used for a term inside a description list?',
    options: ['A. <li>', 'B. <dd>', 'C. <dt>', 'D. <dl-item>'],
    answer: 'C. <dt>',
  },
  author: {
    name: 'GeeksforGeeks',
    initial: 'G',
    url: 'https://www.geeksforgeeks.org/html/html-description-list/',
  },
  reactions: 4,
  articleTags: ['HTML', 'HTML-Basics'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-description-list/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-description-list/',
  explore: [
    {
      heading: 'Explore',
      items: [
        { label: 'HTML Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
        { label: 'Ordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ol-tag/' },
        { label: 'Unordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ul-tag/' },
        { label: 'HTML Tags', url: 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/' },
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
      ],
    },
  ],
};
