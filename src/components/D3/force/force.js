import React, { useRef, useEffect, useState } from 'react';
import { data as defaultData } from './data';
import * as d3 from 'd3';
import './force.css';

export const SimpleForceGraph = ({
  canvasWidth = 700,
  canvasHeight = 500,
  data = defaultData,
}) => {
  const nodeMapRef = useRef(null); // Create a ref
  const { links, nodes } = data; // Destructuring
  const getNodeColor = (node) => (node.level === 1 ? 'red' : 'gray');

  useEffect(() => {
    if (data && nodeMapRef.current) {
      // Create SVG element

      const svg = d3.select(nodeMapRef.current);

      // Select height and
      svg.attr('width', canvasWidth).attr('height', canvasHeight);

      // simulation setup with all forces
      const linkForce = d3
        .forceLink()
        .id(function (link) {
          return link.id;
        })
        .strength(function (link) {
          return link.strength;
        });

      const simulation = d3
        .forceSimulation()
        .force('link', linkForce)
        .force('charge', d3.forceManyBody().strength(-120))
        .force('center', d3.forceCenter(canvasWidth / 2, canvasHeight / 2));

      const linkElements = svg
        .append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke-width', 1)
        .attr('stroke', 'rgba(50, 50, 50, 0.2)');

      const nodeElements = svg
        .append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', 10)
        .attr('fill', getNodeColor);

      const textElements = svg
        .append('g')
        .attr('class', 'texts')
        .selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .text(function (node) {
          return node.label;
        })
        .attr('font-size', 15)
        .attr('dx', 15)
        .attr('dy', 4);

      simulation.nodes(nodes).on('tick', () => {
        nodeElements
          .attr('cx', function (node) {
            return node.x;
          })
          .attr('cy', function (node) {
            return node.y;
          });
        textElements
          .attr('x', function (node) {
            return node.x;
          })
          .attr('y', function (node) {
            return node.y;
          });
        linkElements
          .attr('x1', function (link) {
            return link.source.x;
          })
          .attr('y1', function (link) {
            return link.source.y;
          })
          .attr('x2', function (link) {
            return link.target.x;
          })
          .attr('y2', function (link) {
            return link.target.y;
          });
      });

      simulation.force('link').links(links);
    }
  }, []);

  return <svg ref={nodeMapRef}></svg>;
};
