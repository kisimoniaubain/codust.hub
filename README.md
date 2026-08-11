# 🚀 CODUST.HUB - Complete Coding Academy Platform

A sleek, game-like learning experience where users go from "coding dust" to brilliance. Built with **HTML/Tailwind**, **vanilla JavaScript**, and **Express.js**.

---

## 📁 Project Structure

```
Codust.hub/
├── index.html              # Original editor UI (mission briefing)
├── dashboard.html          # Main course dashboard with module timeline
├── lesson.html             # Split-screen lesson view with quiz
├── courseSchema.js         # Data structure definition (schema)
├── courseData.js           # Course data + CourseManager utility class
├── server.js               # Node.js Express backend API
├── package.json            # Dependencies
└── README.md               # This file
```

---

## 🎮 The User Flow

### 1. **Onboarding** (Future Phase)
- User signs up
- Takes 3-question micro-quiz to determine track (Frontend/Backend/Full-Stack)
- Gets routed to personalized dashboard

### 2. **Dashboard** (`dashboard.html`)
- Visual timeline of modules
- Locked modules are grayed out (unlock when prerequisites complete)
- Shows progress percentage for each module
- Stats: streak, completed modules/lessons, join date
- Click "CONTINUE" to start a module

### 3. **Learning Hub** (`lesson.html`)
- **Left Panel**: Lesson content + code snippet
- **Right Panel**: Interactive multiple-choice quiz
- When quiz is answered correctly → green success + "Continue" button
- When incorrect → shake animation + hint revealed + retry allowed
- Complete all lessons → unlock milestone task

### 4. **Milestones** (Capstone Projects)
- Instead of just tests, users build mini-features
- Example: "Build a responsive portfolio" or "Deploy a REST API"
- Milestone becomes portfolio piece → job-ready projects

---

## 🛠️ Getting Started

### **Frontend Only (Instant Preview)**

1. **Open the dashboard:**
   - Just open `dashboard.html` in your browser
   - No server needed for local testing
   - Course data is stored in **localStorage**

2. **Navigate the flow:**
   - Dashboard → Click a module → Lesson view → Answer quiz → Complete

### **Backend Setup (Optional - For Production)**

```bash
# Install dependencies
npm install

# Start the server
npm start
# or for development with auto-reload:
npm run dev

# Server runs on http://localhost:3000
```

---

## 📊 Data Structure Explained

### **Course Schema** (`courseSchema.js`)
Defines the blueprint for courses:
```javascript
{
  courseId: "fs-101",
  title: "Full-Stack Web Engineering",
  modules: [
    {
      moduleId: "mod-1",
      title: "Foundations of the Web",
      isLocked: false,
      lessons: [
        {
          lessonId: "les-1",
          title: "HTML Layouts & Semantic Structure",
          content: "...",
          codeSnippet: "...",
          quiz: {
            question: "...",
            options: ["", "", "", ""],
            correctAnswer: 1,  // Index of correct option
            hint: "..."
          },
          duration: 15
        }
      ],
      milestone: {
        title: "Build a Responsive Portfolio Homepage",
        requirements: ["...", "..."],
        reward: 150  // XP points
      }
    }
  ]
}
```

### **User Progress** (`courseData.js`)
Tracks what the user has completed:
```javascript
{
  userId: "user-123",
  name: "Alex Developer",
  completedLessons: ["les-1", "les-2"],
  completedModules: [],
  totalXP: 100,
  currentModule: "mod-1",
  currentLesson: "les-3",
  streak: 5
}
```

---

## 🧠 Course Manager API

All logic is handled by the `CourseManager` class in `courseData.js`:

```javascript
// Load data from localStorage
CourseManager.loadCourseData()
CourseManager.loadUserProgress()

// Mark lesson as complete (unlocks next module if applicable)
CourseManager.completeLesson(courseId, moduleId, lessonId)

// Get progress stats
CourseManager.getModuleProgress(moduleId)  // Returns: {total, completed, percentage}
CourseManager.getOverallProgress()          // Returns: {total, completed, percentage}

// Get current lesson
CourseManager.getCurrentLesson()            // Returns: {module, lesson}
```

---

## 🔌 Backend API Endpoints

If using the Express.js server (`server.js`), here are available endpoints:

### **Complete a Lesson**
```bash
POST /api/progress/complete-lesson

Body:
{
  "userId": "user-123",
  "courseId": "fs-101",
  "moduleId": "mod-1",
  "lessonId": "les-1"
}

Response:
{
  "success": true,
  "userProgress": {...},
  "moduleComplete": false
}
```

### **Get User Progress**
```bash
GET /api/progress/:userId

Response:
{
  "success": true,
  "progress": {
    "userId": "user-123",
    "completedLessons": [...],
    "totalXP": 150,
    ...
  }
}
```

### **Get Leaderboard**
```bash
GET /api/leaderboard

Response:
{
  "success": true,
  "leaderboard": [
    {
      "rank": 1,
      "userId": "user-456",
      "totalXP": 500,
      "lessonsCompleted": 12,
      "modulesCompleted": 3
    },
    ...
  ]
}
```

### **Submit Milestone**
```bash
POST /api/progress/submit-milestone

Body:
{
  "userId": "user-123",
  "moduleId": "mod-1",
  "projectUrl": "https://github.com/user/portfolio",
  "description": "My responsive portfolio"
}
```

---

## 🎨 UI/UX Design System

### **Color Palette**
- **Primary Cyan**: `#00dbe7` (accent, interactive)
- **Primary Fixed**: `#74f5ff` (highlights)
- **Secondary Magenta**: `#fface8` / `#ff24e4` (emphasis)
- **Background**: `#121318` (dark)
- **Surface**: `#1e1f25` (panels)
- **Error**: `#ffb4ab` (incorrect)

### **Typography**
- **Headline**: Space Grotesk (bold, large)
- **Body**: Geist (readable, regular)
- **Code/Mono**: JetBrains Mono (technical)

### **Components**
- **Glass Panels**: Frosted glass effect + corner brackets
- **Hex Button**: Hexagonal clip-path, animated states
- **Timeline Dots**: Indicate lesson completion
- **Progress Bars**: Cyan gradient
- **Scanline Effect**: CRT-style overlay

---

## 🔄 How Lessons Are Unlocked

1. **Module 1** starts unlocked
2. User completes all lessons in Module 1
3. Module 1 milestone appears (build a project)
4. After milestone → **Module 2 unlocks** automatically
5. Repeat for Module 3, etc.

---

## 📝 Adding New Courses

1. **Create new entry in `courseData.js`:**
```javascript
const NEW_COURSE = {
  courseId: "py-101",
  title: "Python for Data Science",
  modules: [
    {
      moduleId: "mod-py-1",
      title: "Python Basics",
      lessons: [
        {
          lessonId: "les-py-1",
          title: "Variables & Types",
          content: "...",
          codeSnippet: "...",
          quiz: {...}
        }
      ]
    }
  ]
};
```

2. **Update the enrollment system** to let users select courses

3. **Modify dashboard** to show all enrolled courses

---

## 🚀 Deployment

### **Frontend (Static Hosting)**
- Deploy `index.html`, `dashboard.html`, `lesson.html`, `courseData.js` to:
  - Vercel / Netlify (free)
  - GitHub Pages
  - Cloudflare Pages

### **Backend (Server Hosting)**
- Deploy `server.js` + `package.json` to:
  - Heroku (free tier available)
  - Render
  - Railway
  - AWS EC2

### **.env Configuration**
```env
PORT=3000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/codust
NODE_ENV=production
```

---

## 🧪 Testing the Platform

### **Scenario 1: Test Dashboard**
```javascript
// In browser console:
CourseManager.loadUserProgress()
// Should see: {userId, completedLessons: [], totalXP: 0, ...}

CourseManager.completeLesson('fs-101', 'mod-1', 'les-1')
CourseManager.getModuleProgress('mod-1')
// Should return: {total: 3, completed: 1, percentage: 33}
```

### **Scenario 2: Test Lesson Flow**
1. Go to `dashboard.html`
2. Click "CONTINUE" on Module 1
3. Redirects to `lesson.html?module=mod-1&lesson=les-1`
4. Read content, see code snippet
5. Answer quiz incorrectly → shake + hint
6. Answer correctly → success message
7. Click "CONTINUE" → marks as complete, moves to les-2

### **Scenario 3: Complete Module & Unlock Next**
1. Complete all lessons in Module 1
2. Module 2 should now be unlocked (no longer grayed out)
3. Stats should update

---

## 🎯 Next Features to Build

- [ ] User authentication (sign up / login)
- [ ] Onboarding quiz (track selection)
- [ ] Milestone project submission with GitHub integration
- [ ] Leaderboard & badges
- [ ] Discussion forums per module
- [ ] Peer code review system
- [ ] Video lessons alongside text
- [ ] Dark/light mode toggle
- [ ] Mobile-first lesson editor
- [ ] Integration with code execution engines (RunKit, etc.)

---

## 💡 Pro Tips for Copilot Integration

When you're ready to extend features, use Copilot Chat with these prompts:

**"Build the authentication system"**
```
I have a Codust.hub platform with HTML/Tailwind UI and vanilla JS. 
Add sign-up/login flow that:
1. Stores user credentials
2. Redirects to dashboard on login
3. Saves user ID to localStorage
```

**"Add GitHub project submission"**
```
Create a milestone submission form that:
1. Accepts GitHub repo URL
2. Validates it's a real repo
3. Stores submission in database
4. Shows status (pending/approved/rejected)
```

**"Build the leaderboard UI"**
```
Create a leaderboard.html page that:
1. Displays top 100 students by XP
2. Shows badges/achievements
3. Lets user see their rank
4. Real-time updates from /api/leaderboard
```

---

## 📚 File Reference

| File | Purpose |
|------|---------|
| `courseSchema.js` | Data structure (no logic) |
| `courseData.js` | Sample data + CourseManager class |
| `dashboard.html` | Module timeline view |
| `lesson.html` | Split-screen learning view |
| `index.html` | Original mission briefing UI |
| `server.js` | Express.js backend API |
| `package.json` | Node dependencies |

---

## 🎓 Educational Philosophy

Codust.hub follows these principles:

1. **Learn by Doing** - Each lesson has a hands-on quiz
2. **Visible Progress** - XP, streaks, completion percentages
3. **Gamified Milestones** - Build real projects, not just answer tests
4. **Unlock Progressively** - Prevent overwhelm, show clear path
5. **Portfolio Building** - Every milestone becomes a job-ready project

---

## 📞 Support & Feedback

For questions or issues:
1. Check localStorage data: `localStorage.getItem('userProgress')`
2. Check console for errors: `F12` → Console tab
3. Verify course data loaded: `CourseManager.loadCourseData()`

---

**Built with ❤️ for coders becoming brilliant.**

Made with Tailwind, vanilla JS, and Express. Zero frameworks drama. Pure learning.
# codust.hub
