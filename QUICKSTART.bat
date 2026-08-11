@echo off
REM CODUST.HUB - Quick Start Guide for Windows

cls
echo.
echo ╔════════════════════════════════════════════╗
echo ║        CODUST.HUB - QUICK START            ║
echo ║           Windows Edition                  ║
echo ╚════════════════════════════════════════════╝
echo.

echo 📂 Project Structure:
echo  ├── index.html           (Original mission briefing UI)
echo  ├── dashboard.html       (Main course dashboard)
echo  ├── lesson.html          (Split-screen lesson view)
echo  ├── courseSchema.js      (Data structure definition)
echo  ├── courseData.js        (Course data + CourseManager)
echo  ├── server.js            (Node.js/Express backend)
echo  └── package.json         (Dependencies)
echo.

echo 🚀 Option 1: Frontend Only (No Backend)
echo.
echo  1. Open dashboard.html in your browser
echo     - No server needed!
echo     - Data stored in localStorage
echo.
echo  2. Try this flow:
echo     Dashboard → Click Module 1 → Answer Quiz → Complete
echo.
echo  ✅ Best for: Quick testing, demos, mobile
echo.

echo 🔧 Option 2: With Backend Server
echo.
echo  1. Open PowerShell or Command Prompt
echo.
echo  2. Navigate to this folder:
echo     cd "C:\Users\Student\Desktop\Kisimoni\Code Protocol\Codust.hub"
echo.
echo  3. Install dependencies:
echo     npm install
echo.
echo  4. Start the server:
echo     npm start
echo     (Server runs at http://localhost:3000)
echo.
echo  5. Open dashboard.html in your browser
echo     - Backend provides API endpoints
echo.
echo  ✅ Best for: Production deployment, real database
echo.

echo 🧪 Test Scenarios
echo.

echo  Scenario 1: Check if data loaded
echo  ─────────────────────────────────
echo  1. Open dashboard.html in your browser
echo  2. Open browser DevTools (Press F12)
echo  3. Click "Console" tab
echo  4. Copy and paste this:
echo     CourseManager.loadCourseData()
echo  5. Should see course structure displayed
echo.

echo  Scenario 2: Complete a lesson
echo  ──────────────────────────────
echo  1. From dashboard, click "CONTINUE" on Module 1
echo  2. Read the lesson content on the left
echo  3. Answer the quiz on the right (try wrong first!)
echo  4. When answer is wrong: you'll see shake animation + hint
echo  5. Answer correctly: green success message appears
echo  6. Click "CONTINUE TO NEXT": marked as complete
echo.

echo  Scenario 3: Check progress
echo  ──────────────────────────
echo  1. Open browser console (F12)
echo  2. Run this command:
echo     CourseManager.getModuleProgress('mod-1')
echo  3. Should show: {total: 3, completed: 1, percentage: 33}
echo.

echo  Scenario 4: Unlock next module
echo  ──────────────────────────────
echo  1. Open browser console (F12)
echo  2. Run these commands one by one:
echo     CourseManager.completeLesson('fs-101', 'mod-1', 'les-2')
echo     CourseManager.completeLesson('fs-101', 'mod-1', 'les-3')
echo  3. This completes Module 1
echo  4. Go back to dashboard
echo  5. Module 2 should now be UNLOCKED! ✨
echo.

echo 📊 Browser DevTools Tricks
echo.
echo  View all course data:
echo    Copy this to console:
echo    localStorage.getItem('courseData')
echo.
echo  View user progress:
echo    Copy this to console:
echo    localStorage.getItem('userProgress')
echo.
echo  Reset everything (start over):
echo    Copy this to console:
echo    localStorage.clear()
echo    Then press F5 to refresh
echo.
echo  Watch for storage changes:
echo    In DevTools: Application tab → Local Storage
echo.

echo 📱 Mobile Testing on Desktop
echo.
echo  Desktop Chrome:
echo    1. Open dashboard.html in Chrome
echo    2. Press Ctrl + Shift + M (Toggle device toolbar)
echo    3. Select: iPhone 12, Samsung Galaxy S21, iPad, etc
echo    4. Test all buttons and flows on different sizes
echo.
echo  Real Phone:
echo    1. Make sure phone + computer on same WiFi
echo    2. Find your computer IP:
echo       - Open PowerShell
echo       - Type: ipconfig
echo       - Look for "IPv4 Address" (something like 192.168.x.x)
echo    3. On your phone browser, visit:
echo       http://YOUR_IP:PORT/dashboard.html
echo       (or just open the file if it's hosted locally)
echo.

echo 🎨 Design System Highlights
echo.
echo  Dark Theme:
echo    - Background: #121318 (very dark gray)
echo    - Panels: #1e1f25 (slightly lighter)
echo.
echo  Accent Colors:
echo    - Primary Cyan: #00dbe7 (interactive elements)
echo    - Secondary Magenta: #ff24e4 (emphasis)
echo    - Error Red: #ffb4ab (incorrect answers)
echo.
echo  Effects:
echo    - Glass morphism (frosted glass panels)
echo    - Corner brackets (cyan borders)
echo    - Scanline overlay (CRT screen effect)
echo    - Smooth animations
echo.

echo 🔗 Adding Your Own Content
echo.
echo  1. Open courseData.js in VS Code
echo.
echo  2. Find COURSE_DATA object
echo.
echo  3. Add new lessons to any module:
echo     {
echo       lessonId: 'les-99',
echo       title: 'My New Topic',
echo       description: 'Brief description',
echo       content: 'Full educational content here...',
echo       codeSnippet: `code example here`,
echo       quiz: {
echo         question: 'What is X?',
echo         options: ['A', 'B', 'C', 'D'],
echo         correctAnswer: 2,
echo         hint: 'Think about...'
echo       },
echo       duration: 20
echo     }
echo.
echo  4. Save the file
echo.
echo  5. Refresh dashboard.html
echo.
echo  6. New lesson appears automatically!
echo.

echo 🐛 Troubleshooting
echo.
echo  Problem: Data not saving
echo    → Solution: Make sure localStorage is enabled
echo    → Try: Ctrl + Shift + Delete to clear cache
echo    → Refresh: F5
echo.
echo  Problem: Module won't unlock
echo    → Check: Is completeLesson() being called?
echo    → Try: Use console to test manually
echo.
echo  Problem: Quiz not responding
echo    → Open: DevTools Console (F12)
echo    → Look for: Red error messages
echo    → Try: Use Chrome browser
echo.
echo  Problem: Styles look broken
echo    → Check: Is Tailwind CSS loading?
echo    → In DevTools: Network tab, search "cdn.tailwindcss"
echo    → Try: Hard refresh (Ctrl + Shift + R)
echo.

echo 📂 File Descriptions
echo.
echo  index.html
echo    - Original mission briefing UI (code editor mockup)
echo    - Shows what the platform looks like
echo.
echo  dashboard.html
echo    - Main page users see
echo    - Shows all modules + progress
echo    - Click to start lessons
echo.
echo  lesson.html
echo    - Where learning happens
echo    - Split screen: content (left) + quiz (right)
echo    - Answer quiz to complete
echo.
echo  courseData.js
echo    - ALL course content lives here
echo    - CourseManager class (progress tracking)
echo    - localStorage integration
echo.
echo  courseSchema.js
echo    - Just the data structure (no logic)
echo    - Reference for how data is organized
echo.
echo  server.js
echo    - Optional Node.js backend
echo    - API endpoints for progress
echo    - Run with: npm start
echo.

echo 🚀 Editing Files
echo.
echo  Best editor: Visual Studio Code
echo    1. Download: https://code.visualstudio.com
echo    2. Open folder: Codust.hub
echo    3. Right-click any file → Open with Code
echo    4. Install extensions:
echo       - Live Server (to test HTML)
echo       - Thunder Client (to test API)
echo.
echo  When you edit courseData.js:
echo    1. Save the file (Ctrl + S)
echo    2. Refresh browser (F5)
echo    3. Changes appear instantly!
echo.

echo 📞 Common Commands
echo.
echo  To run frontend:
echo    Just open .html files in any browser
echo    OR use Live Server extension in VS Code
echo.
echo  To run backend:
echo    1. Open PowerShell in folder
echo    2. Type: npm start
echo    3. Server starts on port 3000
echo.
echo  To test API:
echo    Method 1 (Browser):
echo      1. Open DevTools (F12)
echo      2. Go to Network tab
echo      3. Perform action that calls API
echo      4. See request/response details
echo.
echo    Method 2 (Thunder Client):
echo      1. Install Thunder Client in VS Code
echo      2. Create new request: POST
echo      3. URL: http://localhost:3000/api/progress/complete-lesson
echo      4. Body: { "userId":"user-123", ... }
echo.

echo 🎓 Learning Path
echo.
echo  1. Open dashboard.html in browser
echo  2. Click "CONTINUE" on Module 1
echo  3. Read lesson content
echo  4. Answer quiz
echo  5. Complete all 3 lessons
echo  6. Module 2 unlocks automatically
echo  7. Repeat for Module 3
echo.
echo  That's the complete user experience!
echo.

echo 💡 Next Steps
echo.
echo  ✅ Step 1: Test the frontend
echo     - Open dashboard.html
echo     - Try the lesson flow
echo.
echo  ✅ Step 2: Add your content
echo     - Edit courseData.js
echo     - Add new lessons/quizzes
echo.
echo  ✅ Step 3: Extend features
echo     - Read BLUEPRINT.md for Copilot prompts
echo     - Add authentication, leaderboard, etc
echo.
echo  ✅ Step 4: Deploy
echo     - Frontend to Netlify/Vercel
echo     - Backend to Render/Railway
echo.

echo.
echo ╔════════════════════════════════════════════╗
echo ║          Ready to Code! 🎉                 ║
echo ║                                            ║"
echo ║  1. Open: dashboard.html                   ║
echo ║  2. Edit: courseData.js                    ║
echo ║  3. Extend: Follow BLUEPRINT.md            ║
echo ║                                            ║
echo ║  Questions? Read README.md                 ║
echo ╚════════════════════════════════════════════╝
echo.
pause
