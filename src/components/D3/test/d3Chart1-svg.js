import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export const D3Chart1SVG = ({
  data = [...Array(20)].map((number) => Math.floor(Math.random() * 50)),
  chart_width = 800,
  chart_height = 400,
  bar_padding = 5,
}) => {
  const d3Chart1SVG = useRef(null); // Create a ref

  // Create a useEffect Hook
  useEffect(() => {
    // Simple bar graph.
    if (data && d3Chart1SVG.current) {
      // Create SVG element

      const svg = d3
        .select(d3Chart1SVG.current)
        .attr('width', chart_width)
        .attr('height', chart_height);

      // Bind D3 data
      const update = svg.selectAll('rect').data(data); // Create rectangle in SVG

      // Enter new D3 elements
      update
        .enter()
        .append('rect')
        .attr('x', (d, index) => (index * chart_width) / data.length) // Update x axes where Bar should be placed
        .attr('y', (d) => chart_height - d * 5) // To reverse
        .attr('width', chart_width / data.length - bar_padding)
        .attr('height', (data) => data * 5)
        .attr('fill', (d, i) => '#7ED26D'); // Fill with the color

      // Create Label
      svg
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text((d) => d)
        .attr(
          'x',
          (d, index) =>
            (index * chart_width) / data.length +
            (chart_width / data.length - bar_padding) / 2
        ) // Update x axes where Bar should be placed
        .attr('y', (d) => chart_height - d * 5 + 15) // To reverse
        .attr('font-size', 14)
        .attr('fill', '#FFF')
        .attr('text-anchor', 'middle');

      // Remove old D3 elements
      update.exit().remove();
    }
  }, [d3Chart1SVG, data, bar_padding, chart_height, chart_width]);
  return <svg id="chart1-SVG" ref={d3Chart1SVG}></svg>;
};
