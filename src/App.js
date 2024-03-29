import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import ROIAnalysis from './ROIAnalysis';
import { BudgetData, getTotalFunding } from './ChartData';
import BudgetCalculator from './BudgetCalculator';


import Timeline from './Timeline';
import AppFeatures from './AppFeatures';
import RisksSection from './Risks';

const chartOptions = {
  plugins: {
    legend: {
      labels: {
        color: 'white', // White color for legend labels
        font: {
          size: 13 // Set the font size here
        }
      }
    },
    tooltip: {
      bodyFont: {
        size: 14 // Set the font size for tooltip items here
      },
      titleFont: {
        size: 14 // Set the font size for tooltip titles here
      }
    }
  }
};

const totalFunding = getTotalFunding(BudgetData.datasets[0].data);


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
            <h1 className="title">Project ESRA</h1>
            <p className="subheadline">
              Step into the future of aviation maintenance with Project ESRA(Enhanced Service for Reliable Assistance), an innovative digital QA call system designed specifically for the aerospace industry.
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
            Project ESRA streamlines communication between aircraft mechanics and QA representatives. Specifically designed to reduce downtime, walking time, and increase productivity. Its user-friendly interface ensures straightforward task handling, enabling teams to focus on keeping aircraft flying safely.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="features">
          <h2 className="subtitle">App Features</h2>
          <p className="content">
            Click on the feature card to display the description.
          </p>
          <AppFeatures />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="budget-funding">
          <h2 className="subtitle">Budget/Funding</h2>
          <p className="content">Overview of project budget and funding sources:</p>
          <div>
            <Pie data={BudgetData} options={chartOptions} />
            <div className="total-funding">
              <h3>Test Product Funding: ${totalFunding.toLocaleString()}</h3>
            </div>
          
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="roi-analysis">
          <h2 className="subtitle">ROI Analysis</h2>
          
          <ROIAnalysis /> 
          <BudgetCalculator />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="risks">
          <h2 className="subtitle">Risks</h2>
          <p className="content">
            Project ESRA's risk assessment identifies potential challenges.
          </p>
          <RisksSection />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="section" id="timeline">
          <h2 className="subtitle">Timeline</h2>
          <p className="content">
            Project ESRA's timeline outlines key milestones.
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