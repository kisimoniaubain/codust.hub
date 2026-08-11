export const HTML_STRUCTURE_CONTENT = {
  title: 'Structure of an HTML Document',
  lastUpdated: '6 May, 2026',
  intro:
    'HTML is a markup language used to structure and organize content on a webpage, enabling browsers to interpret and display it correctly.',
  bullets: [
    'Uses elements (tags) enclosed in angle brackets < >.',
    'Tags usually come in pairs (opening and closing tags).',
    'Defines structure for text, images, links, videos, and more.',
    'Helps browsers render content in a readable format.',
  ],
  basicStructureIntro:
    'An HTML document is a series of nested elements that form a complete webpage and follow a standard structure for browser compatibility.',
  structureParts: [
    {
      title: '<!DOCTYPE html>',
      text: 'Specifies the HTML version. Here, it indicates HTML5 (latest version).',
    },
    {
      title: '<html>',
      text: 'The root element. Everything inside belongs to the HTML document.',
    },
    {
      title: '<head>',
      text: 'Contains metadata that is not shown directly on the webpage, including charset, viewport settings, and page title.',
      points: [
        '<meta charset="UTF-8">: Sets character encoding to UTF-8.',
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">: Controls responsive mobile viewport behavior.',
      ],
    },
    {
      title: '<body>',
      text: 'Contains the visible webpage content such as text, images, links, lists, and headings.',
    },
  ],
  exampleCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Structure of HTML Document</title>\n</head>\n<body>\n  <!-- Main content of website -->\n  <h1>GeeksforGeeks</h1>\n  <p>A computer science portal for geeks</p>\n</body>\n</html>`,
  tagsElementsIntro:
    'HTML tags are structural components enclosed in angle brackets. Some tags are paired, while others are self-closing and may include attributes.',
  tagTypes: [
    'Paired Tags: Have opening and closing tags (<tag></tag>).',
    'Empty Tags: Self-closing and do not require a separate closing tag.',
  ],
  commonElements: [
    'Headings (<h1>-<h6>): Define heading hierarchy, with <h1> as highest level.',
    'Paragraphs (<p>): Group text into readable blocks with spacing.',
    'Images (<img>): Add images using src and alt attributes.',
    'Links (<a>): Create hyperlinks using href and link text.',
    'Lists (<ul>, <ol>, <li>): Organize items in bullet or numbered format.',
    'Div (<div>): Container used for grouping elements for layout/styling.',
  ],
  bestPractices: [
    'Use semantic HTML tags like <header>, <footer>, <article>, and <section> for better structure and accessibility.',
    'Include alt text for images using the alt attribute.',
    'Minimize inline styles and scripts; keep styling in CSS and behavior in JavaScript files.',
  ],
  alsoCheck: [
    { label: 'HTML Tags - A to Z List', url: 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/' },
    { label: 'HTML Course Structure of an HTML Document', url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/' },
  ],
  quiz: {
    total: '5 Questions',
    question: 'Which declaration specifies that an HTML document uses the latest HTML5 version?',
    options: [
      'A) <html lang="en">',
      'B) <head>',
      'C) <!DOCTYPE html>',
      'D) <meta charset="UTF-8">',
    ],
    answer: 'C) <!DOCTYPE html>',
  },
  articleTags: ['Web Technologies', 'HTML', 'HTML-Basics', 'HTML Course Basic'],
  author: {
    name: 'Hharsh.agarwal0100',
    initial: 'H',
    url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/20251108104320141647/html_page_structure.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20210401153033/htmltag.PNG',
    'https://media.geeksforgeeks.org/wp-content/uploads/20251106164132053975/_p_class_text_hello_world_p_.webp',
  ],
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
            { label: 'Structure', url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/' },
            { label: 'HTML Editors', url: 'https://www.geeksforgeeks.org/html/html-editors/' },
            { label: 'HTML Comments', url: 'https://www.geeksforgeeks.org/html/html-comments/' },
          ],
        },
        {
          heading: 'Structure & Elements',
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
          heading: 'Visuals & Media',
          items: [
            { label: 'HTML Images', url: 'https://www.geeksforgeeks.org/html/html-images/' },
            { label: 'HTML Audio', url: 'https://www.geeksforgeeks.org/html/html-audio/' },
            { label: 'HTML Videos', url: 'https://www.geeksforgeeks.org/html/html-videos/' },
          ],
        },
        {
          heading: 'Layouts & Designs',
          items: [
            { label: 'HTML Layout', url: 'https://www.geeksforgeeks.org/html/html-layout/' },
            { label: 'Responsive Design', url: 'https://www.geeksforgeeks.org/responsive-web-design/' },
            { label: 'Meta Tags and SEO', url: 'https://www.geeksforgeeks.org/html/meta-tags-in-html/' },
          ],
        },
        {
          heading: 'Projects & Advanced Topics',
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
        { label: 'Structure of an HTML Document', url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/' },
      ],
    },
  ],
};
