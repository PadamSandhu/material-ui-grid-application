import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import { CardHeader1, CardHeader2, CardHeader3, CardHeader4 } from './headers';
import { CardFooter1 } from './footers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: '350px',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px',
  },
}));

export const VerticalCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* <CardHeader1 /> */}
        <CardHeader2 />
        {/* <CardHeader3 />
        <CardHeader4 /> */}
        <CardFooter1 />
      </Paper>
    </div>
  );
};
