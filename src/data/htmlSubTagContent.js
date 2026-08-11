export const HTML_SUB_TAG_CONTENT = {
  title: 'HTML sub Tag',
  lastUpdated: '3 Apr, 2026',
  intro:
    'The <sub> tag in HTML defines subscript text, displayed smaller and below the normal text baseline. It is commonly used in chemical formulas, mathematical expressions, and footnotes (for example H<sub>2</sub>O).',
  syntax: '<sub> Contents. . . </sub>',
  highlights: [
    'Subscript text appears slightly lower and smaller than surrounding text.',
    'Useful for formulas such as H<sub>2</sub>O and x<sub>n</sub> + y<sub>n</sub>.',
    'There are no attributes specific only to <sub>; global attributes still apply.',
  ],
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    <h1>Using the <sub> Tag in HTML</h1>\n    <p>Chemical formula example: H<sub>2</sub>O</p>\n    <p>Mathematical expression example: E = mc<sub>2</sub></p>\n    <p>Footnote example: Water molecule contains two hydrogen atoms<sub>1</sub></p>\n</body>\n</html>`,
  examples: [
    {
      title: 'Example 1: Chemical formula of water',
      description:
        'The <sub> tag is used to create subscript text. The "2" in H<sub>2</sub>O is rendered smaller and lower than the baseline.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body style="text-align: center;">\n    <h1 style="color: green;"> GeeksforGeeks </h1>\n    <h2>Chemical Formula of Water</h2>\n    <h2>H<sub>2</sub>O</h2>\n</body>\n</html>`,
    },
    {
      title: 'Example 2: Mathematical formula',
      description:
        'The <sub> tag displays subscript text for variable notation such as x<sub>n</sub> + y<sub>n</sub>.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body style="text-align: center;">\n    <h1 style="color: green;"> GeeksforGeeks </h1>\n    <h2>Mathematical Formula</h2>\n    <h2>x<sub>n</sub> + y<sub>n</sub></h2>\n</body>\n</html>`,
    },
  ],
  quiz: {
    question: 'Which tag is used to render text below the baseline in HTML?',
    options: ['A. <sup>', 'B. <small>', 'C. <sub>', 'D. <lower>'],
    answer: 'C. <sub>',
  },
  author: {
    name: 'codingbeast122',
    initial: 'C',
    url: 'https://www.geeksforgeeks.org/html/html-sub-tag/',
  },
  reactions: 1,
  articleTags: ['CSS', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-sub-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/css/html-sub-tag/',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/20201207234959/sub1.PNG',
    'https://media.geeksforgeeks.org/wp-content/uploads/20201207235408/sub2.PNG',
  ],
  explore: [
    {
      heading: 'Explore',
      items: [
        { label: 'CSS Basics', url: 'https://www.geeksforgeeks.org/css/css-tutorial/' },
        { label: 'Styling & Properties', url: 'https://www.geeksforgeeks.org/css/css-properties-complete-reference/' },
        { label: 'Text & Fonts', url: 'https://www.geeksforgeeks.org/css/css-fonts/' },
        { label: 'Layouts & Design', url: 'https://www.geeksforgeeks.org/css/css-layout/' },
        { label: 'Modern Layout Systems', url: 'https://www.geeksforgeeks.org/css/css-flexbox/' },
        { label: 'Effects & Animations', url: 'https://www.geeksforgeeks.org/css/css-transitions/' },
        { label: 'Courses', url: 'https://www.geeksforgeeks.org/courses/category/development-testing' },
      ],
    },
  ],
};
