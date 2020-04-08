import React from 'react';
import Grid from '@material-ui/core/Grid';
import HorizonatalCard1 from './horizontal-card-1';
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
          <HorizonatalCard1 />
        </Grid>
        <Grid
          item
          style={{
            'align-self': 'flex-end',
          }}
        >
          <SimpleCard />
        </Grid>
      </Grid>
      {/* <Grid container>
        <Grid item>
          <HorizonatalCard1 />
        </Grid>
        <Grid item>
          <SimpleCard />
        </Grid>
        <Grid item>
          <SimpleCard />
        </Grid>
      </Grid> */}
      <ComplexCard />
    </div>
  );
};
