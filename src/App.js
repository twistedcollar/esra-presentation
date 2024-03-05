import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import ROIAnalysis from './ROIAnalysis';
import { BudgetData } from './ChartData';
import Timeline from './Timeline';
import AppFeatures from './AppFeatures';


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
        
        <div className="section" id="features">
          <h2 className="subtitle">App Features</h2>
          <AppFeatures />
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
          <Timeline />
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