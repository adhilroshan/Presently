import React from 'react';

const Slide = ({ children }) => (
    <div className="slide flex flex-col justify-center h-full">
        {children}
    </div>
);

export default Slide;