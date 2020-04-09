import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  card2: {
    flexGrow: 1,
    background: '#A0FFBB',
    padding: '0px',
    overflow: 'hidden',
  },
  largeIcon: {
    fontSize: '75px',
  },
}));

export const CardHeader2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.card2}>
      <Grid container spacing={1}>
        <Grid item>
          <AccountCircleIcon className={classes.largeIcon} color="primary" />
        </Grid>
        <Grid xs item>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Get paid fast</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Start an invoice in seconds
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
