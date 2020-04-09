import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { LinkButton2 } from '../../buttons';

const useStyles = makeStyles((theme) => ({
  cardFooter2: {
    // flexGrow: 1,
    background: '#A0FFFF',
    padding: '0px',
    overflow: 'hidden',
  },
}));

export const CardFooter2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardFooter2}>
      <Grid container>
        <LinkButton2 />
      </Grid>
    </div>
  );
};
