export const HTML_COMMENTS_CONTENT = {
  title: 'HTML Comments',
  lastUpdated: '28 Apr, 2026',
  intro:
    'HTML comments are used to add notes or explanations in HTML code that are not displayed by the browser. They help document code and make projects easier to understand and maintain.',
  bullets: [
    'Use comments for reminders, warnings, and explanations for developers.',
    'Comments are ignored by the browser and do not appear on the webpage.',
    'Comments can be short inline notes or larger multi-line sections.',
  ],
  syntax: '<!-- your comment here -->',
  basicExample: `<!-- This is a comment and will not be displayed on the webpage -->\n<p>This is visible text.</p>`,
  syntaxNote:
    'Text inside <!-- and --> tags does not appear on the webpage output.',
  singleLineTitle: 'Single-Line and Inline Comments',
  singleLineIntro:
    'Single-line and inline comments add short notes inside code without changing the rendered content.',
  singleLineCode: `<html>\n<body>\n  <!--This is heading Tag-->\n  <h1>GeeksforGeeks</h1>\n\n  <!--This is single line comment-->\n  <h2>This is <!--given for--> single line comment</h2>\n</body>\n</html>`,
  singleLineExplanation:
    'The comments are visible only in source code for developers. The h1 and h2 headings render normally in the browser.',
  multiLineTitle: 'Multi-Line Comments and Hidden Code Sections',
  multiLineIntro:
    'Multi-line comments are useful for larger explanations and for temporarily hiding code without deleting it.',
  multiLineCode: `<html>\n<body>\n  <!-- This is\n       multi-line\n       comment -->\n  <h2>This is multi-line comment</h2>\n\n  <!-- <button style="font-family: Sans-serif;">\n         Click Me\n       </button> -->\n</body>\n</html>`,
  multiLineExplanation:
    'Commented-out elements are not rendered by the browser. Developers can keep notes and disabled markup safely in the file.',
  shortcutNote:
    'Shortcut: Ctrl + / on Windows and Command + / on macOS.',
  quiz: {
    total: '6 Questions',
    question: 'Which comment syntax is ignored by the browser in HTML?',
    options: [
      'A) <!— This is a comment —>',
      'B) <!-- This is a comment -->',
      'C) // This is a comment',
      'D) /* This is a comment */',
    ],
    answer: 'B) <!-- This is a comment -->',
  },
  articleTags: ['Web Technologies', 'HTML', 'HTML-Tags', 'HTML-Basics'],
  author: {
    name: 'Kanchan_Ray167',
    initial: 'K',
    url: 'https://www.geeksforgeeks.org/html/html-comments/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/html-comments/',
  images: [],
  explore: [
    {
      heading: 'Explore',
      groups: [
        {
          heading: 'HTML Basics',
          items: [
            { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
            { label: 'HTML Introduction', url: 'https://www.geeksforgeeks.org/html/html-introduction/' },
            { label: 'HTML Features, Application and History', url: 'https://www.geeksforgeeks.org/html/what-is-html/' },
            { label: 'HTML Editors', url: 'https://www.geeksforgeeks.org/html/html-editors/' },
            { label: 'HTML Comments', url: 'https://www.geeksforgeeks.org/html/html-comments/' },
          ],
        },
        {
          heading: 'Structure and Elements',
          items: [
            { label: 'HTML Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
            { label: 'HTML Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
            { label: 'Semantic Tags', url: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/' },
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
          heading: 'Visuals and Media',
          items: [
            { label: 'HTML Images', url: 'https://www.geeksforgeeks.org/html/html-images/' },
            { label: 'HTML Audio', url: 'https://www.geeksforgeeks.org/html/html-audio/' },
            { label: 'HTML Videos', url: 'https://www.geeksforgeeks.org/html/html-videos/' },
          ],
        },
        {
          heading: 'Layouts and Designs',
          items: [
            { label: 'HTML Layout', url: 'https://www.geeksforgeeks.org/html/html-layout/' },
            { label: 'Responsive Design', url: 'https://www.geeksforgeeks.org/responsive-web-design/' },
            { label: 'Meta Tags and SEO', url: 'https://www.geeksforgeeks.org/html/meta-tags-in-html/' },
          ],
        },
        {
          heading: 'Projects and Advanced Topics',
          items: [
            { label: 'HTML Projects', url: 'https://www.geeksforgeeks.org/html/html-projects/' },
            { label: 'HTML5 APIs', url: 'https://www.geeksforgeeks.org/html/html5-apis/' },
            { label: 'HTML Interview Questions', url: 'https://www.geeksforgeeks.org/html/html-interview-questions-answers-set-1/' },
          ],
        },
        {
          heading: 'Tutorial References',
          items: [
            { label: 'HTML Cheat Sheet', url: 'https://www.geeksforgeeks.org/html/html-cheat-sheet-a-basic-guide-to-html/' },
            { label: 'HTTP Protocol', url: 'https://www.geeksforgeeks.org/html/what-is-http/' },
            { label: 'Global Attributes', url: 'https://www.geeksforgeeks.org/html/html-global-attributes/' },
          ],
        },
      ],
    },
    {
      heading: 'HTML Courses',
      items: [
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
        { label: 'HTML Comments', url: 'https://www.geeksforgeeks.org/html/html-comments/' },
      ],
    },
  ],
};
