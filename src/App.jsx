import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';
import ScrollProgress from './components/common/ScrollProgress';
import PageTransition from './components/common/PageTransition';
import ChatBot from './components/ui/ChatBot';

import './styles/index.css';

// Lazy loaded pages for performance (Phase 7: GEO Optimization)
const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const TechStack = lazy(() => import('./pages/TechStack'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={<PageTransition><Hero /></PageTransition>} 
          />
          <Route 
            path="/about" 
            element={<PageTransition><About /></PageTransition>} 
          />
          
          {/* New Semantic Routes */}
          <Route 
            path="/projects" 
            element={<PageTransition><Projects /></PageTransition>} 
          />
          <Route 
            path="/projects/:projectId" 
            element={<PageTransition><ProjectDetail /></PageTransition>} 
          />
          <Route 
            path="/tech-stack" 
            element={<PageTransition><TechStack /></PageTransition>} 
          />
          
          {/* Legacy Redirects */}
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          <Route path="/work/:projectId" element={<Navigate to={`/projects/${location.pathname.split('/').pop()}`} replace />} />
          <Route path="/skills" element={<Navigate to="/tech-stack" replace />} />

          <Route 
            path="/experience" 
            element={<PageTransition><Experience /></PageTransition>} 
          />
          <Route 
            path="/contact" 
            element={<PageTransition><Contact /></PageTransition>} 
          />
          <Route 
            path="/blog" 
            element={<PageTransition><Blog /></PageTransition>} 
          />
          <Route 
            path="/blog/:slug" 
            element={<PageTransition><BlogDetail /></PageTransition>} 
          />
          <Route 
            path="*" 
            element={<PageTransition><NotFound /></PageTransition>} 
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white text-on-surface overflow-x-hidden w-full">
        <CustomCursor />
        <Navbar />
        <ScrollProgress />
        <ChatBot />
        <main className="pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
