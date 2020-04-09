import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { LinkButton2 } from '../../buttons';

const useStyles = makeStyles((theme) => ({
  cardFooter2: {
    overflow: 'hidden',
  },
}));

export const CardFooter2 = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardFooter2}>
      <Grid container>
        <LinkButton2 text={children} />
      </Grid>
    </div>
  );
};
