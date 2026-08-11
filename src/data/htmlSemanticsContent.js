export const HTML_SEMANTICS_CONTENT = {
  title: 'HTML5 Semantics',
  lastUpdated: '2 May, 2026',
  intro:
    'HTML5 semantic elements provide meaningful tags that describe purpose clearly, improving readability, accessibility, and SEO for both humans and browsers.',
  bullets: [
    'Clearly define the role and content of elements.',
    'Improve code readability and structure.',
    'Enhance accessibility for screen readers.',
    'Help browsers and search engines understand page content.',
    'Examples include <form>, <table>, <article>, <header>, and <footer>.',
  ],
  structureTitle: 'Semantic Elements',
  structureIntro:
    'Here are some fundamental HTML5 semantic elements commonly used to structure web content.',
  pageStructureLabel: 'HTML 5 Semantic Based Page Structure',
  elements: [
    {
      title: '1. The <article> Tag',
      description:
        'The <article> tag is used for standalone, reusable content like blog posts or news articles.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <article>\n    <h1>GeeksforGeeks</h1>\n    <p>A Computer Science portal for geeks.</p>\n  </article>\n</body>\n</html>`,
    },
    {
      title: '2. The <aside> Tag',
      description:
        'The <aside> tag places related sidebar content that sits aside the main content.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <main>\n    <h2>Main Article</h2>\n    <p>Main content goes here.</p>\n  </main>\n  <aside>\n    <h3>Related Links</h3>\n    <p>Sidebar content related to the article.</p>\n  </aside>\n</body>\n</html>`,
    },
    {
      title: '3. The <details> and <summary> Tag',
      description:
        'The <details> element contains extra information that users can toggle, while <summary> is the visible heading.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <details>\n    <summary>Click to view details</summary>\n    <p>Hidden details are shown after expanding.</p>\n  </details>\n</body>\n</html>`,
    },
    {
      title: '4. The <figure> and <figcaption> Tag',
      description:
        'The <figure> and <figcaption> tags display an illustration or image with a descriptive caption.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <figure>\n    <img src="https://media.geeksforgeeks.org/wp-content/uploads/5-56.png" alt="Semantic example">\n    <figcaption>Semantic layout example.</figcaption>\n  </figure>\n</body>\n</html>`,
    },
    {
      title: '5. The <header> Tag',
      description:
        'The <header> element defines introductory content for a page or section. A page can have multiple headers.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <header>\n    <h1>GeeksforGeeks</h1>\n    <p>Welcome to the semantic tags tutorial.</p>\n  </header>\n</body>\n</html>`,
    },
    {
      title: '6. The <footer> Tag',
      description:
        'The <footer> element usually contains copyright, author, or contact details. Multiple footers are allowed.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <footer>\n    <p>Copyright 2026 GeeksforGeeks</p>\n  </footer>\n</body>\n</html>`,
    },
    {
      title: '7. The <main> Tag',
      description:
        'The <main> element defines the unique primary content of the document.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <main>\n    <h1>Main Content</h1>\n    <p>This section holds unique page content.</p>\n  </main>\n</body>\n</html>`,
    },
    {
      title: '8. The <section> Tag',
      description:
        'The <section> tag groups related content into thematic sections like intro, details, and contact.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <section>\n    <h2>Introduction</h2>\n    <p>Section content goes here.</p>\n  </section>\n</body>\n</html>`,
    },
    {
      title: '9. The <nav> Tag',
      description:
        'The <nav> tag defines navigation links, usually for menus and primary site navigation.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <nav>\n    <a href="/home/">Home</a>\n    <a href="/about/">About</a>\n  </nav>\n</body>\n</html>`,
    },
    {
      title: '10. The <mark> Tag',
      description: 'The <mark> tag highlights text in context.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <p>GeeksforGeeks is a <mark>Computer Science</mark> portal.</p>\n</body>\n</html>`,
    },
  ],
  bestPractices: [
    'Do not overuse <div>: use semantic elements when appropriate for clearer meaning.',
    'Structure content logically according to meaning and importance.',
    'Validate HTML with tools like the W3C HTML Validator.',
  ],
  quiz: {
    total: '5 Questions',
    question: 'What is the primary purpose of HTML5 semantic elements?',
    options: [
      'A) To improve page speed by reducing code size',
      'B) To describe content meaning in a human- and machine-readable way',
      'C) To force browsers to apply default CSS styles',
      'D) To limit the use of multimedia content on pages',
    ],
    answer: 'B) To describe content meaning in a human- and machine-readable way',
  },
  articleTags: ['Web Technologies', 'HTML'],
  author: {
    name: 'Dhruvjain35',
    initial: 'D',
    url: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/5-56.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20241127115416984900/html-sementics-layout.png',
  ],
  explore: [
    {
      heading: 'Explore',
      groups: [
        {
          heading: 'HTML Basics',
          items: [
            { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
            { label: 'Semantic Tags', url: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/' },
            { label: 'HTML Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
            { label: 'HTML Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
          ],
        },
        {
          heading: 'Structure & Elements',
          items: [
            { label: 'Structure', url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/' },
            { label: 'HTML Block and Inline Elements', url: 'https://www.geeksforgeeks.org/html/html-block-and-inline-elements/' },
            { label: 'HTML Comments', url: 'https://www.geeksforgeeks.org/html/html-comments/' },
          ],
        },
      ],
    },
    {
      heading: 'HTML Courses',
      items: [
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
        { label: 'HTML5 Semantic Tags', url: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/' },
      ],
    },
  ],
};
