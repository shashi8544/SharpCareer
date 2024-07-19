// Announcement.jsx
import React, { useState, useEffect } from 'react';
import './index.css';

const Announcement = ({ announcements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 100000); // Change announcement every 5 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="announcement">
      <marquee behavior="scroll" direction="left">{announcements[currentIndex]}</marquee>
    </div>
  );
}

export default Announcement;
