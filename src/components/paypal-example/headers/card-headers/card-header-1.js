import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  card1: {
    flexGrow: 1,
    background: '#A0FFFF',
    padding: '20px',
    overflow: 'hidden',
  },
}));

export const CardHeader1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.card1}>
      <Grid container>
        <Grid xs={2} item>
          <Typography variant="subtitle2">Money</Typography>
        </Grid>
        <Grid xs item>
          <Typography variant="subtitle2" align="right">
            <Link
              component="button"
              variant="subtitle2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              <span>More</span>
              <span>
                <ArrowForwardIosIcon fontSize="inherit" />
              </span>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
