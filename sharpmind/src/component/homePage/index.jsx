import React from 'react';
import Navbar from '../../utils/navbar/index';
import News from '../../utils/news/index';
import Announcement from '../../utils/announcement/index';
import EventBox from '../../utils/eventBox/index';
import ImageSlider from '../../utils/imageSlider';
import ProgrammeContainer from '../../utils/programme';
import FacilitesContainer from '../../utils/facilities';
import Footer from '../../utils/footer';
import './index.css';
const newsItems = [
    "New semester starts on August 20th.",
    "Alumni meetup scheduled for September 10th.",
    "Guest lecture on AI by Dr. John Doe.",
    "New library resources available.",
    "Campus placement drive next week.",
    "Annual sports event on October 15th.",
    "New cafeteria menu announced.",
    "Workshop on web development this weekend.",
    "Scholarship applications open for next semester.",
    "Campus renovation project completed."
  ];
  const eventItems = [
    {
      image: "https://plus.unsplash.com/premium_photo-1683865776031-d253015b2b8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      description: "Event 1: Seminar on Web Development"
    },
    {
      image: "images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Event 2: Annual Sports Meet"
    },
    {
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Event 3: Guest Lecture on AI"
    }
  ];
  const announcements = [
    "First announcement: School will be closed on Friday.",
    "Second announcement: Annual Sports Day is on next Monday.",
    "Third announcement: New library books available from next week."
  ];
  const programmes = [
    {
        name: 'BTech',
        image: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTgwNzM2MXx8ZW58MHx8fHx8'
    },
    {
        name: 'BCA',
        image: 'https://images.unsplash.com/photo-1637089827720-22f789208c71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
    },
    {
        name: 'Management',
        image: 'https://plus.unsplash.com/premium_photo-1685141420034-f9b9903adcf6?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8bGp5SGRYUEQtM0F8fGVufDB8fHx8fA%3D%3D'
    }
];
const facilities = [
    {
        name: 'CC Lab',
        image: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTgwNzM2MXx8ZW58MHx8fHx8'
    },
    {
        name: 'Library',
        image: 'https://images.unsplash.com/photo-1637089827720-22f789208c71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
    },
    {
        name: 'Computers',
        image: 'https://plus.unsplash.com/premium_photo-1685141420034-f9b9903adcf6?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8bGp5SGRYUEQtM0F8fGVufDB8fHx8fA%3D%3D'
    }
];
const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="homepage-content">
            <div className="homepage-section">
                <ImageSlider />
                </div>
                <div className="homepage-section">
                <News news={newsItems} />
                </div>
                <div className="homepage-section">
                <EventBox events={eventItems} />
                </div>
                <div className="homepage-section">
                <Announcement announcements={announcements} />
                </div>
                
                <div className="homepage-section">
                <ProgrammeContainer programmes={programmes} />
                </div>
                <div className="homepage-section">
                <FacilitesContainer facilities={facilities} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
