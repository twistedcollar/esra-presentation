import React, { useState } from 'react';
import './BudgetCalculator.css';

const BudgetCalculator = () => {
    const [numberOfHangers, setNumberOfHangers] = useState(1);
    const [numberOfYears, setNumberOfYears] = useState(1);
    const [showBreakdown, setShowBreakdown] = useState(false);

    // Prices per unit
    const prices = {
        hotspotDevice: 150,
        tablet: 200,
        mount: 500,
        supply: 50,
        software: 250,
        wifiService: 150
    };

    // Startup cost calculations
    const startupCosts = {
        hotspotDevice: 4 * prices.hotspotDevice,
        tablet: 15 * prices.tablet,
        mount: 15 * prices.mount,
        supply: 15 * prices.supply,
    
    };

    // Monthly fees calculations
    const monthlyFees = {
        wifiService: 2 * prices.wifiService, // Per hanger
        software: prices.software // Flat fee, per month
    };

    const calculateStartupCost = () => {
        return numberOfHangers * (startupCosts.hotspotDevice + startupCosts.tablet + startupCosts.mount + startupCosts.supply);
    };

    const calculateTotalCost = () => {
        const startupCost = calculateStartupCost();
        const monthlyCost = numberOfHangers * monthlyFees.wifiService  + monthlyFees.software;
        return startupCost + monthlyCost * 12 * numberOfYears;
    };

    const handleBreakdownToggle = () => {
        setShowBreakdown(!showBreakdown);
    };

    return (
        <div className="budget-calculator">
            <div className="savings-calculator-title">
                <h3>Cost Calculator</h3>
                <h4>Adjust the fields to see the estimated costs for using the app.</h4>
            </div>
            <div className="input-group">
                <label htmlFor="numberOfHangers">Number of Hangers:</label>
                <select
                    id="numberOfHangers"
                    value={numberOfHangers}
                    onChange={(e) => setNumberOfHangers(parseInt(e.target.value))}
                >
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                        <option key={number} value={number}>{number}</option>
                    ))}
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="numberOfYears">Number of Years:</label>
                <select
                    id="numberOfYears"
                    value={numberOfYears}
                    onChange={(e) => setNumberOfYears(parseInt(e.target.value))}
                >
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                        <option key={number} value={number}>{number}</option>
                    ))}
                </select>
            </div>
            <div className="result">
                <p>Startup Cost: ${calculateStartupCost().toLocaleString()}</p>
                <p>Total Cost for {numberOfYears} years: ${calculateTotalCost().toLocaleString()}</p>
            </div>

            {/* Breakdown Button */}
            <button onClick={handleBreakdownToggle}>
                {showBreakdown ? 'Hide Breakdown' : 'Show Breakdown'}
            </button>

            {/* Cost Breakdown */}
            {showBreakdown && (
                <div className="breakdown">
                    <h3>Cost Breakdown Per Hanger:</h3>
                    <p>Hotspot Devices (startup): ${startupCosts.hotspotDevice.toLocaleString()}</p>
                    <p>Tablets (startup): ${startupCosts.tablet.toLocaleString()}</p>
                    <p>Mounts/Stands (startup): ${startupCosts.mount.toLocaleString()}</p>
                    <p>Supplies (startup): ${startupCosts.supply.toLocaleString()}</p>
                    <p>Software (monthly): ${monthlyFees.software.toLocaleString()}</p>
                    <p>WiFi Service (monthly): ${monthlyFees.wifiService.toLocaleString()}</p>
                    <p>Monthly Service for {numberOfYears} years: ${(monthlyFees.wifiService + monthlyFees.software * 12 * numberOfYears * numberOfHangers).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
};

export default BudgetCalculator;

