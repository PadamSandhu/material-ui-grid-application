import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { VerticalCard } from './verticalCard';
import { HorizonatalCard } from './horizontalCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#E0FFFF',
    padding: '20px', // One possible fix for the spacing props is to have padding on partent equal or more than child's padding. (This will change based on Parent Grid width)
    overflow: 'hidden', /// This is hacky to account for childs extra padding applied by material UI spacing props. (Another easy fix)
  },
}));

export const CardPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Grid container spacing={7} direction="column">
            {[...Array(2)].map((x, index) => (
              <Grid key={index + 1} item>
                <VerticalCard cardNo={index + 1} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={4} direction="column">
            {[...Array(3)].map((x, index) => (
              <Grid key={index + 1} item>
                <HorizonatalCard cardNo={index + 1} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
