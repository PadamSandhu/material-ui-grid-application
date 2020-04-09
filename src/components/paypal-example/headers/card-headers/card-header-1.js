import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { LinkButton } from '../../buttons';

const useStyles = makeStyles((theme) => ({
  card1: {
    overflow: 'hidden',
  },
}));

export const CardHeader1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.card1}>
      <Grid container spacing={2}>
        <Grid
          style={{
            paddingTop: '10px',
          }}
          item
        >
          <Typography variant="subtitle2">
            <strong>Money</strong>
          </Typography>
        </Grid>
        <Grid xs item>
          <LinkButton />
        </Grid>
      </Grid>
    </div>
  );
};
