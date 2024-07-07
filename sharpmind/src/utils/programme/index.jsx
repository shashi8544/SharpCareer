// ProgrammeContainer.jsx
import React from 'react';
import './index.css';

const ProgrammeContainer = ({ programmes }) => {
    return (
        <>
            <h2 className="programme-heading">Programmes</h2>
            <div className="programme-container">
                {programmes.map((programme, index) => (
                    <div key={index} className="programme-box">
                        <img src={programme.image} alt={programme.name} className="programme-image" />
                        <div className="programme-text">{programme.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProgrammeContainer;
