import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme) => ({
  card3: {
    overflow: 'hidden',
  },
  largeIcon: {
    fontSize: '75px',
  },
  button: {
    float: 'right',
  },
}));

export const CardHeader3 = ({ cardNo }) => {
  const classes = useStyles();

  return (
    <div className={classes.card3}>
      <Grid container spacing={1}>
        <Grid item>
          {cardNo === 1 ? (
            <FavoriteIcon className={classes.largeIcon} color="secondary" />
          ) : (
            <NoteAddIcon className={classes.largeIcon} htmlColor="green" />
          )}
        </Grid>
        <Grid xs item>
          <Typography variant="subtitle1" gutterBottom>
            <strong>
              {cardNo === 1
                ? 'The support you need when you need it'
                : 'Tax documents and other reports'}
            </strong>
          </Typography>
        </Grid>
        <Grid xs={1} item>
          <IconButton className={classes.button} aria-label="list">
            <MoreVertIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
