import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { RoundButton } from '../../buttons';

const useStyles = makeStyles((theme) => ({
  card1: {
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
