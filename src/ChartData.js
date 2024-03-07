// ChartData.js
export const getTotalFunding = (data) => {
  return data.reduce((acc, value) => acc + value, 0);
};

export const BudgetData = {
    labels: ['Tablets', 'Hotspot Devices', 'WiFi Service', 'Mounts/Stands', 'Software', 'Supplies'],
    datasets: [
      {
        label: 'Budget Allocation',
        data: [200*4, (150*4)*2 , 150*2, 500*4, 250*2, 50*3 ], // Example data for Budget Allocation
        backgroundColor: [
          'rgba(69, 162, 71, 0.8)', // Adjusted green for better contrast
          'rgba(65, 105, 225, 0.8)', // Royal blue for a brighter hue
          'rgba(30, 144, 255, 0.8)', // Dodger blue, lighter than the original medium blue
          'rgba(106, 90, 205, 0.8)', // Slate blue, for a touch of purple without being too bright
          'rgba(0, 191, 255, 0.8)', // Deep sky blue, vibrant and distinct
          'rgba(72, 61, 139, 0.8)' // Dark slate blue, still within the theme but more distinct
        ],
        
        borderColor: [
          'rgba(69, 162, 71, 1)', // Solid adjusted green
          'rgba(65, 105, 225, 1)', // Solid royal blue
          'rgba(30, 144, 255, 1)', // Solid dodger blue
          'rgba(106, 90, 205, 1)', // Solid slate blue
          'rgba(0, 191, 255, 1)', // Solid deep sky blue
          'rgba(72, 61, 139, 1)' // Solid dark slate blue
        ],
        borderWidth: 1,
      },
    ],
  };