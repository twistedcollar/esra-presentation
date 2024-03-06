import React from 'react';
import './Risks.css'; // Make sure to import the CSS file

const RisksSection = () => {
  return (
    <div className="section" id="risks">
      <div className="risks-container">
        <div className="risk-level low-risk">
          <h3>Low Risk</h3>
          <ul>
            <li>Regular maintenance checks</li>
            <li>Comprehensive training programs</li>
            <li>Robust cybersecurity measures</li>
          </ul>
        </div>
        <div className="risk-level medium-risk">
          <h3>Medium Risk</h3>
          <ul>
            <li>Dependency on single supplier</li>
            <li>Regulatory changes</li>
            <li>Emerging market competition</li>
          </ul>
        </div>
        <div className="risk-level high-risk">
          <h3>High Risk</h3>
          <ul>
            <li>Severe weather impacts</li>
            <li>Geopolitical tensions in key regions</li>
            <li>Major cybersecurity breaches</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RisksSection;
