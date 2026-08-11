export const JAVASCRIPT_TUTORIAL_CONTENT = {
  title: 'JavaScript Tutorial',
  lastUpdated: '23 Jun, 2026',
  intro:
    'JavaScript is a programming language used to create dynamic content for websites. It is a lightweight, cross-platform, and single-threaded programming language. It is an interpreted language that executes code line by line, providing more flexibility.',
  clientSide:
    'On the client side, JavaScript works along with HTML and CSS. HTML adds structure to a web page, CSS styles it, and JavaScript brings it to life by allowing users to interact with elements on the page, such as actions on clicking buttons, filling out forms, and showing animations. JavaScript on the client side is directly executed in the user\'s browser.',
  serverSide:
    'On the server side (on web servers), JavaScript is used to access databases, file handling, and security features to send responses to browsers.',
  reasons: [
    'Core language for web development, enabling dynamic and interactive features in websites with fewer lines of code.',
    'Highly in demand, offering many job opportunities in Frontend, Backend (Node.js), and Full Stack Development.',
    'Supports powerful frameworks and libraries like React, Angular, Vue.js, Node.js, and Express.js.',
    'Object-oriented and event-driven language, ideal for building scalable and responsive applications.',
    'Cross-platform and runs directly in all modern web browsers without installation.',
    'Major companies like Google, Facebook, and Amazon use JavaScript in their tech stacks.',
  ],
  helloWorld: {
    description:
      'Most browsers can run JavaScript directly, so there is no need to install a compiler. However, the built-in browser console is not very beginner-friendly. Try this Hello World program first.',
    code: 'console.log("Hello World!");',
    output: 'Hello World!',
    note: 'Before you continue, edit the code and try to print your own name.',
  },
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/20250514181403972719/Client-Side-JavaScript.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20250514181421572975/Server-Side-JavaScript.webp',
  ],
  sections: [
    {
      heading: 'Fundamentals',
      items: [
        'Introduction',
        'Using JS in HTML',
        'Browser console',
        'Variables',
        'Data Types',
        'Type Conversion and Coercion',
        'Operators',
        'Control Flow Statements',
        'Scope',
      ],
    },
    {
      heading: 'Functions',
      items: ['Functions', 'Hoisting', 'Function binding', 'Closures', 'Higher-Order Functions', 'Iterator', 'Function Generator'],
    },
    {
      heading: 'Events',
      items: ['Events', 'Event Listener', 'Event Propagation', 'Event Delegation', 'Default Actions and preventDefault()', 'Event Loop'],
    },
    {
      heading: 'JavaScript Beginner Projects',
      items: [
        'Counter Application',
        'Random Number Generator',
        'Prime Number Checker',
        'Unicode Character Value',
        'Palindrome Checker App',
        'Show and Hide Password',
        'Email Validator App',
        'Random Password Generator',
        'JavaScript Carousel',
      ],
    },
    {
      heading: 'JavaScript Data Structure',
      items: ['Numbers', 'String', 'Array', 'Map', 'LinkedList', 'Stack', 'Queue', 'Sorting Algorithms'],
      extra: ['Typed Arrays', 'WeakMap', 'WeakSet', 'Deque', 'Priority Queue (Heap)'],
      note:
        'To learn data structure and algorithm with JavaScript in detail, refer to our DSA with JavaScript Tutorial.',
    },
    {
      heading: 'Object Oriented Programming',
      items: [
        'Introduction to OOP',
        'Objects',
        'this Keyword',
        'Prototype',
        'Classes',
        'Constructor Method',
        'Getters and Setters',
        'Static Methods',
        'Inheritance',
        'Encapsulation',
        'Abstraction',
        'Polymorphism',
      ],
    },
    {
      heading: 'Browser and Document Object Model',
      items: ['Browser Object Model', 'Document Object Model', 'Manipulate DOM Elements', 'Event Handling in the DOM'],
    },
    {
      heading: 'Asynchronous JavaScript',
      items: ['Callbacks', 'Promise', 'Promise Chaining', 'Async/Await'],
    },
    {
      heading: 'JavaScript Intermediate Projects',
      items: [
        'Toast Notification',
        'OTP Input Field',
        'Multi-Step Progress Bar',
        'Student Grade Calculator',
        'Quiz App with Timer',
        'Price Range Slider with Min-Max Input',
        'GitHub Profile Search',
        'Sortable and Filterable Table',
        'Expense Tracker',
        'Dynamic Resume Builder',
      ],
    },
    {
      heading: 'JavaScript JSON',
      items: ['JSON Tutorial', 'JSON vs JavaScript Object', 'Parse JSON Data in JS', 'JavaScript JSON Parser', 'Read JSON File Using JS', 'JavaScript JSON Complete Reference'],
    },
    {
      heading: 'Regular Expression and Validation',
      items: ['Regular expressions', 'Form', 'Email', 'Number', 'UserName', 'Password', 'URL'],
    },
    {
      heading: 'Exception and Error Handling',
      items: ['Errors and Exceptions', 'try-catch, throw statement and finally block', 'Custom Errors', 'Debugging'],
    },
    {
      heading: 'Testing and Performance Optimization',
      items: ['Unit testing with Jest', 'Memory Management', 'Garbage Collection', 'Lazy Loading', 'Debouncing', 'Throttling'],
    },
    {
      heading: 'Interesting Facts',
      items: ['Data Types', 'Strings', 'Functions', "'this' keyword", 'Set', 'Map', 'Arrays', 'Object', 'Complete JavaScript'],
    },
    {
      heading: 'JavaScript Advanced Projects',
      items: [
        'Tic-Tac-Toe Game',
        'QR Code Generator',
        'QR Code Scanner or Reader',
        'Resize and Compress Images',
        'Task Scheduler',
        'Nested Chat Comments',
        'Employee Database Management System',
        'Responsive Admin Dashboard',
        'Dragon\'s World Game',
      ],
      note: 'For project lists, follow JavaScript Project Ideas with Source Code.',
    },
    {
      heading: 'JavaScript Quiz',
      items: ['Quizzes', 'Practice Quiz-1', 'Practice Quiz-2', 'Practice Quiz-3'],
    },
    {
      heading: 'JavaScript Practice',
      items: [
        'Coding Problems',
        'JavaScript Exercises',
        'Exercises, Practice Questions and Solutions',
        'String Exercise',
        'Array Exercise',
        'Coding Questions and Answers',
        'Programming Examples',
      ],
    },
    {
      heading: 'Interview Questions',
      items: [
        'Interview Questions and Answers For Beginners',
        'Intermediate Interview Questions and Answers',
        'Advance Interview Questions and Answers For Experienced',
        'this Operator Interview Questions',
        'String Interview Questions',
        'Array Interview Questions',
        'Object Interview Questions',
        'Top 50 Array Coding Problems for Interviews',
        'JavaScript Output Based Interview Questions',
      ],
      note: 'For a quick recap, read JavaScript Cheat Sheet.',
    },
  ],
  librariesFrameworks: {
    intro:
      'JavaScript libraries and frameworks play an important role in modern web development. They provide built-in functions and structure that help create fast, reliable, and interactive applications.',
    libraries: {
      frontend: ['React', 'Preact', 'Lodash', 'Moment.js', 'jQuery', 'Axios'],
      backend: ['Socket.io', 'JWT', 'Bcrypt', 'Passport.js', 'CORS'],
    },
    frameworks: {
      frontend: ['Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Gatsby', 'Remix'],
      backend: ['Express.js', 'NestJS', 'Koa.js', 'Sails.js', 'Fastify'],
      fullstack: ['Meteor.js', 'Next.js', 'Nuxt.js', 'RedwoodJS'],
    },
  },
  applications: [
    'Web Development: JavaScript is widely used to create interactive and dynamic websites.',
    'Mobile App Development: Frameworks like React Native support cross-platform apps.',
    'Game Development: JavaScript powers browser-based games with libraries like Phaser.',
    'Server-Side Development: With Node.js, JavaScript is used for APIs and scalable backend systems.',
    'Scripting and Automation: JavaScript helps automate validation and data manipulation tasks.',
    'Web Scraping: Tools like Puppeteer can extract information from websites.',
    'IoT: JavaScript can control devices and sensors in IoT systems.',
    'Real-Time Applications: Technologies like WebSockets and Socket.io enable instant communication.',
  ],
  importantLinks: [
    { label: 'Comparison of various programming languages', url: 'https://www.geeksforgeeks.org/comparison-of-programming-languages/' },
    { label: 'Careers and Jobs in JavaScript', url: 'https://www.geeksforgeeks.org/jobs-in-javascript/' },
    { label: 'Companies That Use JavaScript', url: 'https://www.geeksforgeeks.org/javascript/javascript-used-by-companies/' },
    { label: 'Introduction of JavaScript', url: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/' },
    { label: 'JavaScript Cheat Sheet', url: 'https://www.geeksforgeeks.org/javascript/javascript-cheat-sheet-a-basic-guide-to-javascript/' },
  ],
  courseUrl: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/',
  author: {
    name: 'Kkartik295',
    initial: 'K',
    url: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/',
  },
  articleTags: ['JavaScript', 'Web Technologies', 'Tutorials', 'Web-Tech Tutorials'],
  explore: [
    {
      heading: 'Explore',
      groups: [
        {
          heading: 'JavaScript Basics',
          items: [
            { label: 'Introduction', url: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/' },
            { label: 'Variables and Data Types', url: 'https://www.geeksforgeeks.org/javascript/javascript-variables/' },
            { label: 'Control Flow', url: 'https://www.geeksforgeeks.org/javascript/javascript-if-else-statement/' },
          ],
        },
        {
          heading: 'Array and String',
          items: [
            { label: 'Arrays', url: 'https://www.geeksforgeeks.org/javascript/arrays-in-javascript/' },
            { label: 'Strings', url: 'https://www.geeksforgeeks.org/javascript/javascript-strings/' },
            { label: 'Top Array Problems', url: 'https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/' },
          ],
        },
        {
          heading: 'Function and Object',
          items: [
            { label: 'Functions', url: 'https://www.geeksforgeeks.org/javascript/javascript-functions/' },
            { label: 'Objects', url: 'https://www.geeksforgeeks.org/javascript/objects-in-javascript/' },
            { label: 'Closures', url: 'https://www.geeksforgeeks.org/javascript/closures-in-javascript/' },
          ],
        },
        {
          heading: 'OOP',
          items: [
            { label: 'Classes', url: 'https://www.geeksforgeeks.org/javascript/classes-in-javascript/' },
            { label: 'Inheritance', url: 'https://www.geeksforgeeks.org/javascript/inheritance-in-javascript/' },
            { label: 'Polymorphism', url: 'https://www.geeksforgeeks.org/javascript/polymorphism-in-javascript/' },
          ],
        },
        {
          heading: 'Asynchronous JavaScript',
          items: [
            { label: 'Callbacks', url: 'https://www.geeksforgeeks.org/javascript/javascript-callbacks/' },
            { label: 'Promises', url: 'https://www.geeksforgeeks.org/javascript/javascript-promises/' },
            { label: 'Async/Await', url: 'https://www.geeksforgeeks.org/javascript/async-await-function-in-javascript/' },
          ],
        },
        {
          heading: 'Exception Handling',
          items: [
            { label: 'Errors and Exceptions', url: 'https://www.geeksforgeeks.org/javascript/error-handling-in-javascript/' },
            { label: 'try-catch', url: 'https://www.geeksforgeeks.org/javascript/javascript-try-catch/' },
            { label: 'Custom Errors', url: 'https://www.geeksforgeeks.org/javascript/javascript-custom-errors/' },
          ],
        },
        {
          heading: 'DOM',
          items: [
            { label: 'DOM Introduction', url: 'https://www.geeksforgeeks.org/javascript/html-dom-document-object-model/' },
            { label: 'Event Handling', url: 'https://www.geeksforgeeks.org/javascript/events-in-javascript/' },
            { label: 'DOM Manipulation', url: 'https://www.geeksforgeeks.org/javascript/how-to-manipulate-dom-with-javascript/' },
          ],
        },
        {
          heading: 'Advanced Topics',
          items: [
            { label: 'Debouncing', url: 'https://www.geeksforgeeks.org/javascript/debouncing-in-javascript/' },
            { label: 'Throttling', url: 'https://www.geeksforgeeks.org/javascript/throttling-in-javascript/' },
            { label: 'Memory Management', url: 'https://www.geeksforgeeks.org/javascript/memory-management-in-javascript/' },
          ],
        },
      ],
    },
    {
      heading: 'Courses',
      items: [
        { label: 'JavaScript Tutorial', url: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/' },
      ],
    },
  ],
};
