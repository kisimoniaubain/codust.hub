export const HTML_EDITORS_CONTENT = {
  title: 'HTML Editors',
  lastUpdated: '28 Apr, 2026',
  intro:
    'An HTML editor is a software tool used to create and edit HTML code efficiently, often providing features like syntax highlighting, auto-completion, and error detection.',
  editorTypes: [
    'Text-Based Editors: Allow direct coding with features like syntax highlighting and code completion for full control over the webpage structure. Example - Sublime Text, Visual Studio Code, etc.',
    'WYSIWYG (What You See Is What You Get) Editors: Offer a graphical interface to design web pages visually and automatically generate the corresponding HTML code. Example - Adobe Dreamweaver, etc.',
  ],
  introToList:
    'There are many free and paid HTML editors available. The options below are beginner-friendly and also used by experienced developers.',
  editors: [
    {
      name: 'Notepad',
      description:
        'Notepad is a simple text editor also used to write HTML code. It is an inbuilt desktop application available in Windows OS.',
      steps: [
        'Step 1: Open any text editor of your choice. Here we are using Notepad.',
        'Step 2: Create a new file (File -> New File or Ctrl+N).',
        'Step 3: Write HTML code in the text editor.',
        'Step 4: Save the file with a suitable name and .html extension.',
        'Step 5: Open the saved HTML file in your browser (double-click, or right-click and use Open with).',
      ],
    },
    {
      name: 'Sublime Text Editor',
      description:
        'Sublime is a fast cross-platform code editor that supports markup languages and works well for HTML editing.',
      steps: [
        'Create a new file and save it with the .html extension to run an HTML file.',
      ],
    },
    {
      name: 'Atom',
      description:
        'Atom is an open-source code editor for macOS, Linux, and Windows that can be used to write and edit HTML code.',
      steps: [
        'Create a new file and save it with the .html extension to run an HTML file.',
      ],
    },
    {
      name: 'Visual Studio Code',
      description:
        'VS Code is one of the most popular code editors used by many companies and developers for modern web development.',
      steps: [
        'Step 1: Open VS Code and install Live Server from Extensions.',
        'Step 2: Create a new file with .html extension, then right-click and choose Open with Live Server.',
      ],
    },
  ],
  comparison: [
    {
      editor: 'Notepad',
      platform: 'Windows',
      keyFeatures: 'Basic text editing, lightweight',
      idealFor: 'Beginners',
      pros: 'Pre-installed and simple to use',
      cons: 'No advanced features like syntax highlighting or debugging',
    },
    {
      editor: 'VS Code',
      platform: 'Cross-Platform',
      keyFeatures: 'Live Server, Extensions, Debugging, Git Integration',
      idealFor: 'Professionals',
      pros: 'Highly extensible, multi-language support, strong debugging tools',
      cons: 'Can be resource-heavy for very basic tasks',
    },
    {
      editor: 'Atom',
      platform: 'Cross-Platform',
      keyFeatures: 'Open-source, collaborative editing, customizable UI',
      idealFor: 'Advanced Learners',
      pros: 'Flexible and extensible, integrates well with GitHub',
      cons: 'Can feel slower than other editors',
    },
    {
      editor: 'Sublime Text',
      platform: 'Cross-Platform',
      keyFeatures: 'Fast, multi-caret editing, syntax highlighting',
      idealFor: 'Developers looking for speed',
      pros: 'Lightweight but powerful and customizable',
      cons: 'Paid license required for full features',
    },
  ],
  quiz: {
    total: '6 Questions',
    question:
      'A file saved as index.txt contains HTML code. When opened in a browser, it shows raw code instead of a webpage. Why?',
    options: [
      'A) Notepad cannot execute HTML files',
      'B) Browsers do not support files created in Notepad',
      'C) The file extension is incorrect',
      'D) HTML requires a compiler before execution',
    ],
    answer: 'C) The file extension is incorrect',
  },
  articleTags: ['Web Technologies', 'HTML', 'HTML-Basics'],
  author: {
    name: 'ShraddhaVarat188',
    initial: 'S',
    url: 'https://www.geeksforgeeks.org/html/html-editors/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/html-editors/',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/step1-2.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/step2-2.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/step3-2.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/step4.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/step5.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/gfgsublime.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/gfgatom.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20230920130902/Screenshot-2023-09-20-130716.png',
    'https://media.geeksforgeeks.org/wp-content/uploads/20230920131130/Screenshot-2023-09-20-131024.png',
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
            { label: 'HTML Editors', url: 'https://www.geeksforgeeks.org/html/html-editors/' },
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
        { label: 'HTML Editors', url: 'https://www.geeksforgeeks.org/html/html-editors/' },
      ],
    },
  ],
};
