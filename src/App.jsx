import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';
import ScrollProgress from './components/common/ScrollProgress';
import PageTransition from './components/common/PageTransition';
import ChatBot from './components/ui/ChatBot';

import Hero from './pages/Hero';
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';

import './styles/index.css';

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Hero />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/work" 
          element={
            <PageTransition>
              <Work />
            </PageTransition>
          } 
        />
        <Route 
          path="/work/:projectId" 
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          } 
        />
        <Route 
          path="/skills" 
          element={
            <PageTransition>
              <Skills />
            </PageTransition>
          } 
        />
        <Route 
          path="/experience" 
          element={
            <PageTransition>
              <Experience />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          } 
        />
        <Route 
          path="/blog/:slug" 
          element={
            <PageTransition>
              <BlogDetail />
            </PageTransition>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } 
        />
      </Routes>
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
