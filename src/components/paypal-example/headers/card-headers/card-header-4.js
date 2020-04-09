import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  card4: {
    overflow: 'hidden',
  },
  button: {
    float: 'right',
  },
}));

export const CardHeader4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.card4}>
      <Grid container spacing={1}>
        <Grid xs item>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Tell us what you think</strong>
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
