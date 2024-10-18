import React, { useState } from 'react';

const Card = ({ title, image, description }) => {
    const [isVisible, setIsVisible] = useState(false); 

    const toggleDescription = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={image} alt={title} style={{ width: '100px', height: '100px' }} />
            {isVisible && <p>{description}</p>}
            <button onClick={toggleDescription}>
                {isVisible ? 'Hide' : 'Show'} Description
            </button>
        </div>
    );
};

export default Card;
