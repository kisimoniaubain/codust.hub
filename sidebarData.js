/**
 * CODUST.HUB - Comprehensive Curriculum Sidebar Data
 * From Absolute Beginner to Advanced Programming
 * Structured like GeeksforGeeks with expandable categories
 */

const codustSidebarData = [
  {
    category: "1. Introduction to Coding (Absolute Beginner)",
    icon: "school",
    topics: [
      { 
        name: "What is Programming?", 
        slug: "what-is-programming",
        description: "Understand the basics of programming and how it works"
      },
      { 
        name: "How Computers Work", 
        slug: "how-computers-work",
        description: "Learn the fundamentals of computer hardware and architecture"
      },
      { 
        name: "Choosing Your First Language", 
        slug: "choosing-a-language",
        description: "Compare programming languages and choose the best one to start with"
      },
      { 
        name: "Setting Up Your Development Environment", 
        slug: "setup-environment",
        description: "Install tools, IDEs, and frameworks for coding"
      },
      {
        name: "Your First 'Hello World' Program",
        slug: "first-hello-world",
        description: "Write and run your first program"
      }
    ]
  },
  {
    category: "2. Programming Fundamentals",
    icon: "code",
    topics: [
      { 
        name: "Variables & Data Types", 
        slug: "variables-data-types",
        description: "Strings, numbers, booleans, and null/undefined"
      },
      { 
        name: "Operators & Expressions", 
        slug: "operators-expressions",
        description: "Arithmetic, comparison, logical, and assignment operators"
      },
      { 
        name: "Conditional Statements (if/else, switch)", 
        slug: "conditionals",
        description: "Control flow with if, else if, else, and switch statements"
      },
      { 
        name: "Loops & Iteration (for, while)", 
        slug: "loops-iteration",
        description: "Repeat code with for loops, while loops, and do-while"
      },
      { 
        name: "Functions & Scope", 
        slug: "functions-scope",
        description: "Write reusable functions, understand variable scope"
      },
      {
        name: "Arrays & Collections",
        slug: "arrays-collections",
        description: "Store and manipulate multiple values"
      },
      {
        name: "Objects & Key-Value Pairs",
        slug: "objects-key-value",
        description: "Organize data using objects and dictionaries"
      }
    ]
  },
  {
    category: "3. Frontend Web Development",
    icon: "language",
    topics: [
      { 
        name: "HTML5 Semantic Structure", 
        slug: "html5-semantic",
        description: "Build accessible, semantic HTML documents"
      },
      { 
        name: "CSS3 Layouts (Flexbox & Grid)", 
        slug: "css3-layouts",
        description: "Master modern CSS layout techniques"
      },
      { 
        name: "Modern Styling with Tailwind CSS", 
        slug: "tailwind-css",
        description: "Utility-first CSS framework for rapid development"
      },
      { 
        name: "Responsive Design & Media Queries", 
        slug: "responsive-design",
        description: "Build websites that work on all devices"
      },
      { 
        name: "JavaScript DOM Manipulation", 
        slug: "js-dom-manipulation",
        description: "Select, modify, and create HTML elements with JavaScript"
      },
      { 
        name: "Event Handling & Listeners", 
        slug: "event-handling",
        description: "Respond to user interactions like clicks and inputs"
      },
      { 
        name: "Asynchronous JavaScript & Fetch API", 
        slug: "async-javascript",
        description: "Work with promises, async/await, and API calls"
      },
      {
        name: "Forms & Validation",
        slug: "forms-validation",
        description: "Create and validate user input forms"
      },
      {
        name: "Frontend Frameworks (React Basics)",
        slug: "react-basics",
        description: "Introduction to React components and state management"
      }
    ]
  },
  {
    category: "4. Backend Engineering & Databases",
    icon: "storage",
    topics: [
      { 
        name: "Introduction to Node.js & Express", 
        slug: "intro-nodejs-express",
        description: "Server-side JavaScript with Node.js and Express framework"
      },
      { 
        name: "Building RESTful APIs", 
        slug: "building-rest-apis",
        description: "Design and implement REST API endpoints"
      },
      {
        name: "HTTP Methods & Status Codes",
        slug: "http-methods-status",
        description: "GET, POST, PUT, DELETE, and response codes"
      },
      { 
        name: "Introduction to Databases (SQL vs NoSQL)", 
        slug: "sql-vs-nosql",
        description: "Compare relational and non-relational databases"
      },
      { 
        name: "SQL Database Basics", 
        slug: "sql-basics",
        description: "Write and execute SQL queries"
      },
      {
        name: "Data Modeling with MongoDB & Mongoose",
        slug: "mongodb-mongoose",
        description: "Design and work with document-based databases"
      },
      { 
        name: "Authentication & JWT Tokens", 
        slug: "backend-auth",
        description: "Implement user authentication and security"
      },
      {
        name: "Environment Variables & Security",
        slug: "env-variables-security",
        description: "Protect sensitive data and configuration"
      },
      {
        name: "Error Handling & Logging",
        slug: "error-handling-logging",
        description: "Debug and monitor backend applications"
      }
    ]
  },
  {
    category: "5. Data Structures & Algorithms",
    icon: "account_tree",
    topics: [
      { 
        name: "Arrays & Strings", 
        slug: "arrays-strings",
        description: "Fundamental data structures and operations"
      },
      { 
        name: "Linked Lists", 
        slug: "linked-lists",
        description: "Sequential data structure with dynamic memory"
      },
      { 
        name: "Stacks & Queues", 
        slug: "stacks-queues",
        description: "LIFO and FIFO data structures"
      },
      {
        name: "Trees & Graphs",
        slug: "trees-graphs",
        description: "Hierarchical and network data structures"
      },
      { 
        name: "Sorting Algorithms", 
        slug: "sorting-algorithms",
        description: "Bubble, merge, quick sort, and more"
      },
      {
        name: "Searching Algorithms",
        slug: "searching-algorithms",
        description: "Linear search, binary search, and hashing"
      },
      { 
        name: "Time & Space Complexity (Big O)", 
        slug: "big-o-notation",
        description: "Analyze algorithm efficiency"
      },
      {
        name: "Dynamic Programming",
        slug: "dynamic-programming",
        description: "Solve complex problems by breaking them down"
      }
    ]
  },
  {
    category: "6. Advanced Topics & Optimization",
    icon: "trending_up",
    topics: [
      {
        name: "Web Performance Optimization",
        slug: "web-performance",
        description: "Speed up applications and improve user experience"
      },
      {
        name: "Testing & Test-Driven Development",
        slug: "testing-tdd",
        description: "Write unit tests, integration tests, and E2E tests"
      },
      {
        name: "Git & Version Control",
        slug: "git-version-control",
        description: "Manage code with Git and GitHub collaboration"
      },
      {
        name: "DevOps & Deployment",
        slug: "devops-deployment",
        description: "Deploy applications to cloud platforms"
      },
      {
        name: "System Design & Architecture",
        slug: "system-design",
        description: "Design scalable applications"
      },
      {
        name: "Microservices & APIs",
        slug: "microservices-apis",
        description: "Build modular, distributed systems"
      },
      {
        name: "Database Optimization & Indexing",
        slug: "db-optimization",
        description: "Make databases fast and efficient"
      },
      {
        name: "Security Best Practices",
        slug: "security-best-practices",
        description: "Prevent common vulnerabilities and attacks"
      }
    ]
  },
  {
    category: "7. Full-Stack Project Examples",
    icon: "integration_instructions",
    topics: [
      {
        name: "Build a Todo App",
        slug: "project-todo-app",
        description: "Full-stack project: frontend + backend + database"
      },
      {
        name: "Build a Blog Platform",
        slug: "project-blog",
        description: "Multi-user blog with authentication"
      },
      {
        name: "Build an E-Commerce Store",
        slug: "project-ecommerce",
        description: "Product catalog, shopping cart, payments"
      },
      {
        name: "Build a Chat Application",
        slug: "project-chat-app",
        description: "Real-time messaging with WebSockets"
      },
      {
        name: "Build a Social Network",
        slug: "project-social-network",
        description: "Users, posts, likes, and follows"
      }
    ]
  }
];

// Helper function to flatten all topics for searching
function getAllTopics() {
  const allTopics = [];
  codustSidebarData.forEach(category => {
    category.topics.forEach(topic => {
      allTopics.push({
        ...topic,
        category: category.category
      });
    });
  });
  return allTopics;
}

// Helper function to get a specific topic by slug
function getTopicBySlug(slug) {
  for (let category of codustSidebarData) {
    for (let topic of category.topics) {
      if (topic.slug === slug) {
        return { ...topic, category: category.category };
      }
    }
  }
  return null;
}

// Helper function to search topics
function searchTopics(query) {
  const allTopics = getAllTopics();
  const lowerQuery = query.toLowerCase();
  return allTopics.filter(topic => 
    topic.name.toLowerCase().includes(lowerQuery) ||
    topic.description.toLowerCase().includes(lowerQuery)
  );
}


export { codustSidebarData };

