// Plotly Visualization
const plotlyData = [
    { x: ['A', 'B', 'C'], y: [10, 20, 15], type: 'bar', marker: { color: '#93c5fd' } }
];
Plotly.newPlot('plotly-chart', plotlyData);

// D3.js Visualization
const svg = d3.select("#d3-chart");
svg.append("circle")
   .attr("cx", 200)
   .attr("cy", 200)
   .attr("r", 50)
   .attr("fill", "orange");
