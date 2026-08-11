export const HTML_GROUP_COLUMNS_CONTENT = {
  title: 'HTML Group Columns (<colgroup> and <col>)',
  lastUpdated: '26 Jun, 2026',
  intro:
    'The <colgroup> and <col> tags are used to group and style table columns. They help apply the same formatting to one or more columns without repeating styles on each <td> cell.',
  highlights: [
    'Use <colgroup> to define one or more column groups in a table.',
    'Use <col> inside <colgroup> to target specific columns.',
    'Useful for setting shared column styles like width and background color.',
  ],
  syntax: '<table>\n  <colgroup>\n    <col span="2" style="background-color: #f3f5f8;">\n  </colgroup>\n  ...\n</table>',
  note: 'The <colgroup> element must appear after optional <caption> and before table sections like <thead>, <tbody>, and <tr>.',
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n<table border="1">\n  <colgroup>\n    <col style="background-color: #f2f2f2;">\n    <col style="background-color: #e8f5ff;">\n  </colgroup>\n  <tr>\n    <th>Name</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>95</td>\n  </tr>\n  <tr>\n    <td>Bob</td>\n    <td>88</td>\n  </tr>\n</table>\n</body>\n</html>`,
  basicExampleNotes: [
    '<colgroup> contains two <col> elements, each styling one column.',
    'The first column gets a light gray background; the second gets light blue.',
  ],
  spanExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n<table border="1">\n  <colgroup>\n    <col span="2" style="background-color: #f9f9f9;">\n    <col style="background-color: #fff6e6;">\n  </colgroup>\n  <tr><th>Product</th><th>Category</th><th>Price</th></tr>\n  <tr><td>Laptop</td><td>Electronics</td><td>$999</td></tr>\n  <tr><td>Chair</td><td>Furniture</td><td>$120</td></tr>\n</table>\n</body>\n</html>`,
  spanExampleNotes: [
    'The first <col> uses span="2" so one style applies to the first two columns.',
    'The third column uses a separate style for visual distinction.',
  ],
  bestPractices: [
    'Use column grouping for layout consistency and easier maintenance.',
    'Prefer CSS classes on <col> when multiple tables share the same column styles.',
    'Use <colgroup>/<col> for visual styling only; table semantics still come from <th>/<td>.',
  ],
  quiz: {
    question: 'Which element is used inside <colgroup> to define individual column formatting?',
    options: ['A. <tr>', 'B. <td>', 'C. <col>', 'D. <thead>'],
    answer: 'C. <col>',
  },
  author: {
    name: 'Vijay Sirra',
    initial: 'V',
    url: 'https://www.geeksforgeeks.org/html/html-colgroup-tag/',
  },
  reactions: 2,
  articleTags: ['Web Technologies', 'HTML', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-colgroup-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-col-tag/',
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
