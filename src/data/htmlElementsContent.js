export const HTML_ELEMENTS_CONTENT = {
  title: 'HTML Elements',
  lastUpdated: '17 Apr, 2026',
  intro:
    'HTML elements are the basic building blocks of a webpage, defining structure and content using start tags, content, and end tags.',
  bullets: [
    'Elements start with an opening tag <tagname> and end with a closing tag </tagname>.',
    'Elements can contain text, attributes, and nested elements.',
    'Some elements are self-closing (for example, <br> and <img>).',
    'Proper nesting ensures valid, accessible, and well-structured HTML.',
  ],
  introCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <p>Welcome to GeeksforGeeks!</p>\n</body>\n</html>`,
  caseSensitivity: {
    title: 'Case Sensitivity',
    description:
      'HTML tags are not case-sensitive. For example, <B> and <b> both work, but lowercase tags are recommended for consistency and readability.',
  },
  nested: {
    title: 'Nested HTML Elements',
    description:
      'Nested elements happen when one element is placed inside another, creating a clear parent-child hierarchy in the DOM.',
    points: [
      'Nested elements create structure that browsers and assistive technologies can understand.',
      'Proper nesting improves accessibility and predictable rendering.',
    ],
    code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body style="text-align:center">\n  <h1>GeeksforGeeks</h1>\n  <p>Computer science portal</p>\n</body>\n</html>`,
  },
  endTag: {
    title: 'Necessary to Add an End Tag',
    description:
      'Always include closing tags for non-void HTML elements because missing tags can cause unexpected browser layout issues.',
    points: [
      'Browsers may auto-add missing closing tags.',
      'Auto-correction can create unpredictable layouts.',
      'Use explicit closing tags for non-void elements.',
    ],
    code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <h2>Welcome To GeeksforGeeks</h2>\n  <p>Hi Geeks</p>\n</body>\n</html>`,
  },
  emptyElements: {
    title: 'HTML Empty Element',
    description:
      'Elements without content are called empty elements. They do not need an ending tag, such as <br>, <hr>, <link>, and <input>.',
    code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <h2>Welcome To GfG</h2>\n  <br />\n  <p>Hello Geeks.</p>\n</body>\n</html>`,
  },
  displayTypes: {
    title: 'Block-Level Elements and Inline Elements',
    intro:
      'In HTML, elements are grouped by layout behavior into block-level elements and inline elements.',
    blockLevel: {
      title: '1. Block-Level Elements',
      description:
        'Block-level elements start on a new line, take full available width, stack vertically, and can contain both block and inline elements.',
      examples: [
        '<div>: general-purpose container.',
        '<p>: paragraph container.',
        '<h1> to <h6>: heading levels.',
        '<ol> and <ul>: ordered and unordered lists.',
        '<table>: tabular data container.',
        '<form>: form container for inputs.',
        '<section>, <article>, <nav>, <aside>, <header>, <footer>: semantic sectioning elements.',
      ],
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <div>\n    <h2>GeeksforGeeks</h2>\n    <p>This content is inside a div.</p>\n  </div>\n\n  <table border="1">\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n    <tr>\n      <td>David</td>\n      <td>22</td>\n    </tr>\n  </table>\n</body>\n</html>`,
    },
    inline: {
      title: '2. Inline Elements',
      description:
        'Inline elements do not start on a new line and take only as much width as needed by their content.',
      examples: [
        '<span>: general-purpose inline container.',
        '<a>: hyperlink element.',
        '<img>: embeds images.',
        '<strong> and <b>: strong/bold emphasis.',
        '<em> and <i>: emphasized/italic text.',
        '<br>: line break.',
        '<input>: interactive form control.',
      ],
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <p>\n    This is a <span>span element</span> used for styling text.\n  </p>\n  <p>\n    <strong>Strong text</strong> and <b>bold text</b> are inline elements.\n    <em>Emphasized text</em> and <i>italic text</i> are also inline.\n  </p>\n  <form>\n    <label>Name:</label>\n    <input type="text" placeholder="Enter your name">\n  </form>\n</body>\n</html>`,
    },
  },
  linkParagraph:
    'Also Check: [HTML Block and Inline Elements](https://www.geeksforgeeks.org/html/html-block-and-inline-elements/) and [HTML Elements in Web Development](https://www.geeksforgeeks.org/html/html-elements/).',
  quiz: {
    total: '5 Questions',
    question: 'What is the purpose of HTML elements?',
    options: [
      'A) To define the structure of a webpage',
      'B) To specify the style of a webpage',
      'C) To determine the behavior of JavaScript code',
      'D) To define how data will be displayed or formatted by web browsers',
    ],
    answer: 'A) To define the structure of a webpage',
  },
  articleTags: ['Web Technologies', 'HTML', 'HTML-Basics'],
  author: {
    name: 'Nnk464529145',
    initial: 'N',
    url: 'https://www.geeksforgeeks.org/html/html-elements/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/html-elements/',
  images: ['https://media.geeksforgeeks.org/wp-content/uploads/20240115082036/add.png'],
  explore: [
    {
      heading: 'Explore',
      groups: [
        {
          heading: 'HTML Basics',
          items: [
            { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
            { label: 'HTML Introduction', url: 'https://www.geeksforgeeks.org/html/html-introduction/' },
            { label: 'HTML Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
            { label: 'Structure', url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/' },
            { label: 'HTML Comments', url: 'https://www.geeksforgeeks.org/html/html-comments/' },
          ],
        },
        {
          heading: 'Structure & Elements',
          items: [
            { label: 'HTML Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
            { label: 'Semantic Tags', url: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/' },
            { label: 'HTML Block and Inline Elements', url: 'https://www.geeksforgeeks.org/html/html-block-and-inline-elements/' },
          ],
        },
        {
          heading: 'Lists',
          items: [
            { label: 'HTML Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
            { label: 'Ordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ol-tag/' },
            { label: 'Unordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ul-tag/' },
          ],
        },
        {
          heading: 'Visuals & Media',
          items: [
            { label: 'HTML Images', url: 'https://www.geeksforgeeks.org/html/html-images/' },
            { label: 'HTML Audio', url: 'https://www.geeksforgeeks.org/html/html-audio/' },
            { label: 'HTML Videos', url: 'https://www.geeksforgeeks.org/html/html-videos/' },
          ],
        },
      ],
    },
    {
      heading: 'HTML Courses',
      items: [
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
        { label: 'HTML Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
      ],
    },
  ],
};
