import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { CardHeader1 } from './headers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: '200px',
    color: theme.palette.text.secondary,
  },
}));

export const HorizonatalCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <CardHeader1 />
      </Paper>
    </div>
  );
};
