import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QuizProvider } from './context/QuizContext';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Quiz from './components/quiz/Quiz';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <QuizProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <main className="flex-grow bg-black">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <Quiz />
          </div>
        </Router>
      </QuizProvider>
    </HelmetProvider>
  );
}

export default App; 