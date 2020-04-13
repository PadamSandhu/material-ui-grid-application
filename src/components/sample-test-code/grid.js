import React from 'react';
import Grid from '@material-ui/core/Grid';
import HorizontalCard1 from './horizontal-card-1';
import SimpleCard from './simple-card';
import ComplexCard from './complexCard';

export const AppGrid = () => {
  return (
    <div className="app-grid">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={10}
      >
        <Grid item>
          <HorizontalCard1 />
        </Grid>
        <Grid
          item
          style={{
            alignSelf: 'flex-end',
          }}
        >
          <SimpleCard />
        </Grid>
      </Grid>
      <ComplexCard />
    </div>
  );
};
