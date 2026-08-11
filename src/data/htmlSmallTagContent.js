export const HTML_SMALL_TAG_CONTENT = {
  title: 'HTML small Tag',
  lastUpdated: '3 Apr, 2026',
  intro:
    'The <small> tag in HTML is an inline element used to display text in a smaller font size, typically for less important or secondary information.',
  highlights: [
    'It is commonly used for fine print, disclaimers, or secondary information.',
    'The <small> tag does not change semantic meaning, but visually deemphasizes text.',
  ],
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    <h1> GeeksforGeeks </h1>\n    <h2> <small> Tag </h2>\n    <small> Welcome to GeeksforGeeks! </small>\n</body>\n</html>`,
  syntax: '<small> Contents... </small>',
  importantNotes: [
    'The <small> tag supports Global Attributes and Event Attributes in HTML.',
    'This tag is not deprecated, but nearly the same visual effect can also be achieved with CSS.',
  ],
  workingHeading: 'Working with small Tag',
  nestedHeading: '1. In a Nested Form',
  nestedDescription:
    'When <small> is nested inside a parent element, the font size changes relative to the parent element font size (relative sizing).',
  nestedExamples: [
    {
      title: 'Example 1: small text nested inside paragraph (18px parent)',
      code: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    <h2> Welcome To GFG </h2>\n    <p style="font-size: 18px;">\n        Geeks For Geeks\n        <small>\n            A platform to learn coding and computer science concepts.\n        </small>\n    </p>\n</body>\n</html>`,
      note: 'The <small> tag uses relative sizing, so it scales with the parent element font size.',
    },
    {
      title: 'Example 2: small text nested inside paragraph (32px parent)',
      code: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    <h2> Welcome To GFG </h2>\n    <p style="font-size: 32px">\n        Geeks for Geeks\n        <small>\n            Your go-to platform for learning programming and computer science.\n        </small>\n    </p>\n</body>\n</html>`,
      note: 'Because sizing is relative, the nested <small> scales from the larger parent size.',
    },
  ],
  nonNestedHeading: '2. In a Non-nested Form',
  nonNestedDescription:
    'If <small> is used as a separate element, changing the font size of nearby elements will not directly change that separate <small> block.',
  nonNestedExamples: [
    {
      title: 'Example 1: secondary text shown smaller inside paragraph',
      code: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    <h2>Welcome To GFG</h2>\n    <p style="font-size: 18px">\n        Geeks For Geeks\n        <small>\n            Your go-to platform for learning programming and computer science.\n        </small>\n    </p>\n</body>\n</html>`,
      note: 'If we change the paragraph font size, the nested <small> remains relatively smaller than its surrounding paragraph text.',
    },
    {
      title: 'Example 2: separate small element below paragraph',
      code: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    <h2> Welcome To GFG </h2>\n    <p style="font-size: 32px">\n        Geeks For Geeks\n    </p>\n    <small>\n        A platform to learn coding, data structures, and algorithms.\n    </small>\n</body>\n</html>`,
      note: 'Here <small> is independent and rendered as a separate element in smaller text.',
    },
  ],
  cssHeading: 'Example 3: Using CSS property to set smaller font',
  cssExampleCode: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n    <style>\n        body {\n            text-align: center;\n        }\n        h1 {\n            color: green;\n        }\n        .gfg {\n            font-size: smaller;\n        }\n    </style>\n</head>\n<body>\n    <h1> GeeksforGeeks </h1>\n    <h2> font-size: smaller; </h2>\n    <div class="gfg">\n        Welcome to GeeksforGeeks! (using CSS smaller)\n    </div>\n    <p>\n        <small>\n            Welcome to GeeksforGeeks! (using <small> tag)\n        </small>\n    </p>\n</body>\n</html>`,
  cssExampleNote: 'CSS `font-size: smaller` and the <small> tag can produce similar visual results.',
  quiz: {
    question: 'Which tag is used to render less-important inline text in smaller size?',
    options: ['A. <mini>', 'B. <small>', 'C. <tiny>', 'D. <sub>'],
    answer: 'B. <small>',
  },
  author: {
    name: 'vvt_m3',
    initial: 'V',
    url: 'https://www.geeksforgeeks.org/html/html-small-tag/',
  },
  reactions: 1,
  articleTags: ['Web Technologies', 'HTML', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-small-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-small-tag/',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/small2.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260130153243284620/Screenshot-2026-01-30-153220.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260402102725940074/Screenshot-2026-01-30-153002.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260130152820702293/Screenshot-2026-01-30-150807.png',
  ],
  explore: [
    {
      heading: 'Explore',
      items: [
        { label: 'HTML Basics', url: 'https://www.geeksforgeeks.org/html/html-introduction/' },
        { label: 'Structure & Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
        { label: 'Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
        { label: 'Visuals & Media', url: 'https://www.geeksforgeeks.org/html/html-images/' },
        { label: 'Layouts & Designs', url: 'https://www.geeksforgeeks.org/html/html-layout/' },
        { label: 'Projects & Advanced Topics', url: 'https://www.geeksforgeeks.org/html/html-projects/' },
        { label: 'Tutorial References', url: 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/' },
        { label: 'HTML Courses', url: 'https://www.geeksforgeeks.org/courses/category/development-testing' },
      ],
    },
  ],
};
