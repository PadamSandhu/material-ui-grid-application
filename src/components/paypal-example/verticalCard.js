import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import { CardHeader1, CardHeader2 } from './headers';
import { CardFooter1 } from './footers';

export const VerticalCard = ({ cardNo = 1 }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      minHeight: cardNo === 1 ? '250px' : '350px',
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '15px',
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {cardNo === 1 ? <CardHeader1 /> : <CardHeader2 />}
        {cardNo === 2 ? <CardFooter1 /> : null}
      </Paper>
    </div>
  );
};
