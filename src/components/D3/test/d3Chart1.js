import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

import './d3Chart1.css';

export const D3Chart1 = () => {
  const data = [...Array(20)].map((number) => Math.random() * 50); // Create Random Array
  const d3Chart1 = useRef(null); // Create a ref

  // Create a useEffect Hook
  useEffect(() => {
    // Simple bar graph.
    if (data && d3Chart1.current) {
      const element = d3.select(d3Chart1.current);

      // Bind D3 data
      const update = element.selectAll('div').data(data);

      // Enter new D3 elements
      update
        .enter()
        .append('div')
        .attr('class', (d, i) => 'bar')
        .style('height', (d) => d * 4 + 'px');
      // .text((d) => d);

      // Update existing D3 elements
      update.attr('x', (d, i) => i * 40).text((d) => d);

      // Remove old D3 elements
      update.exit().remove();
    }
  }, [d3Chart1, data]);
  return <div id="chart1" ref={d3Chart1}></div>;
};
