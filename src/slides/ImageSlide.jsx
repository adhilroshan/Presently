import React from 'react';
import Slide from '../components/Slide';

const ImageSlide = () => (
    <Slide>
        <h2 className="text-3xl font-bold mb-4">Slide with Images</h2>
        <div className="grid grid-cols-2 gap-4">
            <img src="/api/placeholder/300/200" alt="Placeholder 1" />
            <img src="/api/placeholder/300/200" alt="Placeholder 2" />
        </div>
    </Slide>
);

export default ImageSlide;