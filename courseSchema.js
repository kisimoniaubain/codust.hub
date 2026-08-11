// Database schema structure for Codust.hub courses
const CourseSchema = {
  courseId: "fs-101",
  title: "Full-Stack Web Engineering",
  description: "Go from coding dust to building live production web apps.",
  trackType: "full-stack", // Options: frontend, backend, full-stack
  totalDuration: "12 weeks",
  modules: [
    {
      moduleId: "mod-1",
      title: "Foundations of the Web",
      description: "Master the building blocks of web development",
      isLocked: false,
      order: 1,
      lessons: [
        {
          lessonId: "les-1",
          title: "HTML Layouts & Semantic Structure",
          description: "Learn how to structure content with semantic HTML",
          content: "HTML5 introduces semantic elements that clearly describe their meaning to both the browser and the developer. Elements like <header>, <nav>, <main>, <article>, <section>, and <footer> make your code more readable and help with accessibility.",
          codeSnippet: `<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/courses">Courses</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Learning HTML</h1>
    <p>Semantic HTML improves accessibility.</p>
  </article>
</main>`,
          quiz: {
            question: "Which HTML5 element should wrap your primary navigation?",
            options: ["<header>", "<nav>", "<section>", "<article>"],
            correctAnswer: 1,
            hint: "Think about what element specifically represents navigation."
          },
          duration: 15,
          completed: false
        },
        {
          lessonId: "les-2",
          title: "CSS Grid & Flexbox Mastery",
          description: "Create responsive layouts with modern CSS",
          content: "Flexbox is perfect for one-dimensional layouts (rows or columns), while CSS Grid excels at two-dimensional layouts. Understanding when to use each tool is crucial for responsive design.",
          codeSnippet: `/* Flexbox Example */
.container {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}

/* Grid Example */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}`,
          quiz: {
            question: "Which CSS property centers items both horizontally and vertically in a flex container?",
            options: ["align-content", "justify-items", "Both justify-content and align-items", "flex-align"],
            correctAnswer: 2,
            hint: "You need two properties to center in both directions."
          },
          duration: 20,
          completed: false
        },
        {
          lessonId: "les-3",
          title: "Responsive Design Principles",
          description: "Build apps that work on all devices",
          content: "Responsive design means your website adapts to different screen sizes and devices. Use media queries, flexible grids, and scalable fonts to create flexible layouts.",
          codeSnippet: `/* Mobile-first approach */
.hero {
  font-size: 18px;
  padding: 16px;
}

/* Tablet & Up */
@media (min-width: 768px) {
  .hero {
    font-size: 24px;
    padding: 32px;
  }
}

/* Desktop & Up */
@media (min-width: 1024px) {
  .hero {
    font-size: 32px;
    padding: 48px;
  }
}`,
          quiz: {
            question: "What is the correct viewport meta tag for responsive design?",
            options: ["<meta name='responsive' content='true'>", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta name='mobile' content='responsive'>", "<meta name='scale' content='device-width'>"],
            correctAnswer: 1,
            hint: "The meta tag should tell the browser about viewport settings."
          },
          duration: 18,
          completed: false
        }
      ],
      milestone: {
        title: "Build a Responsive Portfolio Homepage",
        description: "Create a responsive personal portfolio with semantic HTML and flexbox layout",
        requirements: ["Semantic HTML structure", "Responsive layout with media queries", "Mobile-first design", "Pass accessibility audit"],
        reward: 150 // XP or points
      },
      completed: false
    },
    {
      moduleId: "mod-2",
      title: "JavaScript Fundamentals",
      description: "Master the language of the web",
      isLocked: true,
      order: 2,
      lessons: [
        {
          lessonId: "les-4",
          title: "Variables, Types & Scope",
          description: "Understand how JavaScript manages data",
          content: "JavaScript has three ways to declare variables: var (function-scoped), let (block-scoped), and const (block-scoped, immutable). Modern JavaScript uses let and const, avoiding var in most cases.",
          codeSnippet: `// Using const for values that won't be reassigned
const API_URL = 'https://api.example.com';

// Using let for values that will change
let counter = 0;
counter += 1;

// Block scope example
if (true) {
  let blockScoped = 'only here';
  const alsoBlockScoped = 'only here too';
}
// console.log(blockScoped); // Error: not defined`,
          quiz: {
            question: "Which declaration should you use by default in modern JavaScript?",
            options: ["var", "let", "const", "All are equivalent"],
            correctAnswer: 2,
            hint: "Modern best practice prefers immutable declarations when possible."
          },
          duration: 22,
          completed: false
        },
        {
          lessonId: "les-5",
          title: "Functions & Arrow Syntax",
          description: "Write reusable, clean code",
          content: "Arrow functions provide a concise syntax and lexically bind 'this'. They're perfect for callbacks and array methods, but traditional functions are still useful for constructors.",
          codeSnippet: `// Traditional function
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const greet = (name) => \`Hello, \${name}!\`;

// Arrow function with multiple parameters
const add = (a, b) => a + b;

// Arrow function with multiple statements
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};`,
          quiz: {
            question: "What is a key difference between arrow functions and traditional functions?",
            options: ["Arrow functions are slower", "Arrow functions have their own 'this' binding", "Arrow functions lexically bind 'this'", "Arrow functions can't use parameters"],
            correctAnswer: 2,
            hint: "Think about how 'this' is handled differently."
          },
          duration: 20,
          completed: false
        }
      ],
      milestone: {
        title: "Build a Todo App with JavaScript",
        description: "Create an interactive todo application with add, delete, and mark complete functionality",
        requirements: ["Add new todos", "Delete todos", "Mark complete", "Local storage persistence"],
        reward: 200
      },
      completed: false
    },
    {
      moduleId: "mod-3",
      title: "Backend Basics with Node.js",
      description: "Build scalable server-side applications",
      isLocked: true,
      order: 3,
      lessons: [
        {
          lessonId: "les-6",
          title: "Express Server Setup",
          description: "Create your first web server",
          content: "Express.js is a minimal and flexible Node.js web application framework. It provides a robust set of features for building single and multi-page applications.",
          codeSnippet: `const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Codust.hub!');
});

app.post('/api/courses', (req, res) => {
  const { title } = req.body;
  res.json({ message: \`Course \${title} created!\` });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
          quiz: {
            question: "What does the express.json() middleware do?",
            options: ["Compresses responses", "Parses incoming JSON payloads", "Handles file uploads", "Manages database connections"],
            correctAnswer: 1,
            hint: "It's related to parsing request bodies."
          },
          duration: 25,
          completed: false
        }
      ],
      milestone: {
        title: "Deploy a REST API",
        description: "Build and deploy a live REST API with basic CRUD operations",
        requirements: ["GET endpoint", "POST endpoint", "Error handling", "Live deployment"],
        reward: 250
      },
      completed: false
    }
  ]
};

// User progress schema
const UserProgressSchema = {
  userId: "user-123",
  name: "Alex Developer",
  trackType: "full-stack",
  enrolledCourses: ["fs-101"],
  completedLessons: [],
  completedModules: [],
  totalXP: 0,
  currentModule: "mod-1",
  currentLesson: "les-1",
  joinDate: "2024-01-15",
  streak: 5 // consecutive days learning
};
