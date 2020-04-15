import React, { useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { ForceReact } from '../../components/D3';
import { cloneDeep } from 'lodash';

export const D3Graph = ({ chartData, fetchChartData }) => {
  useEffect(() => {
    fetchChartData();
  }, []);

  const width = 700;
  const height = 500;

  return (
    <div
      style={{
        width: '50%',
        margin: '0 auto',
        marginTop: '50px',
      }}
    >
      {!chartData.fetching && chartData.fetched ? (
        <ForceReact
          canvasWidth={width}
          canvasHeight={height}
          data={cloneDeep(chartData.chartData)}
        />
      ) : (
        <Skeleton variant="rect" width={700} height={500} />
      )}
    </div>
  );
};
