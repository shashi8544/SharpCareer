import React, { useState } from 'react';
import './index.css';

const EventBox = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="event-box">
      <h2 className="event-heading">Events</h2>
      <div className="event-content">
        <button className="arrow-button left" onClick={prevEvent}>&lt;</button>
        <div className="event-details">
          <img src={events[currentIndex].image} alt="Event" className="event-image" />
          <p>{events[currentIndex].description}</p>
        </div>
        <button className="arrow-button right" onClick={nextEvent}>&gt;</button>
      </div>
    </div>
  );
}

export default EventBox;
