import React, { useRef, useEffect, useState } from 'react';
import { data as defaultData } from './data';
import * as d3 from 'd3';
import './force.css';

export const SimpleForceGraph = ({
  canvasWidth = window.innerWidth,
  canvasHeight = window.innerHeight,
  charge = -300,
  linkDistance = 50,
  data = defaultData,
}) => {
  const nodeMapRef = useRef(null); // Create a ref
  const { links, nodes } = data; // Destructuring
  const getNodeColor = (node) => (node.level === 1 ? 'red' : 'gray');

  const simulation = d3
    .forceSimulation()
    .force('charge', d3.forceManyBody().strength(-20))
    .force('center', d3.forceCenter(canvasWidth / 2, canvasHeight / 2));

  useEffect(() => {
    // Simple bar graph.
    if (data && nodeMapRef.current) {
      // Create SVG element

      const svg = d3.select(nodeMapRef.current);

      const nodeElements = svg
        .append('g')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', 10)
        .attr('fill', getNodeColor);

      const textElements = svg
        .append('g')
        .selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .text((node) => node.label)
        .attr('font-size', 15)
        .attr('dx', 15)
        .attr('dy', 4);

      simulation.nodes(nodes).on('tick', () => {
        nodeElements.attr('cx', (node) => node.x).attr('cy', (node) => node.y);
        textElements.attr('x', (node) => node.x).attr('y', (node) => node.y);
      });
    }
  }, []);

  return <svg width={canvasWidth} height={canvasHeight} ref={nodeMapRef}></svg>;
};
