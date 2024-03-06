import React, { useState, useEffect } from 'react';
import './Timeline.css';

const timelineData = [
  { id: 1, milestone: 'Project Kickoff', description: 'Initiation of Project ESRA', date: 'March 2024' },
  { id: 2, milestone: 'Development Phase', description: 'Building the ESRA system', date: 'April - June 2024' },
  { id: 3, milestone: 'Testing and QA', description: 'Quality assurance and testing', date: 'July - August 2024' },
  { id: 4, milestone: 'Hanger Deployment', description: 'Launch of Project ESRA', date: 'September 2024' },
  { id: 5, milestone: 'Multi Hanger', description: 'Ongoing support and improvements', date: 'Ongoing' }
 
];

const Timeline = () => {
  const [currentMilestoneId] = useState(3);
  const [labelFontSize, setLabelFontSize] = useState(14); 

  const calculateProgressWidth = (currentId, total) => {
    const milestoneIndex = timelineData.findIndex(milestone => milestone.id === currentId);
    return `${((milestoneIndex) / (total - 1)) * 100}%`;
  };

  const setLabelStyle = (index, length) => {
    let style = {
      transform: 'translateX(-50%)',
      maxWidth: '160px' // Ensure labels don't overflow
    };

    // Adjust label alignment for first and last milestones
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
        setLabelFontSize(Math.max(10, 14 * scaleFactor)); // Don't go below 10px
      } else {
        setLabelFontSize(14); // Default font size
      }
    };
    
    // Call the function to set initial font size
    updateLabelFontSize();
    
    // Add resize listener to update font size when window is resized
    window.addEventListener('resize', updateLabelFontSize);
    
    // Clean up listener when component is unmounted or rerendered
    return () => window.removeEventListener('resize', updateLabelFontSize);
  }, [timelineData.length]);

  return (
    <div className="section" id="timeline">
      <div className="timeline-container">
        <div className="milestones">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`milestone ${item.id === currentMilestoneId ? 'current' : ''}`}
              style={setLabelStyle(index, timelineData.length)}
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
    </div>
  );
};

export default Timeline;
