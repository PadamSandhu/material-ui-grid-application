import React from 'react';
import Link from '@material-ui/core/Link';

export const LinkButton2 = ({ text = '' }) => {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      <strong>{text}</strong>
    </Link>
  );
};
