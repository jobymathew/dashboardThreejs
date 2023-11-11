// BarChart.tsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface BarChartProps {
  data: { race: string; bottas: number; zhou: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const margin = { top: 20, right: 20, bottom: 60, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const races = data?.map(entry => entry.race);
    const drivers = ['bottas', 'zhou'];

    const colorScale = d3.scaleOrdinal()
      .domain(drivers)
      .range(['red', 'white']); // Red for Bottas, white for Zhou

    const stack = d3.stack().keys(drivers);

    // redux data takes time to load hence adding && check
    const stackedData = stack(data?.map(entry => entry as any));

    const xScale = d3.scaleBand()
      .domain(races)
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(stackedData, layer => d3.max(layer, d => d[1])) || 0])
      .range([height, 0]);

    // Set grey background for the graph
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
    //   .attr('fill', 'white');
      .attr('fill', 'rgba(0, 0, 0, 0.3)')

    svg.selectAll('.bar-group')
      .data(stackedData)
      .enter().append('g')
      .attr('class', 'bar-group')
      .attr('fill', d => colorScale(d.key)) // Use color scale based on driver
      .selectAll('rect')
      .data(d => d)
      .enter().append('rect')
      .attr('x', d => xScale(d.data.race))
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth());

    // Add x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .attr('transform', 'rotate(-45)') // Rotate x-axis labels for better visibility
      .style('text-anchor', 'end');

    // Add y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));

    // Add legends at the top-left corner
    const legend = svg.selectAll('.legend')
      .data(drivers)
      .enter().append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(0,${i * 20})`);

    legend.append('rect')
      .attr('x', 0)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', d => colorScale(d));

    legend.append('text')
      .attr('x', 25)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'start')
      .style('fill', 'white') // Set black color for legend text
      .text(d => (d === 'bottas' ? 'Bottas' : 'Zhou'));
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default BarChart;
