# 📋 CODUST.HUB - Complete Blueprint & Copilot Prompts

This document contains everything needed to brief Copilot (or any AI) on building features for Codust.hub.

---

## 🎯 Platform Overview

**Codust.hub** is a game-like coding academy where learners progress from "coding dust" to coding brilliance.

### Core Values
- ✅ Learn by doing (interactive quizzes)
- ✅ Gamified progression (XP, streaks, milestones)
- ✅ Portfolio building (real projects per module)
- ✅ Progressive unlocking (no overwhelm)
- ✅ Minimal design (dark theme, cyberpunk aesthetic)

### Target User
- Beginner to intermediate coders
- Self-paced learners
- Want visible progress + job-ready projects
- Enjoy gamification

---

## 🏗️ Current Architecture

### Frontend Stack
- **HTML5** + **Tailwind CSS** (dark theme, custom design system)
- **Vanilla JavaScript** (no frameworks)
- **Material Symbols** (icons)
- **localStorage** (client-side data persistence)

### Backend Stack (Optional)
- **Node.js** + **Express.js**
- **Mock database** (ready for MongoDB/PostgreSQL)
- **REST API** (for progress tracking)

### Pages
1. **`index.html`** - Original mission briefing (code editor mockup)
2. **`dashboard.html`** - Module timeline + progress
3. **`lesson.html`** - Split-screen learning + quiz

### Key JavaScript Utility
```javascript
CourseManager.completeLesson(courseId, moduleId, lessonId)
CourseManager.getModuleProgress(moduleId)
CourseManager.getOverallProgress()
```

---

## 📊 Course Data Structure

Every course follows this schema:

```javascript
{
  courseId: "fs-101",
  title: "Full-Stack Web Engineering",
  trackType: "full-stack",  // or "frontend", "backend"
  modules: [
    {
      moduleId: "mod-1",
      title: "Foundations of the Web",
      isLocked: false,        // Unlock when prerequisites complete
      order: 1,               // Determines unlock sequence
      lessons: [
        {
          lessonId: "les-1",
          title: "HTML & Semantic Structure",
          content: "Educational text...",
          codeSnippet: "Example code...",
          quiz: {
            question: "Multiple choice...",
            options: ["A", "B", "C", "D"],
            correctAnswer: 1,   // Index (0-based)
            hint: "Helpful hint..."
          },
          duration: 15        // Minutes to complete
        }
      ],
      milestone: {
        title: "Build a Responsive Portfolio",
        description: "Create a live portfolio site",
        requirements: ["Responsive layout", "SEO friendly", "Accessibility"],
        reward: 150           // XP points
      }
    }
  ]
}
```

---

## 🎮 User Flow

```
SIGNUP/ONBOARD
    ↓
[Take track quiz: Frontend / Backend / Full-Stack]
    ↓
DASHBOARD (module timeline)
    ↓
[Click "CONTINUE" on Module 1]
    ↓
LESSON VIEW (left: content, right: quiz)
    ↓
[Answer quiz → correct = next lesson]
    ↓
[Complete all lessons in module]
    ↓
MILESTONE (build a mini-project)
    ↓
[Submit project]
    ↓
MODULE 2 UNLOCKS
    ↓
[Repeat]
```

---

## 💻 Copilot Prompt Templates

Use these exact prompts when building new features:

### **Prompt 1: Authentication System**

```
I'm building Codust.hub, a coding academy platform. 

Current tech stack:
- Frontend: HTML/Tailwind CSS + vanilla JavaScript
- Backend: Node.js + Express.js
- Data: localStorage (frontend) + mock database (backend)

Task: Add user authentication

Requirements:
1. Create a login.html page with email/password form
2. Add server route POST /api/auth/login that validates credentials
3. On successful login, return JWT token + userId
4. Store userId in localStorage, redirect to dashboard.html
5. Protect dashboard by checking userId in localStorage
6. Create logout button in header

Keep the cyberpunk dark theme (primary cyan #00dbe7).
Use same design system as existing pages (glass-panel, corner-bracket classes).
```

### **Prompt 2: GitHub Project Integration**

```
Add GitHub project submission for Codust.hub milestones.

Requirements:
1. After completing all lessons, show a "Submit Milestone" button
2. Clicking opens a form that asks for:
   - GitHub repository URL
   - Project description
   - Demo link (optional)
3. Validate GitHub URL is real (fetch from GitHub API)
4. Send to server: POST /api/progress/submit-milestone
5. Show confirmation: "Submitted for review"
6. Store in database with status: pending_review / approved / rejected

Design:
- Modal popup with glass-panel styling
- Same dark theme
- Show loading spinner while validating GitHub repo
```

### **Prompt 3: Leaderboard Page**

```
Build a leaderboard page for Codust.hub.

Current data available:
- userId, name, totalXP, completedLessons, completedModules, streak

Requirements:
1. Create leaderboard.html
2. Fetch GET /api/leaderboard endpoint
3. Display top 100 students in a ranked table:
   - Rank | Username | XP | Lessons | Modules | Streak
4. Highlight current user's rank
5. Add filters: this week, this month, all-time
6. Add user's own stats card at top
7. Real-time updates (refresh every 30 seconds)

Design:
- Use same glass-panel + corner-bracket styling
- Cyan color for ranks 1-3 (podium)
- Magenta for user's own row
- Mobile responsive table
```

### **Prompt 4: Milestone Showcase Gallery**

```
Create a gallery page showing all completed milestones.

Requirements:
1. Build milestones.html
2. Display all submitted projects by current user
3. For each milestone show:
   - Project thumbnail/screenshot
   - Module name
   - Project title
   - Live link (if available)
   - Completion date
   - Status (approved/pending/feedback)
4. Let users edit project details / resubmit
5. Show XP earned for each milestone

Design:
- Grid layout (2-3 columns on desktop, 1 on mobile)
- Each card is glass-panel with corner-bracket
- Project links clickable
- Show badges for "Top Project" or "High Quality"
```

### **Prompt 5: Onboarding Quiz**

```
Create the onboarding experience for Codust.hub.

Requirements:
1. Build onboarding.html (shown on first visit)
2. 3-question micro-quiz to determine track:
   - Question 1: "What interests you most?" → Frontend / Backend / Full-Stack
   - Question 2: "Your experience level?" → Beginner / Intermediate / Advanced
   - Question 3: "What's your goal?" → Job-ready / Hobby / Career change
3. Based on answers:
   - Set trackType in user profile
   - Show recommended course
   - Adjust lesson difficulty
4. After quiz → redirect to dashboard.html
5. Store answers in localStorage under userProfile.onboarding

Design:
- Full-screen, minimal
- Large animated buttons
- Progress indicator (1/3, 2/3, 3/3)
- Cyber theme with glows
```

### **Prompt 6: Add Discussion Forums**

```
Add a discussion forum per module for Codust.hub.

Requirements:
1. Create forum.html?module=mod-1
2. Users can post questions in that module's forum
3. Other users reply with help
4. Instructors/TAs mark replies as "solution"
5. Voting: upvote helpful answers
6. Server routes:
   - POST /api/forum/create-post
   - POST /api/forum/create-reply
   - POST /api/forum/vote
   - GET /api/forum/module/:moduleId

Data structure:
{
  postId: "post-123",
  moduleId: "mod-1",
  authorId: "user-456",
  title: "How to solve X?",
  body: "I'm stuck on...",
  replies: [],
  votes: 0,
  createdAt: timestamp
}

Design:
- Thread-style layout
- Highlight solved posts
- User avatars + reputation badges
```

### **Prompt 7: Progress Analytics Dashboard**

```
Create an analytics dashboard showing learning stats.

Requirements:
1. Build analytics.html
2. Show:
   - Total lessons completed (chart over time)
   - Average time per lesson (bar chart)
   - Completion rate per module (%)
   - Learning streak (days)
   - XP earned over time (line chart)
   - Most difficult lessons (hint system data)
3. Use charts library: Chart.js or ECharts
4. Data from: GET /api/analytics/user/:userId

Data structure needed:
{
  lessonsOverTime: [{date, count}, ...],
  timePerLesson: [{lessonId, avgMinutes}, ...],
  moduleCompletion: [{moduleId, percentage}, ...],
  xpOverTime: [{date, xp}, ...]
}

Design:
- Dashboard grid layout
- Mix cards + charts
- Color code: cyan for progress, magenta for goals
```

### **Prompt 8: Mobile Lesson Editor**

```
Adapt lesson.html for mobile with touch optimizations.

Requirements:
1. Optimize lesson.html for screens < 768px
2. Stack left/right panels vertically on mobile
3. Make quiz options larger (tap targets min 48px)
4. Add swipe gestures:
   - Swipe left → next lesson
   - Swipe right → previous lesson
5. Show code snippet in collapsible accordion on mobile
6. Sticky "Submit Answer" button at bottom
7. Test on actual phones (iPhone SE, Android)

Keep the same dark theme + glass styling.
```

### **Prompt 9: Code Execution (Mini-Editor)**

```
Add a mini code editor in lesson.html for hands-on coding.

Requirements:
1. Show code editor pane (right side on desktop, below content on mobile)
2. Let users write JavaScript/Python/HTML
3. "Run Code" button executes and shows output
4. For JavaScript: use Function() or eval() with sandbox
5. For Python: connect to RunKit or similar
6. Show errors clearly
7. Let instructors pre-populate starter code

Example quiz requirement:
"Write a function that returns the sum of two numbers"
- User sees prompt
- Edits code
- Clicks Run
- If output matches expected → quiz passes

Integration:
- Replace simple quiz with code submission
- Grade by comparing output or running tests
```

### **Prompt 10: Certification & Badges**

```
Add achievement system to Codust.hub.

Requirements:
1. Create badges (visual + metadata):
   - "First Lesson" → unlock on lesson 1 complete
   - "Module Master" → complete entire module
   - "Perfect Streak" → 7 days consecutive
   - "All-Star" → complete full course
   - "Quick Learner" → complete lesson < 10 min
   - "Helpful Mentor" → 10+ forum replies marked as solution
2. Create certificates (PDF):
   - Generate on course completion
   - Show course name, completion date, XP earned
   - Digital signature
3. Show badges on user profile
4. Let users share badge links (social-proof)

Data structure:
{
  badgeId: "badge-first-lesson",
  title: "First Lesson",
  icon: "url",
  description: "Complete your first lesson",
  unlockedAt: timestamp,
  rarity: "common" | "rare" | "epic"
}

Server route: POST /api/badges/check - awards badges when criteria met
```

---

## 🚀 Testing Checklist

Before calling a feature complete:

- [ ] Works on desktop (1920px) + tablet (768px) + mobile (375px)
- [ ] No console errors
- [ ] Data persists in localStorage
- [ ] Follows cyber dark theme
- [ ] Uses glass-panel + corner-bracket for panels
- [ ] Responsive font sizes
- [ ] Touchscreen friendly (min 48px tap targets)
- [ ] Accessibility: keyboard navigation, color contrast
- [ ] Server endpoints tested with Postman
- [ ] API errors handled gracefully

---

## 📦 Dependencies to Install

### Frontend (Already included via CDN)
- Tailwind CSS
- Material Symbols
- Google Fonts

### Backend (if using Node.js)
```bash
npm install
```

Installs:
- `express` - Web server
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `mongoose` - MongoDB driver (optional)
- `nodemon` - Auto-reload in development

---

## 🎨 Design System Reference

### Colors
- **Primary Cyan**: `#00dbe7` - Main accent
- **Primary Fixed**: `#74f5ff` - Highlights
- **Secondary**: `#fface8` - Secondary accent
- **Secondary Container**: `#ff24e4` - Emphasis
- **Background**: `#121318` - Main bg
- **Surface**: `#1e1f25` - Panel bg
- **Error**: `#ffb4ab` - Errors/incorrect
- **Success**: `#00dbe7` - Correct/success

### CSS Classes to Reuse
```css
.glass-panel        /* Frosted glass effect */
.corner-bracket     /* Cyan corner brackets */
.module-card        /* Module container */
.progress-bar       /* XP/progress visual */
.timeline-dot       /* Lesson completion indicator */
.quiz-option        /* Answer button */
```

### Typography
- **Display**: Space Grotesk (big titles)
- **Body**: Geist (readable text)
- **Code**: JetBrains Mono (code snippets)

---

## 🔗 Integration Points for Copilot

When building features, always reference these:

**"Integrate with CourseManager"**
```javascript
// Always use CourseManager for state
CourseManager.completeLesson(courseId, moduleId, lessonId)
CourseManager.getModuleProgress(moduleId)
CourseManager.loadUserProgress()
```

**"Match the design system"**
```html
<div class="glass-panel corner-bracket p-panel-padding">
  <!-- Your content -->
</div>
```

**"Call backend API"**
```javascript
fetch('/api/progress/complete-lesson', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId, courseId, moduleId, lessonId
  })
})
```

---

## 📞 Quick Reference Commands

### Check Course Data
```javascript
// Browser console:
CourseManager.loadCourseData()
CourseManager.loadUserProgress()
localStorage.getItem('courseData')
```

### Test API (from terminal)
```bash
# Complete a lesson
curl -X POST http://localhost:3000/api/progress/complete-lesson \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-123",
    "courseId": "fs-101",
    "moduleId": "mod-1",
    "lessonId": "les-1"
  }'

# Get user progress
curl http://localhost:3000/api/progress/user-123

# Get leaderboard
curl http://localhost:3000/api/leaderboard
```

---

## 🎓 Learning Resources

If you're building features independently:

1. **Tailwind CSS** - https://tailwindcss.com/docs
2. **Vanilla JS Patterns** - https://javascript.info/
3. **REST API Design** - https://restfulapi.net/
4. **localStorage** - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
5. **Express.js** - https://expressjs.com/en/starter/basic-routing.html

---

## 🎯 Success Metrics

Track these to measure Codust.hub's success:

- **User Retention**: % of users coming back next day/week
- **Completion Rate**: % of users who finish at least one module
- **Streak Length**: Average daily consecutive learning days
- **Project Quality**: % of milestone projects meeting rubric
- **Community Engagement**: Forum posts, peer reviews, badges earned
- **Time to Competency**: Days until user can build a real project

---

**Last Updated:** 2026-06-16  
**Version:** 1.0.0  
**Status:** Ready for feature development

---

## 🚀 Next Steps

1. ✅ **Frontend UI** - DONE (index.html, dashboard.html, lesson.html)
2. ✅ **Course Data** - DONE (courseData.js, courseSchema.js)
3. ✅ **Learning Logic** - DONE (CourseManager, quiz system)
4. ⏭️ **Authentication** - Use Prompt 1 above
5. ⏭️ **GitHub Integration** - Use Prompt 2 above
6. ⏭️ **Leaderboard** - Use Prompt 3 above
7. ⏭️ **Analytics** - Use Prompt 7 above

Copy any prompt above, paste into Copilot Chat, and iterate!
