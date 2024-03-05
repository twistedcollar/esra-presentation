import React, { useState } from 'react';
import './AppFeatures.css'; // Make sure this path is correct

const FeatureCard = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="feature-card" onClick={handleClick}>
      <div className={`feature-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front">
          <div className="feature-title">{title}</div>
        </div>
        <div className="card-back">
          <div className="feature-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

const AppFeatures = () => {
  const features = [
    { id: 1, title: 'Feature 1', description: 'Description of Feature 1' },
    { id: 2, title: 'Feature 2', description: 'Description of Feature 2' },
    // Add more features as needed
  ];

  return (
    <div className="features-container">
      {features.map(feature => (
        <FeatureCard key={feature.id} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
};

export default AppFeatures;
