export const HTML_UNORDERED_LISTS_CONTENT = {
  title: 'HTML Unordered Lists',
  lastUpdated: '26 Jun, 2026',
  intro:
    'An HTML unordered list uses the <ul> tag to show a collection of items where sequence does not matter. Each item is written with an <li> tag.',
  highlights: [
    'Use <ul> when order is not important.',
    'Each list item is defined with <li>.',
    'You can change bullet style using CSS list-style-type.',
    'Nested unordered lists are useful for categories and sub-categories.',
  ],
  syntax: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>',
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <h2>My Grocery Items</h2>\n  <ul>\n    <li>Milk</li>\n    <li>Eggs</li>\n    <li>Bread</li>\n    <li>Butter</li>\n  </ul>\n</body>\n</html>`,
  basicExampleNotes: [
    'Default unordered lists use filled circle bullets (disc).',
    'A browser renders bullets automatically for <ul>.',
  ],
  bulletStyleExamples: [
    {
      heading: 'Disc Bullets (Default)',
      code: '<ul style="list-style-type: disc;">\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>',
      note: 'disc is the default marker style.',
    },
    {
      heading: 'Circle Bullets',
      code: '<ul style="list-style-type: circle;">\n  <li>React</li>\n  <li>Vue</li>\n  <li>Angular</li>\n</ul>',
      note: 'circle uses hollow circular markers.',
    },
    {
      heading: 'Square Bullets',
      code: '<ul style="list-style-type: square;">\n  <li>Node.js</li>\n  <li>Express</li>\n  <li>MongoDB</li>\n</ul>',
      note: 'square displays square markers.',
    },
    {
      heading: 'No Bullets',
      code: '<ul style="list-style-type: none;">\n  <li>Home</li>\n  <li>About</li>\n  <li>Contact</li>\n</ul>',
      note: 'none removes list markers completely.',
    },
  ],
  nestedExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <h2>Tech Stack</h2>\n  <ul>\n    <li>Frontend\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>JavaScript</li>\n      </ul>\n    </li>\n    <li>Backend\n      <ul>\n        <li>Node.js</li>\n        <li>Database</li>\n      </ul>\n    </li>\n  </ul>\n</body>\n</html>`,
  nestedExampleNotes: [
    'Place another <ul> inside an <li> to create nested levels.',
    'Use nested lists to present grouped information clearly.',
  ],
  bestPractices: [
    'Keep item text concise and consistent.',
    'Use semantic lists for navigation groups, features, and categories.',
    'Prefer CSS for marker style instead of old presentational attributes.',
  ],
  quiz: {
    question: 'Which CSS value removes bullets from an unordered list?',
    options: ['A. list-style-type: disc', 'B. list-style-type: none', 'C. list-style-type: lower-alpha', 'D. list-style-type: decimal'],
    answer: 'B. list-style-type: none',
  },
  author: {
    name: 'GeeksforGeeks',
    initial: 'G',
    url: 'https://www.geeksforgeeks.org/html/html-ul-tag/',
  },
  reactions: 5,
  articleTags: ['HTML', 'HTML-Basics'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-ul-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-ul-tag/',
  explore: [
    {
      heading: 'Explore',
      items: [
        { label: 'HTML Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
        { label: 'Ordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ordered-lists/' },
        { label: 'Description Lists', url: 'https://www.geeksforgeeks.org/html/html-description-lists/' },
        { label: 'HTML Tags', url: 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/' },
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
      ],
    },
  ],
};
