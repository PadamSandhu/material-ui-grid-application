import React, { useRef, useEffect, useState } from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import { data as defaultData } from './data';

import * as d3 from 'd3';
import './force-react.css';

export const ForceReact = ({
  canvasWidth = 700,
  canvasHeight = 500,
  data = defaultData,
}) => {
  const nodeMapRef = useRef(null); // Create a ref
  const { links, nodes } = data; // Destructuring
  const [nodesState, setNodesState] = useState([...data.nodes]);
  const [linksState, setLinksState] = useState([...data.links]);

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

  const simulationRef = useRef(simulation); // Create a ref

  useEffect(() => {
    if (data && nodeMapRef.current) {
      simulationRef.current.nodes(nodes).on('tick', () => {
        setNodesState([...nodes]);
        setLinksState([...links]);
      });

      simulationRef.current.force('link').links(links);
    }
  }, []);

  useEffect(() => {
    const dragDrop = d3
      .drag()
      .on('start', function (node) {
        node.fx = node.x;
        node.fy = node.y;
      })
      .on('drag', function (node) {
        simulationRef.current.alphaTarget(0.7).restart();
        node.fx = d3.event.x;
        node.fy = d3.event.y;
      })
      .on('end', function (node) {
        if (!d3.event.active) {
          simulationRef.current.alphaTarget(0);
        }
        node.fx = null;
        node.fy = null;
      });
    d3.select('#react-graph')
      .selectAll('.React-Force-circle')
      .data(nodesState)
      .call(dragDrop);
  });

  const nodeElement = nodesState.map(
    (node, id) =>
      node.x && (
        <g className="React-Force-chart-node" key={id}>
          {/* <circle
            className="React-Force-circle"
            r={10}
            cx={node.x}
            cy={node.y}
          /> */}
          <AppleIcon
            className="React-Force-circle"
            node
            width={20}
            viewBox={'0 0 24 ' + canvasWidth}
            x={node.x - 10}
            y={node.y - 10}
            color="secondary"
          />
          <text fontSize={15} x={node.x + 12} y={node.y + 5}>
            {node.label}
          </text>
        </g>
      )
  );

  const nodeLinks = linksState.map(
    (link, id) =>
      link.source &&
      link.source.x && (
        <line
          className="link"
          key={id}
          strokeWidth={1}
          x1={link.source.x}
          x2={link.target.x}
          y1={link.source.y}
          y2={link.target.y}
        />
      )
  );

  return (
    <svg
      id="react-graph"
      height={canvasHeight}
      width={canvasWidth}
      ref={nodeMapRef}
    >
      <g>
        {nodeElement}
        {nodeLinks}
      </g>
    </svg>
  );
};
