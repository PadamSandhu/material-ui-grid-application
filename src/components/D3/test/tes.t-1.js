import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { D3Chart1 } from './d3Chart1';
import { D3Chart1SVG } from './d3Chart1-svg';

export const D3Test1 = () => {
  const data = [1, 2, 3];
  const d3Container = useRef(null); // Create a ref

  // Create a useEffect Hook
  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Bind D3 data
      const update = svg.append('g').selectAll('text').data(data);

      // Enter new D3 elements
      update
        .enter()
        .append('text')
        .attr('x', (d, i) => i * 25)
        .attr('y', 40)
        .style('font-size', 24)
        .text((d) => d);

      // Update existing D3 elements
      update.attr('x', (d, i) => i * 40).text((d) => d);

      // Remove old D3 elements
      update.exit().remove();
    }
  }, [d3Container, data]);
  return (
    <>
      <h2>Creating a SVG using D3</h2>
      <svg
        className="d3-component"
        width={400}
        height={200}
        ref={d3Container}
      />
      <h2>Creating a chart using Div/Css</h2>
      <D3Chart1 />

      <h2>Creating a chart using SVG in D3</h2>
      <D3Chart1SVG />
    </>
  );
};
