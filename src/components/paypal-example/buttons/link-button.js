import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'capitalize',
    float: 'right',
  },
}));

export const LinkButton = () => {
  const classes = useStyles();
  return (
    <Button
      size="small"
      className={classes.button}
      endIcon={<ArrowForwardIosIcon fontSize="inherit" />}
    >
      Send
    </Button>
  );
};
