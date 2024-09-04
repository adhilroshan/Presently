import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import useDarkModeStore from './stores/DarkModeStore';

const OpeningSlide = lazy(() => import('./slides/OpeningSlide'));
const ImageSlide = lazy(() => import('./slides/ImageSlide'));
const ChartSlide = lazy(() => import('./slides/ChartSlide'));
const CodeBlockSlide = lazy(() => import('./slides/CodeBlockSlide'));
const PythonCompilerSlide = lazy(() => import('./slides/PythonCompilerSlide'));
const ClosingSlide = lazy(() => import('./slides/ClosingSlide'));

const slides = [
  <OpeningSlide />,
  <ImageSlide />,
  <ChartSlide />,
  <CodeBlockSlide />,
  <PythonCompilerSlide />,
  <ClosingSlide />
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  const containerRef = useRef(null);

  const totalSlides = slides.length;

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 1));

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') nextSlide();
    if (event.key === 'ArrowLeft') prevSlide();
  };

  useEffect(() => {
    // Focus the container div on mount
    containerRef.current.focus();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen font-suse h-svh overflow-scroll flex flex-col ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-white text-black'}`}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <ErrorBoundary>
        <Header currentSlide={currentSlide} totalSlides={totalSlides} />

        <main className="container mx-auto p-4 grow">
          <Suspense fallback={<Loading />}>
            {slides[currentSlide - 1]}
          </Suspense>
        </main>

        <Footer />

        <div className="fixed bottom-4 right-4 flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-yellow-500 text-white rounded"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          {darkMode ? (
            <img src="/logo-no-background.png" alt="Watermark" className="w-full" />
          ) : (
            <img src="/logo-black-no-background.png" alt="Watermark" className="w-full" />
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default App;
