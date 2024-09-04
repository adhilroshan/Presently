import React from 'react';
import useDarkModeStore from '../stores/DarkModeStore';

const Header = ({ currentSlide, totalSlides }) => {
    const { darkMode } = useDarkModeStore();
    return(
    <header className="p-4 md:mx-10 flex justify-between items-center">
        <a href="/">
        {
            darkMode? <img src={"/logo-no-background.png"} alt="Presently Logo" className="h-8" /> : <img src="/logo-black-no-background.png" alt="Presently Logo" className="h-8" />
            // :  <img src="/logo-black-no-background.png" alt="Presently Logo" className="h-8 " />
        }
        </a>
           
        <div>Slide {currentSlide} of {totalSlides}</div>
    </header>
)};

export default Header;