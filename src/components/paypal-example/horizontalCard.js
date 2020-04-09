import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { CardHeader1, CardHeader2, CardHeader3, CardHeader4 } from './headers';
import { CardFooter2 } from './footers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: '200px',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px',
  },
}));

export const HorizonatalCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* <CardHeader1 />
        <CardHeader2 /> */}
        <CardHeader3 />
        {/* <CardHeader4 /> */}
        <CardFooter2 />
      </Paper>
    </div>
  );
};
