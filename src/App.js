import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import ROIAnalysis from './ROIAnalysis';
import { BudgetData } from './ChartData';

// Simple Modal Component
const Modal = ({ milestone, onClose }) => {
  if (!milestone) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{milestone.milestone}</h2>
        <p>{milestone.description}</p>
        <p>{milestone.date}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <animated.div style={animation} ref={domRef}>
      {props.children}
    </animated.div>
  );
};

// Define a template timeline and associated risks
// Define timeline data
const timelineData = [
  { milestone: 'Project Kickoff', description: 'Initiation of Project ESRA', date: 'March 2024' },
  { milestone: 'Development Phase', description: 'Building the ESRA system', date: 'April - June 2024' },
  { milestone: 'Testing and QA', description: 'Quality assurance and testing', date: 'July - August 2024' },
  { milestone: 'Deployment', description: 'Launch of Project ESRA', date: 'September 2024' },
  { milestone: 'Monitoring and Updates', description: 'Ongoing support and improvements', date: 'Ongoing' }
];

const riskData = [
  { id: 1, level: 'low', description: 'Low: Potential delays in development phase due to technical challenges.' },
  { id: 2, level: 'medium', description: 'Medium: Risk of unexpected changes in regulatory requirements impacting deployment timeline.' },
  { id: 3, level: 'high', description: 'High: Resource constraints leading to slower progress during testing and QA phase.' },
];

// TimelineAndRisks.js

const TimelineAndRisks = () => {
  const [selectedRisk, setSelectedRisk] = useState(null);

  // Function to handle risk click
  const handleRiskClick = (risk) => {
    setSelectedRisk(risk);
  };

  // Function to calculate the left position of each milestone
  const calculateLeftPosition = (index, total) => {
    return `${(index / (total - 1)) * 100}%`; // Calculate the position based on the index
  };

  return (
    <div>
      <div className="section" id="timeline">
        <h2 className="subtitle">Timeline</h2>
        <div className="timeline-container">
          <div className="timeline-progress"></div>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="milestone"
              style={{ left: calculateLeftPosition(index, timelineData.length) }}
            >
              <div className="milestone-label">{item.milestone}</div>
              <div className="milestone-marker"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="section" id="risks">
        <h2 className="subtitle">Associated Risks</h2>
        {riskData.map((risk) => (
          <div
            key={risk.id}
            className={`risk-item ${risk.level}`}
            onClick={() => handleRiskClick(risk)}
          >
            {risk.description}
          </div>
        ))}
      </div>
      {selectedRisk && (
        <Modal risk={selectedRisk} onClose={() => setSelectedRisk(null)} />
      )}
    </div>
  );
};
//<Pie data={FundingData} /> Add next to budgetdata for another chart
function App() {
  return (
    <div className="container">
      <FadeInSection>
        <div className="section hero" id="project-esra">
          <div className="hero-content">
            <h1 className="title">Introducing Project ESRA</h1>
            <p className="subheadline">
              Step into the future of aviation maintenance with Project ESRA, an innovative digital QA call system designed specifically for the aerospace industry.
            </p>
          </div>
          <div className="hero-image">
            {/* Add your optimized, responsive hero image here */}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="introduction">
          <h2 className="subtitle">Introduction</h2>
          <p className="content">
            Project ESRA streamlines communication between mechanics and remote QA specialists, reducing downtime and walking time. Its user-friendly interface ensures straightforward task handling, enabling teams to focus on keeping aircraft flying safely.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="budget-funding">
          <h2 className="subtitle">Budget/Funding</h2>
          <p className="content">Overview of project budget and funding sources:</p>
          <div>
            <Pie data={BudgetData} />
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="roi-analysis">
          <h2 className="subtitle">ROI Analysis</h2>
          <p className="content">Interactive analysis of expected Return on Investment based on operational efficiencies:</p>
          <ROIAnalysis />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="timeline-risks">
          <h2 className="subtitle">Timeline/Risks</h2>
          <p className="content">
            Project ESRA's timeline outlines key milestones, while risk assessment identifies potential challenges and mitigation strategies.
          </p>
          <TimelineAndRisks />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="next-steps">
          <h2 className="subtitle">Next Steps</h2>
          <p className="content">
            Strategic action plan following Project ESRA's initiation, focusing on resource allocation, stakeholder engagement, and milestone tracking.
          </p>
        </div>
      </FadeInSection>
      {/* Repeat for other sections */}
    </div>
  );
}

export default App;