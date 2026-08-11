export const HTML_ORDERED_LISTS_CONTENT = {
  title: 'HTML Ordered Lists',
  lastUpdated: '26 Jun, 2026',
  intro:
    'HTML ordered lists use the <ol> tag to display items in sequence. Each item is defined using <li>, and markers can be customized with attributes.',
  highlights: [
    'Use <ol> for ranked items, instructions, and step-by-step flows.',
    'Each list item is created with <li>.',
    'Marker style can be changed with the type attribute.',
    'Use start and reversed to control counting behavior.',
  ],
  syntax: '<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ol>',
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <h2>My To-Do List</h2>\n  <ol>\n    <li>Go grocery shopping</li>\n    <li>Finish assignment</li>\n    <li>Pay utility bills</li>\n    <li>Prepare dinner</li>\n  </ol>\n</body>\n</html>`,
  basicExampleNotes: [
    'Without type, the default marker style is numeric (1, 2, 3...).',
    'Ordered lists are ideal when sequence matters.',
  ],
  typeExamples: [
    {
      heading: 'Numbered (Default)',
      code: '<ol type="1">\n  <li>JavaScript</li>\n  <li>Python</li>\n  <li>Java</li>\n</ol>',
      note: 'type="1" displays numeric markers.',
    },
    {
      heading: 'Uppercase Letters',
      code: '<ol type="A">\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Cherry</li>\n</ol>',
      note: 'type="A" displays A, B, C.',
    },
    {
      heading: 'Lowercase Letters',
      code: '<ol type="a">\n  <li>React</li>\n  <li>Vue</li>\n  <li>Angular</li>\n</ol>',
      note: 'type="a" displays a, b, c.',
    },
    {
      heading: 'Uppercase Roman',
      code: '<ol type="I">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>',
      note: 'type="I" displays I, II, III.',
    },
    {
      heading: 'Lowercase Roman',
      code: '<ol type="i">\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ol>',
      note: 'type="i" displays i, ii, iii.',
    },
  ],
  reverseExampleCode: '<ol reversed>\n  <li>The Shawshank Redemption</li>\n  <li>The Godfather</li>\n  <li>Inception</li>\n  <li>Interstellar</li>\n</ol>',
  reverseExampleNote: 'Use reversed to count down from the highest value.',
  startExampleCode: '<ol start="5">\n  <li>Item 5</li>\n  <li>Item 6</li>\n  <li>Item 7</li>\n</ol>',
  startExampleNote: 'Use start to set the first marker value.',
  nestedExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n  <h2>Nested Ordered List</h2>\n  <ol>\n    <li>JavaScript\n      <ol>\n        <li>React</li>\n        <li>Angular</li>\n      </ol>\n    </li>\n    <li>Python\n      <ol>\n        <li>Django</li>\n        <li>Flask</li>\n      </ol>\n    </li>\n  </ol>\n</body>\n</html>`,
  nestedExampleNotes: [
    'Nested ordered lists are created by placing <ol> inside an <li>.',
    'They are useful for multi-level sequences.',
  ],
  bestPractices: [
    'Use ordered lists only when sequence has meaning.',
    'Choose a marker style that matches readability needs.',
    'Keep nesting levels limited for better clarity.',
  ],
  quiz: {
    question: 'Which attribute starts an ordered list from a custom value?',
    options: ['A. value', 'B. start', 'C. index', 'D. begin'],
    answer: 'B. start',
  },
  author: {
    name: 'GeeksforGeeks',
    initial: 'G',
    url: 'https://www.geeksforgeeks.org/html/html-ol-tag/',
  },
  reactions: 5,
  articleTags: ['HTML', 'HTML-Basics'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-ol-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-ol-tag/',
  explore: [
    {
      heading: 'Explore',
      items: [
        { label: 'HTML Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
        { label: 'Unordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ul-tag/' },
        { label: 'Description Lists', url: 'https://www.geeksforgeeks.org/html/html-description-lists/' },
        { label: 'HTML Tags', url: 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/' },
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
      ],
    },
  ],
};
