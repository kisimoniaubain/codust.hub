export const HTML_CAPTION_TAG_CONTENT = {
  title: 'HTML <caption> Tag (Set Captions)',
  lastUpdated: '26 Jun, 2026',
  intro:
    'The <caption> tag defines a table title. It gives a short description for the table and helps users understand what the table data represents.',
  highlights: [
    'Used to add a visible title for a table.',
    'Should be the first child element inside <table>.',
    'Improves readability and accessibility of tabular data.',
  ],
  syntax: '<table>\n  <caption>Table Title</caption>\n  ...\n</table>',
  note: 'Use one caption per table to keep table descriptions clear and meaningful.',
  basicExampleCode: `<!DOCTYPE html>\n<html>\n<body>\n    <table border="1">\n        <caption>Student Marks</caption>\n        <tr>\n            <th>Name</th>\n            <th>Marks</th>\n        </tr>\n        <tr>\n            <td>Alice</td>\n            <td>92</td>\n        </tr>\n        <tr>\n            <td>Bob</td>\n            <td>86</td>\n        </tr>\n    </table>\n</body>\n</html>`,
  basicExampleNotes: [
    'The caption appears above the table by default.',
    '<caption> helps identify what the table is about before reading rows and columns.',
  ],
  styledExampleCode: `<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        table {\n            border-collapse: collapse;\n            width: 420px;\n        }\n        caption {\n            caption-side: top;\n            font-weight: 700;\n            font-size: 18px;\n            margin-bottom: 8px;\n            color: #1f2937;\n        }\n        th, td {\n            border: 1px solid #cfd4dc;\n            padding: 8px 10px;\n            text-align: left;\n        }\n        th {\n            background: #f3f5f8;\n        }\n    </style>\n</head>\n<body>\n    <table>\n        <caption>Monthly Expenses</caption>\n        <tr><th>Category</th><th>Amount</th></tr>\n        <tr><td>Food</td><td>$240</td></tr>\n        <tr><td>Transport</td><td>$80</td></tr>\n    </table>\n</body>\n</html>`,
  styledExampleNotes: [
    'caption-side controls where the caption appears (top or bottom).',
    'You can style captions with CSS like color, font-weight, and spacing.',
  ],
  bestPractices: [
    'Keep captions short and descriptive.',
    'Use captions to explain the purpose of the table, not to repeat column headers.',
    'Use CSS for visual styling instead of deprecated presentational attributes.',
  ],
  quiz: {
    question: 'Where should the <caption> tag be placed in an HTML table?',
    options: [
      'A. Anywhere inside <table>',
      'B. Outside the <table> element',
      'C. As the first child inside <table>',
      'D. Only inside <thead>',
    ],
    answer: 'C. As the first child inside <table>',
  },
  author: {
    name: 'Vijay Sirra',
    initial: 'V',
    url: 'https://www.geeksforgeeks.org/html/html-caption-tag/',
  },
  reactions: 3,
  articleTags: ['Web Technologies', 'HTML', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-caption-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-caption-tag/',
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
