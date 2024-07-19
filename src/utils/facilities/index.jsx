// FacilitiesContainer.jsx
import React from 'react';
import './index.css';

const FacilitiesContainer = ({ facilities }) => {
    return (
        <>
            <h2 className="facilities-heading">Facilities</h2>
            <div className="facilities-container">
                {facilities.map((facility, index) => (
                    <div key={index} className="facilities-box">
                        <img src={facility.image} alt={facility.name} className="facilities-image" />
                        <div className="facilities-text">{facility.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FacilitiesContainer;
