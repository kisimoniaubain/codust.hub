export const HTML_INS_TAG_CONTENT = {
  title: 'HTML ins Tag',
  lastUpdated: '3 Apr, 2026',
  intro:
    'The <ins> tag in HTML is used to define inserted text in a document. It highlights text that has been added, usually displayed as underlined by default.',
  highlights: [
    'The underlining style can be modified with CSS using the text-decoration property.',
    'The tag requires both a start (<ins>) and end (</ins>) tag to enclose inserted text.',
  ],
  syntax: '<ins> Contents... </ins>',
  attributesHeading: 'Attributes',
  attributesIntro:
    'The <ins> tag supports `cite` (source/reason for insertion) and `datetime` (when text was inserted).',
  attributes: [
    {
      name: 'cite',
      description:
        'Specifies the URL of the document or message that explains the reason for insertion.',
    },
    {
      name: 'datetime',
      description:
        'Specifies inserted date and time in the format YYYY-MM-DDThh:mm:ssTZD.',
    },
  ],
  workingHeading: 'Working with HTML insert Tag',
  examples: [
    {
      title: 'Example 1: Basic use of <ins> with <del>',
      code: `<!DOCTYPE html>\n<html>\n<body>\n    <h1>GeeksforGeeks</h1>\n    <h2>HTML ins Tag</h2>\n    <p>\n        GeeksforGeeks is a <del>mathematical</del>\n        <ins>computer</ins> science portal\n    </p>\n</body>\n</html>`,
      note: 'Inserted text appears underlined by default in most browsers.',
    },
    {
      title: 'Example 2: Using datetime attribute and CSS styling',
      code: `<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        del {\n            color: red;\n        }\n        ins {\n            color: green;\n        }\n    </style>\n</head>\n<body>\n    <h1>GeeksforGeeks</h1>\n    <h2>HTML ins Tag</h2>\n    <p>\n        GeeksforGeeks is a <del>mathematical</del>\n        <ins datetime="2018-11-21T15:55:03Z">\n            computer\n        </ins> science portal\n    </p>\n</body>\n</html>`,
      note: 'The datetime attribute records when insertion occurred while CSS customizes appearance.',
    },
  ],
  quiz: {
    question: 'Which attribute is used to record insertion time in <ins>?',
    options: ['A. time', 'B. created', 'C. datetime', 'D. stamp'],
    answer: 'C. datetime',
  },
  author: {
    name: 'Shubrodeep Banerjee',
    initial: 'S',
    url: 'https://www.geeksforgeeks.org/html/html-ins-tag/',
  },
  reactions: 4,
  articleTags: ['Web Technologies', 'HTML', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-ins-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-ins-tag/',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/20210205115055/ins1.PNG',
    'https://media.geeksforgeeks.org/wp-content/uploads/20210205115426/ins2.PNG',
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
