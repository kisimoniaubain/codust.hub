export const HTML_TUTORIAL_CONTENT = {
  title: 'HTML Tutorial',
  lastUpdated: '1 May, 2026',
  intro:
    'HTML (HyperText Markup Language) is the core language used to structure and display content on the web, defining elements like text, images, links, and page layout so browsers can render websites properly.',
  bullets: [
    'Provides the basic structure for all web pages using opening and closing tags like <p>, <h1>, and <div>.',
    'Supports text, images, links, lists, tables, forms, and multimedia elements such as audio and video.',
    'Works with [CSS](https://www.geeksforgeeks.org/css/css-tutorial/) for styling and [JavaScript](https://www.geeksforgeeks.org/javascript/javascript-tutorial/) for interactivity.',
    'Uses attributes like src, href, and alt to add extra information and control element behavior.',
    'HTML documents are transferred over the Internet using [HTTP Protocol](https://www.geeksforgeeks.org/html/what-is-http/).',
  ],
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/20260406111447519505/intro.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260406111425773418/html_basics.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260406111504772587/characteristics.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260406111513016201/syntax.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260406111522962604/boilerPlateCode.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20260406111534700989/difference.webp',
  ],
  sections: [
    {
      heading: 'Basics',
      description: 'These topics help you get started with HTML and understand the environment and purpose.',
      links: [
        { label: 'Introduction', url: 'https://www.geeksforgeeks.org/html/html-introduction/' },
        { label: 'Features', url: 'https://www.geeksforgeeks.org/html/what-is-html/' },
        { label: 'Editors', url: 'https://www.geeksforgeeks.org/html/html-editors/' },
        { label: 'Comments', url: 'https://www.geeksforgeeks.org/html/html-comments/' },
      ],
    },
    {
      heading: 'HTML Fundamental Concepts',
      description: 'These are the fundamental building blocks used to actually create web pages.',
      links: [
        { label: 'Structure', url: 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document/' },
        { label: 'Element', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
        { label: 'Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
        { label: 'Semantics', url: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/' },
        { label: 'Entities', url: 'https://www.geeksforgeeks.org/html/html-entities/' },
        { label: 'Symbols', url: 'https://www.geeksforgeeks.org/html/html-symbols/' },
      ],
    },
    {
      heading: 'Beginner Projects',
      description: 'Start simple and learn by doing beginner HTML projects that teach you how to make basic web pages.',
      links: [
        { label: 'Simple Portfolio Website', url: 'https://www.geeksforgeeks.org/html/how-to-create-a-portfolio-website-using-html/' },
        { label: 'Design an Event Web Page', url: 'https://www.geeksforgeeks.org/html/design-an-event-web-page-using-html-css/' },
        { label: 'Projects For Beginners', url: 'https://www.geeksforgeeks.org/html/html-projects/' },
        { label: 'Beginner HTML Project Ideas', url: 'https://www.geeksforgeeks.org/html-projects/' },
      ],
    },
    {
      heading: 'Tags',
      description: 'Tags are the building blocks of web pages and help create well-structured webpages.',
      links: [
        { label: 'Commonly used HTML tags', url: 'https://www.geeksforgeeks.org/html/basic-html-tags/' },
        { label: 'HTML Tags – A to Z List', url: 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/' },
      ],
    },
    {
      heading: 'Tables',
      description: 'Tables organize information into rows and columns for easy understanding.',
      links: [
        { label: 'Table', url: 'https://www.geeksforgeeks.org/html/html-tables/' },
        { label: 'Row', url: 'https://www.geeksforgeeks.org/html/html-tr-tag/' },
        { label: 'Header', url: 'https://www.geeksforgeeks.org/html/html-th-tag/' },
        { label: 'Cell', url: 'https://www.geeksforgeeks.org/html/html-td-tag/' },
        { label: 'Set captions', url: 'https://www.geeksforgeeks.org/html/html-caption-tag/' },
        { label: 'Group Columns', url: 'https://www.geeksforgeeks.org/html/html-colgroup-tag/' },
      ],
    },
    {
      heading: 'Lists',
      description: 'Lists organize information clearly for better readability.',
      links: [
        { label: 'Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
        { label: 'Ordered', url: 'https://www.geeksforgeeks.org/html/html-ol-tag/' },
        { label: 'Unordered', url: 'https://www.geeksforgeeks.org/html/html-ul-tag/' },
        { label: 'Description Lists', url: 'https://www.geeksforgeeks.org/html/html-description-list/' },
      ],
    },
    {
      heading: 'Formatting',
      description: 'Formatting tags improve readability and visual appeal by emphasizing important content.',
      links: [
        { label: 'Make Text Italic', url: 'https://www.geeksforgeeks.org/html/html-i-tag/' },
        { label: 'Create Small text', url: 'https://www.geeksforgeeks.org/html/html-small-tag/' },
        { label: 'Insert Text', url: 'https://www.geeksforgeeks.org/html/html-ins-tag/' },
        { label: 'Add a Subscript', url: 'https://www.geeksforgeeks.org/html/html-sub-tag/' },
        { label: 'Strong Tag', url: 'https://www.geeksforgeeks.org/html/html-strong-tag/' },
        { label: 'Bold Text', url: 'https://www.geeksforgeeks.org/html/html-b-tag/' },
        { label: 'Highlight Text', url: 'https://www.geeksforgeeks.org/html/html-mark-tag/' },
        { label: 'Show a Deleted Text', url: 'https://www.geeksforgeeks.org/html/html-del-tag/' },
        { label: 'Emphasize Text', url: 'https://www.geeksforgeeks.org/html/html-em-tag/' },
        { label: 'Add a Superscript', url: 'https://www.geeksforgeeks.org/html/html-sup-tag/' },
        { label: 'Formatting Quiz', url: 'https://www.geeksforgeeks.org/quizzes/html-quiz/' },
      ],
    },
    {
      heading: 'Form',
      description: 'Forms let users interact with your website by submitting data.',
      links: [
        { label: 'Form', url: 'https://www.geeksforgeeks.org/html/html-form-tag/' },
        { label: 'Add an Input Field', url: 'https://www.geeksforgeeks.org/html/html-input-tag/' },
        { label: 'Label tag', url: 'https://www.geeksforgeeks.org/html/html-label-tag/' },
        { label: 'Add a Button', url: 'https://www.geeksforgeeks.org/html/html-button-tag/' },
        { label: 'Add a Dropdown', url: 'https://www.geeksforgeeks.org/html/html-select-tag/' },
        { label: 'Add a Textarea', url: 'https://www.geeksforgeeks.org/html/html-textarea-tag/' },
        { label: 'Fieldset Tag', url: 'https://www.geeksforgeeks.org/html/html-fieldset-tag/' },
        { label: 'Legend Tag', url: 'https://www.geeksforgeeks.org/html/html-legend-tag/' },
        { label: 'Datalist Tag', url: 'https://www.geeksforgeeks.org/html/html-datalist-tag/' },
        { label: 'HTML Form Design', url: 'https://www.geeksforgeeks.org/html/html-form-design/' },
        { label: 'Form Quiz', url: 'https://www.geeksforgeeks.org/quizzes/html-quiz/' },
      ],
    },
    {
      heading: 'Advanced Concepts',
      description: 'After fundamentals, explore advanced HTML concepts for interactive and meaningful web pages.',
      links: [
        { label: 'iframe', url: 'https://www.geeksforgeeks.org/html/html-iframes/' },
        { label: 'File Paths', url: 'https://www.geeksforgeeks.org/html/html-file-paths/' },
        { label: 'Favicon', url: 'https://www.geeksforgeeks.org/html/html-favicon/' },
        { label: 'Computer Code Elements', url: 'https://www.geeksforgeeks.org/html/html-computercode-elements/' },
        { label: 'Add Emojis', url: 'https://www.geeksforgeeks.org/html/html-emojis/' },
        { label: 'Charsets', url: 'https://www.geeksforgeeks.org/html/html-charset/' },
        { label: 'URL Encoding', url: 'https://www.geeksforgeeks.org/html/html-url-encode/' },
        { label: 'Responsive Web Design', url: 'https://www.geeksforgeeks.org/responsive-web-design/' },
        { label: 'HTML Layout', url: 'https://www.geeksforgeeks.org/html/html-layout/' },
        { label: 'Media Elements', url: 'https://www.geeksforgeeks.org/html/html-media/' },
        { label: 'Add Audio to a Webpage', url: 'https://www.geeksforgeeks.org/html/html-audio/' },
        { label: 'Add video to a Webpage', url: 'https://www.geeksforgeeks.org/html/html-videos/' },
      ],
    },
  ],
  references: [
    { label: 'Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
    { label: 'Global Attributes', url: 'https://www.geeksforgeeks.org/html/html-global-attributes/' },
    { label: 'Event Attributes', url: 'https://www.geeksforgeeks.org/html/html-event-attributes/' },
    { label: 'DOM', url: 'https://www.geeksforgeeks.org/html/html-dom/' },
    { label: 'DOM Audio/Videos', url: 'https://www.geeksforgeeks.org/html/html-dom-audio-video/' },
    { label: 'HTML5', url: 'https://www.geeksforgeeks.org/html/html5-introduction/' },
  ],
  interestingFacts: [
    { label: 'HTML', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
    { label: 'Links and Navigation', url: 'https://www.geeksforgeeks.org/html/html-links/' },
    { label: 'Tables', url: 'https://www.geeksforgeeks.org/html/html-tables/' },
    { label: 'Lists', url: 'https://www.geeksforgeeks.org/html/html-lists/' },
    { label: 'Meta Tags and SEO', url: 'https://www.geeksforgeeks.org/html/meta-tags-in-html/' },
    { label: 'HTML5 APIs', url: 'https://www.geeksforgeeks.org/html/html5-apis/' },
  ],
  interview: [
    { label: 'HTML Interview Questions', url: 'https://www.geeksforgeeks.org/html/html-interview-questions-answers-set-1/' },
    { label: 'Interview Questions for Beginners', url: 'https://www.geeksforgeeks.org/html/html-interview-questions-answers-set-2/' },
  ],
  projects: [
    { label: 'Design a website', url: 'https://www.geeksforgeeks.org/html/design-a-web-page-using-html/' },
    { label: 'Simple Portfolio Website Design', url: 'https://www.geeksforgeeks.org/html/how-to-create-a-portfolio-website-using-html/' },
    { label: 'Design a Portfolio Gallery', url: 'https://www.geeksforgeeks.org/html/create-portfolio-gallery-using-html-and-css/' },
    { label: 'Design a Login Form to an Image using HTML', url: 'https://www.geeksforgeeks.org/html/how-to-create-a-login-form-using-html-and-css/' },
  ],
  roadmap: [
    'Week 1 - HTML Basics: Learn document structure, elements, attributes, comments, and core tags like headings, paragraphs, links, and images, along with [Best HTML Coding Practices](https://www.geeksforgeeks.org/html/best-html-coding-practices-you-must-know/).',
    'Week 2 - Practice & Tools: Explore HTML editors and tools, then build beginner projects such as a simple portfolio or event webpage.',
    'Week 3 - Data & Forms: Work with tables, lists, and forms to organize data and create inputs, text areas, and buttons for user interaction.',
    'Week 4 - Advanced HTML5: Understand HTML5 features, basic responsive design concepts, and complete a final project combining all topics.',
  ],
  importance: [
    'Foundation of Web Development: HTML is the core building block of websites and is essential for anyone starting in web development or web design.',
    'Universal Web Language: It is the standard markup language used to structure web pages and manage content across the internet.',
    'Easy to Learn: HTML is simple and beginner-friendly, allowing quick creation of basic web pages without programming complexity.',
    'Career Opportunities: Knowledge of HTML supports roles like web developer, content manager, and UI/UX designer.',
    'Gateway to Advanced Skills: Mastering HTML makes it easier to learn CSS, JavaScript, and modern web technologies for interactive and visually rich websites.',
  ],
  video: {
    src: 'https://www.youtube.com/embed/0aHZXNc-gyQ',
    title: 'HTML Tutorial For Beginners | Complete Roadmap | Basics to Advance, Projects, and More',
    courseUrl: 'https://www.geeksforgeeks.org/html/html-tutorial/',
    courseTitle: 'HTML Tutorial For Beginners | Complete Roadmap | Basics to Advance, Projects, and More',
    author: {
      name: 'kartik306',
      url: 'https://www.geeksforgeeks.org/user/kartik/',
      initial: 'K',
    },
    tags: ['HTML', 'Tutorials', 'Web-Tech Tutorials'],
  },
  explore: [
    {
      heading: 'Explore',
      groups: [
        {
          heading: 'HTML Basics',
          items: [
            { label: 'Introduction', url: 'https://www.geeksforgeeks.org/html/html-introduction/' },
            { label: 'Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
            { label: 'Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
          ],
        },
        {
          heading: 'Structure & Elements',
          items: [
            { label: 'Tags A to Z', url: 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list/' },
            { label: 'Semantics', url: 'https://www.geeksforgeeks.org/html/html5-semantic-tags/' },
            { label: 'Forms', url: 'https://www.geeksforgeeks.org/html/html-forms/' },
          ],
        },
        {
          heading: 'Lists',
          items: [
            { label: 'Ordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ol-tag/' },
            { label: 'Unordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ul-tag/' },
            { label: 'Description Lists', url: 'https://www.geeksforgeeks.org/html/html-description-list/' },
          ],
        },
        {
          heading: 'Visuals & Media',
          items: [
            { label: 'Images', url: 'https://www.geeksforgeeks.org/html/html-images/' },
            { label: 'Audio', url: 'https://www.geeksforgeeks.org/html/html-audio/' },
            { label: 'Video', url: 'https://www.geeksforgeeks.org/html/html-videos/' },
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
            { label: 'Beginner Projects', url: 'https://www.geeksforgeeks.org/html/html-projects/' },
            { label: 'Advanced Concepts', url: 'https://www.geeksforgeeks.org/html/html5-introduction/' },
            { label: 'Interview Questions', url: 'https://www.geeksforgeeks.org/html/html-interview-questions-answers-set-1/' },
          ],
        },
        {
          heading: 'Tutorial References',
          items: [
            { label: 'HTML Cheat Sheet', url: 'https://www.geeksforgeeks.org/html/html-cheat-sheet-a-basic-guide-to-html/' },
            { label: 'HTML5 APIs', url: 'https://www.geeksforgeeks.org/html/html5-apis/' },
            { label: 'Global Attributes', url: 'https://www.geeksforgeeks.org/html/html-global-attributes/' },
          ],
        },
      ],
    },
    {
      heading: 'HTML Courses',
      items: [
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
        { label: 'Web Development Course', url: 'https://www.geeksforgeeks.org/courses/category/development-testing' },
      ],
    },
  ],
};
