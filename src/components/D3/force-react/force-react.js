import React, { useRef, useEffect, useState } from 'react';
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

  useEffect(() => {
    // Simple bar graph.
    if (data && nodeMapRef.current) {
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

      simulation.nodes(nodes).on('tick', () => {
        setNodesState([...nodes]);
        setLinksState([...links]);
      });

      simulation.tick(300);
      simulation.force('link').links(links);
    }
  }, []);

  const nodeElement = nodesState.map(
    (node, id) =>
      node.x && (
        <g className="node" key={id}>
          <circle r={10} cx={node.x} cy={node.y} />
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
    <svg height={canvasHeight} width={canvasWidth} ref={nodeMapRef}>
      <g>
        {nodeElement}
        {nodeLinks}
      </g>
    </svg>
  );
};
