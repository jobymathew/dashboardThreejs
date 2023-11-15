import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart: React.FC<{ data: { race: string; bottas: number; zhou: number }[] }> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Set up SVG dimensions
    const margin = { top: 20, right: 20, bottom: 40, left: 50 }; // Increased bottom margin
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Set up SVG container
    const svg = d3.select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set grey background
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'rgba(0, 0, 0, 0.3)')

    // Define scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.race))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear().domain([0, 22]).range([height, 0]);

    // Define the line functions for Bottas and Zhou
    const lineBottas = d3
      .line<{ race: string; bottas: number }>()
      .x((d) => xScale(d.race) || 0)
      .y((d) => yScale(d.bottas) || 0);

    const lineZhou = d3
      .line<{ race: string; zhou: number }>()
      .x((d) => xScale(d.race) || 0)
      .y((d) => yScale(d.zhou) || 0);

    // Draw X-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text') // Increase font size and add rotation
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end')
      .style('font-size', '12px'); // Increase font size

    // Draw Y-axis
    svg.append('g').call(d3.axisLeft(yScale).ticks(20)) // Increase font size and use all values from 1 to 20
      .selectAll('text')
      .style('font-size', '12px') // Increase font size
      .attr('dx', '-0.5em') // Add space between labels and axis
      .attr('dy', '0.5em'); // Add space between labels and axis

    // Draw Bottas line
    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', lineBottas)
      .style('stroke', 'red')
      .style('fill', 'none');

    // Draw Zhou line
    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', lineZhou)
      .style('stroke', 'white')
      .style('fill', 'none');

    // Add dots on data points with increased size
    svg.selectAll('.dot-bottas')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot-bottas')
      .attr('cx', (d) => xScale(d.race) || 0)
      .attr('cy', (d) => yScale(d.bottas) || 0)
      .attr('r', 7) // Increased size
      .style('fill', 'red');

    svg.selectAll('.dot-zhou')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot-zhou')
      .attr('cx', (d) => xScale(d.race) || 0)
      .attr('cy', (d) => yScale(d.zhou) || 0)
      .attr('r', 7) // Increased size
      .style('fill', 'white');

    // Add Legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - 120},${height - 30})`);

    legend.append('rect')
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', 'red');

    legend.append('text')
      .attr('x', 15)
      .attr('y', 5)
      .text('Bottas')
      .style('font-size', '12px')
      .style('fill', 'white');

    legend.append('rect')
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', 'white')
      .attr('y', 15);

    legend.append('text')
      .attr('x', 15)
      .attr('y', 20)
      .text('Zhou')
      .style('font-size', '12px')
      .style('fill', 'white');

  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default LineChart;
