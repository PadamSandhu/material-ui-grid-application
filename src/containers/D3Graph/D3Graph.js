import React, { useEffect } from 'react';

export const D3Graph = ({ chartData, fetchChartData }) => {
  useEffect(() => {
    fetchChartData();
  }, []);

  return <div>Hello</div>;
};
