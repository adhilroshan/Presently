import React from 'react';

const Header = ({ currentSlide, totalSlides }) => (
    <header className="p-4 flex justify-between items-center">
        <img src="/api/placeholder/100/50" alt="Demo Logo" className="h-8" />
        <div>Slide {currentSlide} of {totalSlides}</div>
    </header>
);

export default Header;