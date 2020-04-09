import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { RoundButton } from '../../buttons';

const useStyles = makeStyles((theme) => ({
  card1: {
    flexGrow: 1,
    background: '#A0FFFF',
    padding: '0px',
    overflow: 'hidden',
  },
}));

export const CardFooter1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.card1}>
      <Grid container justify="center">
        <RoundButton />
      </Grid>
    </div>
  );
};
