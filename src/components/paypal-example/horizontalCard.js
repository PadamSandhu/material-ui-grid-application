import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { CardHeader3, CardHeader4 } from './headers';
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

export const HorizonatalCard = ({ cardNo = 1 }) => {
  const classes = useStyles();
  let RenderContent = '';

  switch (cardNo) {
    case 1:
      RenderContent = (
        <>
          <CardHeader3 cardNo={cardNo} />
          <CardFooter2>Learn More</CardFooter2>
        </>
      );
      break;

    case 2:
      RenderContent = (
        <>
          <CardHeader3 cardNo={cardNo} />
          <CardFooter2>View all reports</CardFooter2>
        </>
      );
      break;

    case 3:
      RenderContent = (
        <>
          <CardHeader4 cardNo={cardNo} />
          <CardFooter2>Provide Feedback</CardFooter2>
        </>
      );
      break;

    default:
      RenderContent = (
        <>
          <CardHeader3 cardNo={cardNo} />
          <CardFooter2>Lern More</CardFooter2>
        </>
      );
      break;
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {RenderContent}
        {/* <CardHeader1 />
        <CardHeader2 /> */}
        {/* <CardHeader3 cardNo={cardNo} /> */}
        {/* <CardHeader4 /> */}
        {/* <CardFooter2 /> */}
      </Paper>
    </div>
  );
};
