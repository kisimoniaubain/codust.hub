import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CourseHub from './pages/CourseHub.jsx';
import LearningLibrary from './pages/LearningLibrary.jsx';
import Lesson from './pages/Lesson.jsx';
import Login from './pages/Login.jsx';
import TopicViewer from './pages/TopicViewer.jsx';
import Profile from './pages/Profile.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';
import { AuthProvider } from './hooks/useAuth.js';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <BackToTopButton />
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/courses"            element={<CourseHub />} />
          <Route path="/library"            element={<LearningLibrary />} />
          <Route path="/lesson"             element={<Lesson />} />
          <Route path="/login"              element={<Login />} />
          <Route path="/topic/:slug"        element={<TopicViewer />} />
          <Route path="/profile"            element={<Profile />} />
          <Route path="*"                   element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
