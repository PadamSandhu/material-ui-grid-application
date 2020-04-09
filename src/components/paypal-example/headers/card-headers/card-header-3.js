import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  card3: {
    flexGrow: 1,
    background: 'Pink',
    padding: '5px',
    overflow: 'hidden',
  },
  largeIcon: {
    fontSize: '75px',
  },
  button: {
    float: 'right',
  },
}));

export const CardHeader3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.card3}>
      <Grid container spacing={1}>
        <Grid item>
          <AccountCircleIcon className={classes.largeIcon} color="primary" />
        </Grid>
        <Grid xs item>
          <Typography variant="subtitle1" gutterBottom>
            <strong>The support you need when you need it</strong>
          </Typography>
        </Grid>
        <Grid xs={1} item>
          <IconButton className={classes.button} aria-label="list">
            <MoreVertIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
