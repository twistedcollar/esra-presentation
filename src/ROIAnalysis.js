import React, { useState, useEffect } from 'react';
import './ROIAnalysis.css';

function ROIAnalysis() {
  // States for inputs
  const [mechanics, setMechanics] = useState(200); // Default value based on the screenshot
  const [averageTasks, setAverageTasks] = useState(500); // Default value
  const [timeSavedPerTask, setTimeSavedPerTask] = useState(18); // Default value in minutes
  const [yearlySavings, setYearlySavings] = useState(0);

  // Mechanic cost is fixed
  const mechanicCostPerHour = 78;

  // Function to calculate yearly savings
  useEffect(() => {
    // Calculate tasks per worker (TPW)
    const tasksPerWorker = averageTasks / mechanics;
    // Calculate weekly minutes saved
    const weeklyMinutesSaved = tasksPerWorker * timeSavedPerTask * mechanics;
    // Convert minutes to hours
    const weeklyHoursSaved = weeklyMinutesSaved / 60;
    // Calculate worker savings per week (WSPW)
    const workerSavingsPerWeek = weeklyHoursSaved * mechanicCostPerHour;
    // Calculate total yearly savings
    const totalYearlySavings = workerSavingsPerWeek * 52; // Assuming 52 working weeks per year

    setYearlySavings(totalYearlySavings);
  }, [mechanics, averageTasks, timeSavedPerTask]);

  return (
    <div id="roi-analysis">
        <div className="savings-calculator-title">
          <h3>Savings Calculator</h3>
          <h4>Adjust the fields to see the expected savings for using the app.</h4>
        </div>
      <div className="roi-form">
        <label htmlFor="mechanics">
          Number of Mechanics:
        </label>
        <input
          id="mechanics"
          type="number"
          value={mechanics}
          onChange={(e) => setMechanics(Number(e.target.value))}
        />
  
        <label htmlFor="averageTasks">
          Average Weekly Tasks:
        </label>
        <input
          id="averageTasks"
          type="number"
          value={averageTasks}
          onChange={(e) => setAverageTasks(Number(e.target.value))}
        />
  
        <label htmlFor="timeSavedPerTask">
          Time Saved per Task (minutes):
        </label>
        <input
          id="timeSavedPerTask"
          type="number"
          value={timeSavedPerTask}
          onChange={(e) => setTimeSavedPerTask(Number(e.target.value))}
        />
      </div>
      <p>Yearly Savings: ${yearlySavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
    </div>
  );
  
}

export default ROIAnalysis;