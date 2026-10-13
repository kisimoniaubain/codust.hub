export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  level: string;
  lessons: number;
  duration: string;
  progress: number;
  accent: string;
};

export const courses: Course[] = [
  {
    id: 'full-stack-web-engineering',
    title: 'Full-Stack Web Engineering',
    category: 'Full-Stack',
    description: 'Build production-ready apps from HTML and CSS to JavaScript, Node.js, APIs, and deployment.',
    level: 'Beginner → Advanced',
    lessons: 30,
    duration: '12 weeks',
    progress: 64,
    accent: '#00dbe7',
  },
  {
    id: 'python-for-beginners',
    title: 'Python for Beginners',
    category: 'Python',
    description: 'Learn the fundamentals of Python, automation, logic, and problem-solving through practical examples.',
    level: 'Beginner',
    lessons: 20,
    duration: '6 weeks',
    progress: 41,
    accent: '#74b8e6',
  },
  {
    id: 'data-structures-and-algorithms',
    title: 'Data Structures & Algorithms',
    category: 'DSA',
    description: 'Master arrays, recursion, trees, hashes, graphs, and interview patterns with focused practice.',
    level: 'Intermediate',
    lessons: 40,
    duration: '8 weeks',
    progress: 18,
    accent: '#ff24e4',
  },
  {
    id: 'javascript-foundations',
    title: 'JavaScript Foundations',
    category: 'JavaScript',
    description: 'Learn the browser language behind interactive sites, async flows, DOM work, and modern frontend logic.',
    level: 'Beginner → Intermediate',
    lessons: 22,
    duration: '7 weeks',
    progress: 72,
    accent: '#facc15',
  },
];

export type Lesson = {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz';
  isCompleted?: boolean;
};

export const lessonsByCourse: Record<string, Lesson[]> = {
  'full-stack-web-engineering': [
    { id: 'html-essentials', courseId: 'full-stack-web-engineering', title: 'HTML Essentials', duration: '12 min', type: 'reading', isCompleted: true },
    { id: 'css-layouts', courseId: 'full-stack-web-engineering', title: 'CSS Layouts', duration: '18 min', type: 'video', isCompleted: true },
    { id: 'javascript-dom', courseId: 'full-stack-web-engineering', title: 'JavaScript & DOM', duration: '20 min', type: 'video', isCompleted: false },
    { id: 'node-api', courseId: 'full-stack-web-engineering', title: 'Building a Node API', duration: '25 min', type: 'reading', isCompleted: false },
    { id: 'db-modeling', courseId: 'full-stack-web-engineering', title: 'Database Modeling', duration: '15 min', type: 'quiz', isCompleted: false },
  ],
  'python-for-beginners': [
    { id: 'python-basics', courseId: 'python-for-beginners', title: 'Python Basics', duration: '10 min', type: 'reading', isCompleted: true },
    { id: 'loops-functions', courseId: 'python-for-beginners', title: 'Loops & Functions', duration: '15 min', type: 'video', isCompleted: false },
    { id: 'oop-python', courseId: 'python-for-beginners', title: 'OOP in Python', duration: '18 min', type: 'video', isCompleted: false },
  ],
  'data-structures-and-algorithms': [
    { id: 'arrays', courseId: 'data-structures-and-algorithms', title: 'Arrays & Strings', duration: '22 min', type: 'reading', isCompleted: false },
    { id: 'linked-lists', courseId: 'data-structures-and-algorithms', title: 'Linked Lists', duration: '16 min', type: 'video', isCompleted: false },
    { id: 'trees', courseId: 'data-structures-and-algorithms', title: 'Trees', duration: '24 min', type: 'video', isCompleted: false },
  ],
  'javascript-foundations': [
    { id: 'js-syntax', courseId: 'javascript-foundations', title: 'JS Syntax', duration: '12 min', type: 'reading', isCompleted: true },
    { id: 'async-js', courseId: 'javascript-foundations', title: 'Async JavaScript', duration: '21 min', type: 'video', isCompleted: true },
    { id: 'dom-events', courseId: 'javascript-foundations', title: 'DOM Events', duration: '17 min', type: 'quiz', isCompleted: false },
  ],
};

export const leaderboardSeed = [
  { id: 'u-1', name: 'Aubain', xp: 2450, level: 18 },
  { id: 'u-2', name: 'Lina', xp: 2280, level: 16 },
  { id: 'u-3', name: 'Derrick', xp: 2140, level: 15 },
  { id: 'u-4', name: 'Naledi', xp: 2005, level: 14 },
  { id: 'u-5', name: 'Sam', xp: 1840, level: 13 },
];
