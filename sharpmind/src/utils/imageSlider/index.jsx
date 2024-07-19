import React, { useState, useEffect } from 'react';
import './index.css';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600',     // Your image URLs
        'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2227119/pexels-photo-2227119.jpeg?auto=compress&cs=tinysrgb&w=600'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="image-slider">
            <img src={images[currentIndex]} alt="Slider" />
            <div className="slider-text">
                <h1>SharpMind Institute</h1>
                <h3>Sharp your career with SharpMind</h3>
                <p>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
            </div>
        </div>
    );
}

export default ImageSlider;
