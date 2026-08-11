/**
 * CODUST.HUB - Progress API Backend
 * Express.js API for tracking student progress
 * 
 * Usage:
 * node server.js
 * 
 * Requires:
 * npm install express cors dotenv mongoose
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve React build in production; dev server handled by Vite
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// ============= DATABASE SCHEMA =============
// Mock database (replace with MongoDB in production)
const mockDatabase = {
  users: {},
  progress: {}
};

// ============= API ROUTES =============

/**
 * POST /api/progress/complete-lesson
 * 
 * Complete a lesson and update user progress
 * 
 * Request body:
 * {
 *   userId: "user-123",
 *   courseId: "fs-101",
 *   moduleId: "mod-1",
 *   lessonId: "les-1"
 * }
 */
app.post('/api/progress/complete-lesson', (req, res) => {
  try {
    const { userId, courseId, moduleId, lessonId } = req.body;

    // Validation
    if (!userId || !courseId || !moduleId || !lessonId) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['userId', 'courseId', 'moduleId', 'lessonId']
      });
    }

    // Initialize user progress if doesn't exist
    if (!mockDatabase.progress[userId]) {
      mockDatabase.progress[userId] = {
        userId,
        enrolledCourses: [courseId],
        completedLessons: [],
        completedModules: [],
        totalXP: 0
      };
    }

    const userProgress = mockDatabase.progress[userId];

    // Add completed lesson if not already completed
    if (!userProgress.completedLessons.includes(lessonId)) {
      userProgress.completedLessons.push(lessonId);
      userProgress.totalXP += 50; // Award XP per lesson

      console.log(`✓ Lesson ${lessonId} completed by user ${userId}`);
    }

    // Check if module is complete
    // (In real implementation, you'd check against database)
    const moduleLessons = 3; // Example: module has 3 lessons
    const lessonsInModule = [1, 2, 3].map(i => `les-${i}`);
    
    const completedInModule = lessonsInModule.filter(l => 
      userProgress.completedLessons.includes(l)
    ).length;

    if (completedInModule === moduleLessons) {
      if (!userProgress.completedModules.includes(moduleId)) {
        userProgress.completedModules.push(moduleId);
        userProgress.totalXP += 150; // Bonus XP for completing module

        console.log(`🎉 Module ${moduleId} completed by user ${userId}!`);

        // Unlock next module in real implementation
        return res.json({
          success: true,
          message: 'Module completed! Next module unlocked.',
          userProgress,
          moduleComplete: true,
          nextModuleUnlocked: true
        });
      }
    }

    res.json({
      success: true,
      message: 'Lesson completed successfully',
      userProgress,
      moduleComplete: false
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/progress/:userId
 * 
 * Get user's progress
 */
app.get('/api/progress/:userId', (req, res) => {
  try {
    const { userId } = req.params;

    const userProgress = mockDatabase.progress[userId];

    if (!userProgress) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      progress: userProgress
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * PUT /api/progress/:userId/unlock-module
 * 
 * Unlock a module for user (usually called after completing prerequisites)
 */
app.put('/api/progress/:userId/unlock-module', (req, res) => {
  try {
    const { userId } = req.params;
    const { moduleId } = req.body;

    if (!mockDatabase.progress[userId]) {
      return res.status(404).json({ error: 'User not found' });
    }

    // In real implementation, you'd update database
    console.log(`🔓 Module ${moduleId} unlocked for user ${userId}`);

    res.json({
      success: true,
      message: `Module ${moduleId} has been unlocked`,
      moduleUnlocked: moduleId
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/progress/submit-milestone
 * 
 * Submit milestone project/capstone for review
 */
app.post('/api/progress/submit-milestone', (req, res) => {
  try {
    const { userId, moduleId, projectUrl, description } = req.body;

    if (!userId || !moduleId) {
      return res.status(400).json({ 
        error: 'Missing required fields: userId, moduleId'
      });
    }

    console.log(`📤 Milestone submission from user ${userId} for module ${moduleId}`);
    console.log(`Project URL: ${projectUrl}`);
    console.log(`Description: ${description}`);

    // In real implementation, send to review queue
    res.json({
      success: true,
      message: 'Milestone submitted for review',
      submissionId: `sub-${Date.now()}`,
      status: 'pending_review'
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/leaderboard
 * 
 * Get top students by XP
 */
app.get('/api/leaderboard', (req, res) => {
  try {
    const leaderboard = Object.values(mockDatabase.progress)
      .sort((a, b) => b.totalXP - a.totalXP)
      .slice(0, 10)
      .map((user, index) => ({
        rank: index + 1,
        userId: user.userId,
        totalXP: user.totalXP,
        lessonsCompleted: user.completedLessons.length,
        modulesCompleted: user.completedModules.length
      }));

    res.json({
      success: true,
      leaderboard
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/analytics/lesson-time
 * 
 * Track time spent on lessons for analytics
 */
app.post('/api/analytics/lesson-time', (req, res) => {
  try {
    const { userId, lessonId, timeSpentMinutes, completedSuccessfully } = req.body;

    console.log(`📊 Analytics: User ${userId} spent ${timeSpentMinutes}min on lesson ${lessonId}`);

    // In real implementation, save to analytics database
    res.json({
      success: true,
      message: 'Analytics recorded'
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// ============= ERROR HANDLING =============

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// ============= START SERVER =============

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
    🚀 CODUST.HUB API SERVER RUNNING
    ================================
    
    Server: http://localhost:${PORT}
    
    Available Endpoints:
    - POST   /api/progress/complete-lesson
    - GET    /api/progress/:userId
    - PUT    /api/progress/:userId/unlock-module
    - POST   /api/progress/submit-milestone
    - GET    /api/leaderboard
    - POST   /api/analytics/lesson-time
    
    ================================
  `);
});

module.exports = app;
