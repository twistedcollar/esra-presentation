import React, { useState } from 'react';
import './AppFeatures.css';

const FeatureCard = ({ feature }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped); // Toggle the flipped state
  };

  return (
    <div className={`feature-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="feature-card-inner">
        <div className="card-face card-front">
          <div className="feature-title">{feature.title}</div>
        </div>
        <div className="card-face card-back">
          <div className="feature-description">{feature.description}</div>
        </div>
      </div>
    </div>
  );
};

const AppFeatures = () => {
  const features = [
    { id: 1, title: 'User-friendly interface', description: 'Description of Feature 1' },
    { id: 2, title: 'Straightforward task handling', description: 'Description of Feature 2' },
    { id: 3, title: 'Mobile accessibility', description: 'Description of Feature 1' },
    { id: 4, title: 'QA & Mechanic performance analytics', description: 'Description of Feature 1' },
    { id: 5, title: 'Real-time task status', description: 'Description of Feature 1' },
    { id: 6, title: 'Real-time alerts and notifications', description: 'Description of Feature 1' },
    { id: 6, title: 'Hisorical data downloads', description: 'Description of Feature 1' },
    
    // More features can be added here
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  );
};

export default AppFeatures;