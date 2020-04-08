import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: '200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const HorizonatalCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>Content for Card Goes here</Paper>
    </div>
  );
};
