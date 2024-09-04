import React from 'react';
import Slide from '../components/Slide';

const ImageSlide = () => (
    <Slide>
        <h2 className="mb-4 text-3xl font-bold">Slide with Images</h2>
        <div className="grid grid-cols-2 gap-4">
            <img src="https://images.pexels.com/photos/19495289/pexels-photo-19495289/free-photo-of-young-woman-posing-on-green-lawn-in-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 1" className='aspect-square object-cover' />
            <img className='aspect-square object-cover' src="https://images.pexels.com/photos/28055748/pexels-photo-28055748/free-photo-of-a-person-with-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 2" />
        </div>
    </Slide>
);

export default ImageSlide;