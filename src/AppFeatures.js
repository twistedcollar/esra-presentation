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
    { "id": 1, "title": "User-friendly interface", "description": "Intuitive navigation for all user levels." },
    { "id": 2, "title": "Mobile accessibility", "description": "Full functionality on mobile devices." },
    { "id": 3, "title": "QA & Mechanic performance analytics", "description": "Quality and performance personnel analysis." },
    { "id": 4, "title": "Real-time task status", "description": "Updates on tasks as they happen." },
    { "id": 5, "title": "Real-time alerts and notifications", "description": "Instant alerts for important updates." },
    { "id": 6, "title": "Historical data downloads", "description": "Download past data for analysis and reporting." }
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