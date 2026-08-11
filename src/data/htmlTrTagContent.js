export const HTML_TR_TAG_CONTENT = {
  title: 'HTML <tr> Tag (Row)',
  lastUpdated: '25 Jun, 2026',
  intro:
    'The <tr> tag defines a table row in HTML. It groups header cells (<th>) or data cells (<td>) together so table content is organized in horizontal rows.',
  primaryCode: `<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        table, th, td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n    </style>\n</head>\n<body>\n    <table>\n        <tr>\n            <th>Name</th>\n            <th>User Id</th>\n        </tr>\n        <tr>\n            <td>Shashank</td>\n            <td>@shashankla</td>\n        </tr>\n        <tr>\n            <td>GeeksforGeeks</td>\n            <td>@geeks</td>\n        </tr>\n    </table>\n</body>\n</html>`,
  primaryNotes: [
    'The <tr> tag is used to define each row in the table structure.',
    'This example creates one header row and two data rows.',
  ],
  syntax: '<tr> ... </tr>',
  note: 'The <tr> tag also supports global attributes and event attributes in HTML.',
  attributesTitle: 'Attributes',
  attributesDescription:
    'These attributes were historically used to control alignment and formatting inside table rows.',
  attributes: [
    { name: 'align', description: 'Aligns row content horizontally.' },
    { name: 'bgcolor', description: 'Sets the row background color.' },
    { name: 'char', description: 'Aligns content to a specific character.' },
    { name: 'charoff', description: 'Sets character offset for char-based alignment.' },
    { name: 'valign', description: 'Aligns row content vertically.' },
  ],
  deprecatedNote: 'These attributes are deprecated in HTML5. Use CSS for styling and alignment instead.',
  exampleTitle: 'Example: Implementation of <tr> tag in HTML',
  exampleCode: `<!DOCTYPE html>\n<html>\n<body>\n<table border="1">\n    <tr>\n        <th>Fruit</th>\n        <th>Color</th>\n    </tr>\n    <tr>\n        <td>Apple</td>\n        <td>Red</td>\n    </tr>\n    <tr>\n        <td>Banana</td>\n        <td>Yellow</td>\n    </tr>\n</table>\n</body>\n</html>`,
  exampleNotes: [
    'The first <tr> defines the header row with Fruit and Color columns.',
    'The next two <tr> tags define data rows: Apple-Red and Banana-Yellow.',
    'Each <tr> groups related cells together to form one complete table row.',
  ],
  quiz: {
    question: 'What is the primary purpose of the <tr> tag in HTML?',
    options: [
      'A. To define a single table cell',
      'B. To define a table row',
      'C. To create a table header only',
      'D. To add a caption to a table',
    ],
    answer: 'B. To define a table row',
  },
  author: {
    name: 'Vijay Sirra',
    initial: 'V',
    url: 'https://www.geeksforgeeks.org/html/html-tr-tag/',
  },
  reactions: 4,
  articleTags: ['Web Technologies', 'HTML', 'HTML-Tags'],
  courseUrl: 'https://www.geeksforgeeks.org/html/html-tr-tag/',
  referenceUrl: 'https://www.geeksforgeeks.org/html/html-tr-tag/',
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
