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
      className={`min-h-svh font-suse h-svh overflow-scroll flex flex-col ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-white text-black'}`}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <ErrorBoundary>
        <Header currentSlide={currentSlide} totalSlides={totalSlides} />

        <main className="container mx-auto grow p-4">
          <Suspense fallback={<Loading />}>
            {slides[currentSlide - 1]}
          </Suspense>
        </main>

        <Footer />

        <div className="fixed bottom-4 right-4 flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="rounded bg-blue-500 p-2 text-white disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="rounded bg-blue-500 p-2 text-white disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
          <button
            onClick={toggleDarkMode}
            className="rounded bg-yellow-500 p-2 text-white"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        <div className="pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-5">
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
