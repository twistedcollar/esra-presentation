import React, { useState, useEffect } from 'react';
import './Timeline.css';

const timelineData = [
  { id: 1, milestone: 'Funding', description: 'Secure funding for Project ESRA and procure necessary hardware. This includes tablets, hotspots, and stands needed for the setup.', date: 'March 2024' },
  { id: 2, milestone: 'System Setup', description: 'Installation and setup of WiFi services, tablets, hotspots, and initial software setup followed by preliminary in-house testing to ensure basic functionality.', date: 'April 2024' },
  { id: 3, milestone: 'Testing & Training', description: 'Conduct pilot testing in a controlled live environment to monitor app performance and fix preliminary bugs. Begin training key staff on system usage.', date: 'April - May 2024' },
  { id: 4, milestone: 'Deployment', description: 'Commence full-scale deployment of Project ESRA, including extensive user training, and execute a complete operational test to validate system performance under typical usage scenarios.', date: 'June - September 2024' },
  { id: 5, milestone: 'Improvement', description: 'Post-deployment review of the system to identify areas for improvement. Implement iterative updates and refinements to enhance system performance and user experience.', date: 'October 2024 - ON ' }
];


const Timeline = () => {
  const [currentMilestoneId, setCurrentMilestoneId] = useState(1);
  const [labelFontSize, setLabelFontSize] = useState(14);

  const handleMilestoneClick = (id) => {
    setCurrentMilestoneId(id);
  };

  const calculateProgressWidth = (currentId, total) => {
    const milestoneIndex = timelineData.findIndex(milestone => milestone.id === currentId);
    return `${((milestoneIndex) / (total - 1)) * 100}%`;
  };

  const setLabelStyle = (index, length) => {
    let style = {
      transform: 'translateX(-50%)',
      maxWidth: '160px'
    };

    if (index === 0) {
      style.left = '0';
      style.transform = 'translateX(0%)';
    } else if (index === length - 1) {
      style.right = '0';
      style.transform = 'translateX(-100%)';
    } else {
      style.left = `${(index / (length - 1)) * 100}%`;
    }

    return style;
  };

  useEffect(() => {
    const updateLabelFontSize = () => {
      const containerWidth = document.querySelector('.timeline-container').offsetWidth - 20; // Subtract 20px for padding
      const totalLabelWidth = timelineData.length * 160; // Assuming max-width of label is 160px
      const totalSpacing = (timelineData.length - 1) * 10; // 10px spacing between labels
      const neededWidth = totalLabelWidth + totalSpacing;
      
      if (containerWidth < neededWidth) {
        // Decrease font size if neededWidth is more than containerWidth
        const scaleFactor = containerWidth / neededWidth;
        setLabelFontSize(Math.max(10, 16 * scaleFactor)); // Don't go below 10px
      } else {
        setLabelFontSize(16); // Default font size
      }
    };
    
    // Call the function to set initial font size
    updateLabelFontSize();
    
    // Add resize listener to update font size when window is resized
    window.addEventListener('resize', updateLabelFontSize);
    
    // Clean up listener when component is unmounted or rerendered
    return () => window.removeEventListener('resize', updateLabelFontSize);
  }, []); // Removed timelineData.length from the dependency array

  // Find the current milestone's details
  const currentMilestone = timelineData.find(milestone => milestone.id === currentMilestoneId);

  return (
    <div className="section" id="timeline">
      <div className="timeline-container">
        <div className="milestones">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`milestone ${item.id === currentMilestoneId ? 'current' : ''}`}
              style={setLabelStyle(index, timelineData.length)}
              onClick={() => handleMilestoneClick(item.id)} // Add click handler here
            >
              <div className="milestone-label" style={{ fontSize: `${labelFontSize}px` }}>
                {item.milestone}
              </div>
            </div>
          ))}
        </div>
        <div
          className="timeline-progress"
          style={{
            '--filled-width': calculateProgressWidth(currentMilestoneId, timelineData.length)
          }}
        ></div>
      </div>
      {/* Milestone Details Section */}
      <div className="milestone-details">
        {currentMilestone && (
          <>
            <h3>{currentMilestone.milestone}</h3>
            <p>{currentMilestone.description}</p>
            <p><strong>Date:</strong> {currentMilestone.date}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Timeline;
