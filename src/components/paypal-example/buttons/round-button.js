import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    borderRadius: 20,
  },
}));

export const RoundButton = () => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      size="large"
      color="primary"
      className={classes.button}
    >
      Create an Invoice
    </Button>
  );
};
