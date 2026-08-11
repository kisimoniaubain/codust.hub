export const HTML_ATTRIBUTES_CONTENT = {
  title: 'HTML Attributes',
  lastUpdated: '2 May, 2026',
  intro:
    "HTML attributes are special words used inside the opening tag of an element to provide extra information and control behavior, appearance, or functionality.",
  bullets: [
    'Each attribute has a name and a value, written as name="value".',
    'Attributes tell browsers how to render elements or handle interactions.',
  ],
  introCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" style="width:350px; height:auto;">\n</body>\n</html>`,
  introBreakdown: [
    'Tag: <img>',
    'Attribute: src',
    'Value of Attribute: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png"',
    'Purpose: The <img> tag embeds images, and src points to the image location (online or local).',
  ],
  syntax: '<tagname attribute_name="attribute_value"> content... </tagname>',
  components: [
    'attribute_name: the name of the attribute (for example href, src, class, id).',
    'attribute_value: the setting/behavior value assigned to that attribute, usually inside quotes.',
  ],
  globalAttributes: [
    { attribute: 'class', description: 'Groups elements and allows styling.' },
    { attribute: 'style', description: 'Applies inline CSS styles.' },
    { attribute: 'contenteditable', description: 'Defines whether element content can be edited.' },
    { attribute: 'role', description: 'Specifies accessibility role.' },
    { attribute: 'tabindex', description: 'Controls keyboard navigation focus order.' },
    { attribute: 'id', description: 'Assigns a unique identifier for CSS/JavaScript targeting.' },
    { attribute: 'title', description: 'Shows tooltip text on hover.' },
    { attribute: 'lang', description: 'Specifies language for accessibility and translation.' },
  ],
  attributeTypes: [
    'Event Attributes: actions on browser events.',
    'Input Attributes: specific to form input elements.',
    'Image Attributes: specific to <img> elements.',
    'Link Attributes: specific to <a> and <link>.',
    'Table Attributes: used with <table>, <th>, <tr>, <td>.',
    'Style Attributes: direct style definitions on elements.',
    'Media Attributes: used with <audio> and <video>.',
    'Accessibility Attributes: include alt and aria-* attributes.',
    'Meta Attributes: metadata definitions like charset.',
  ],
  commonAttributes: [
    {
      title: '1. HTML alt Attribute',
      description:
        'The alt attribute provides alternative text for images when they cannot be displayed and improves screen reader accessibility.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" style="width:350px; height:auto;" alt="The Logo">\n  <br>\n</body>\n</html>`,
    },
    {
      title: '2. HTML width and height Attribute',
      description: 'The width and height attributes set image dimensions (usually in pixels).',
      code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title></title>\n</head>\n<body>\n  <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" width="300px" height="100px">\n</body>\n</html>`,
    },
    {
      title: '3. HTML id Attribute',
      description: 'The id attribute gives an element a unique identifier for CSS and JavaScript targeting.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    #geeks {\n      color: green;\n    }\n  </style>\n</head>\n<body>\n  <h1 id="geeks">Welcome to GeeksforGeeks</h1>\n</body>\n</html>`,
    },
    {
      title: '4. HTML title Attribute',
      description: 'The title attribute shows explanatory text when the mouse hovers over an element.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <h3 title="Hello GeeksforGeeks">\n    Hover to see the effect\n  </h3>\n</body>\n</html>`,
    },
    {
      title: '5. HTML href Attribute',
      description:
        'The href attribute on <a> defines destination URL. Using target="_blank" opens link in a new tab.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <a href="https://www.geeksforgeeks.org/">\n    Click to open in the same tab\n  </a>\n  <br>\n  <a href="https://www.geeksforgeeks.org/" target="_blank">\n    Click to open in a different tab\n  </a>\n</body>\n</html>`,
    },
    {
      title: '6. HTML style Attribute',
      description: 'The style attribute applies inline CSS such as color, font-size, font-family, and alignment.',
      code: `<!DOCTYPE html>\n<html>\n<head>\n  <title></title>\n</head>\n<body>\n  <h2 style="font-family:Chaparral Pro Light;">Hello GeeksforGeeks.</h2>\n  <h3 style="font-size:20px;">Hello GeeksforGeeks.</h3>\n  <h2 style="color:#8CCEF9;">Hello GeeksforGeeks.</h2>\n  <h2 style="text-align:center;">Hello GeeksforGeeks.</h2>\n</body>\n</html>`,
    },
    {
      title: '7. HTML lang Attribute',
      description:
        'The lang attribute declares language for accessibility tools and search engines.',
      code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title></title>\n  <style>\n    body { text-align: center; }\n    h1 { color: green; }\n    .lang-info { font-style: italic; }\n  </style>\n</head>\n<body>\n  <h1>GeeksforGeeks</h1>\n  <h2>lang attribute</h2>\n  <p lang="en">A computer science portal for geeks</p>\n  <p lang="fr" class="lang-info">A computer science portal for geeks</p>\n  <p lang="es" class="lang-info">A computer science portal for geeks</p>\n</body>\n</html>`,
    },
  ],
  importantPoints: [
    {
      title: '1. Always Use Lowercase Attributes',
      text: 'Lowercase attributes are recommended by W3C for consistency and readability.',
    },
    {
      title: '2. Always Quote Attribute Values',
      text: 'Quotes reduce parsing errors and are required for stricter doctypes like XHTML.',
    },
    {
      title: '3. Declare Quote as an Attribute Value',
      text: 'Use single quotes outside if value contains double quotes (or vice versa) and stay consistent.',
      code: '<input type="text" placeholder=\'Enter your "username" here\'>',
    },
    {
      title: '4. Boolean Attributes Should Be Written Without Values',
      text: 'If present, boolean attributes are true. Example: checked.',
      code: '<input type="checkbox" checked>',
    },
    {
      title: '5. Proper Attribute Order for Readability',
      text: 'A consistent order (id, class, global attrs, specific attrs, events) improves maintainability.',
      code: '<button id="btn1" class="button-class" type="submit" onclick="handleClick()">Submit</button>',
    },
    {
      title: '6. Avoid Deprecated Attributes',
      text: 'Prefer CSS over deprecated attributes like align, bgcolor, border.',
      code: '<p style="text-align: center;">This text is centered.</p>',
    },
  ],
  linkParagraph:
    'Also check: [HTML Attributes](https://www.geeksforgeeks.org/html/html-attributes/) and [HTML Elements](https://www.geeksforgeeks.org/html/html-elements/).',
  quiz: {
    total: '6 Questions',
    question: 'What is the main purpose of an HTML attribute?',
    options: [
      'A) To provide extra details that control element behavior',
      'B) To define the main structure of a webpage',
      'C) To run JavaScript before the page loads',
      'D) To store data permanently inside the browser',
    ],
    answer: 'A) To provide extra details that control element behavior',
  },
  articleTags: ['Web Technologies', 'HTML', 'HTML-Attributes', 'HTML-Basics'],
  author: {
    name: 'Chinmoy Lenka GfG95',
    initial: 'C',
    url: 'https://www.geeksforgeeks.org/html/html-attributes/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/html-attributes/',
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
            { label: 'HTML Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
            { label: 'HTML Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
          ],
        },
        {
          heading: 'Structure & Elements',
          items: [
            { label: 'Structure', url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/' },
            { label: 'HTML Comments', url: 'https://www.geeksforgeeks.org/html/html-comments/' },
            { label: 'HTML Editors', url: 'https://www.geeksforgeeks.org/html/html-editors/' },
          ],
        },
      ],
    },
    {
      heading: 'HTML Courses',
      items: [
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
        { label: 'HTML Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
      ],
    },
  ],
};
