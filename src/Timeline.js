import React, { useState} from 'react';
import './Timeline.css';
// Define a template timeline and associated risks
// Define timeline data
const timelineData = [
    { id: 1, milestone: 'Project Kickoff', description: 'Initiation of Project ESRA', date: 'March 2024' },
    { id: 2, milestone: 'Development Phase', description: 'Building the ESRA system', date: 'April - June 2024' },
    { id: 3, milestone: 'Testing and QA', description: 'Quality assurance and testing', date: 'July - August 2024' },
    { id: 4, milestone: 'Deployment', description: 'Launch of Project ESRA', date: 'September 2024' },
    { id: 5, milestone: 'Monitoring and Updates', description: 'Ongoing support and improvements', date: 'Ongoing' }
  ];
  
  const riskData = [
    { id: 1, level: 'low', description: 'Low: Potential delays in development phase due to technical challenges.' },
    { id: 2, level: 'medium', description: 'Medium: Risk of unexpected changes in regulatory requirements impacting deployment timeline.' },
    { id: 3, level: 'high', description: 'High: Resource constraints leading to slower progress during testing and QA phase.' },
  ];
  
  // TimelineAndRisks.js
  
  const Timeline = () => {
    const [selectedRisk, setSelectedRisk] = useState(null);
  
    const [currentMilestoneId] = useState(3);
    
    
    // Function to handle risk click
    const handleRiskClick = (risk) => {
      setSelectedRisk(risk);
    };
  
    // Function to calculate the progress width based on current milestone ID
    const calculateProgressWidth = (currentId, total) => {
      const milestoneIndex = timelineData.findIndex(milestone => milestone.id === currentId);
      return `${(milestoneIndex / (total - 1)) * 100}%`;
    };
  
    // Function to calculate the left position of each milestone
  const calculateLeftPosition = (index, total) => {
    return `${(index / (total - 1)) * 100}%`;
  };
  
  
    return (
      <div>
        <div className="section" id="timeline">
          <h2 className="subtitle">Timeline</h2>
          <div className="timeline-container">
            <div 
              className="timeline-progress" 
              style={{ width: calculateProgressWidth(currentMilestoneId, timelineData.length) }}
            ></div>
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className="milestone"
                style={{ left: calculateLeftPosition(index, timelineData.length) }}
              >
                <div className="milestone-label">{item.milestone}</div>
                <div className="milestone-marker"></div>
              </div>
            ))}
          </div>
        </div>
        {selectedRisk && (
          <Modal risk={selectedRisk} onClose={() => setSelectedRisk(null)} />
        )}
      </div>
    );
  };

  export default Timeline;