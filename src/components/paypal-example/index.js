import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { VerticalCard } from './verticalCard';
import { HorizonatalCard } from './horizontalCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#E0FFFF',
    // padding: '24px',
    overflow: 'hidden', /// This is hacky to account for childs extra padding applied by material UI spacing props.
  },
}));

export const CardPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Grid container spacing={10} direction="column">
            {[...Array(2)].map((x) => (
              <Grid item>
                <VerticalCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={10} direction="column">
            {[...Array(3)].map((x) => (
              <Grid item>
                <HorizonatalCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
