import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    width: 600,
    margin: 200,
    textAlign: 'center',
  },
}));

const validationSchema = Yup.object({
  name: Yup.string('Enter a name').required('Name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
  confirmPassword: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
});

const Form = (props) => {
  const classes = useStyles();
  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <div className={classes.root}>
      <form
        onSubmit={() => {
          alert('submitted');
        }}
      >
        <TextField
          id="name"
          name="name"
          helperText={touched.name ? errors.name : ''}
          error={touched.name && Boolean(errors.name)}
          label="Name"
          value={name}
          onChange={change.bind(null, 'name')}
        />
        <TextField
          id="email"
          name="email"
          helperText={touched.email ? errors.email : ''}
          error={touched.email && Boolean(errors.email)}
          label="Email"
          value={email}
          onChange={change.bind(null, 'email')}
        />
        <TextField
          id="password"
          name="password"
          helperText={touched.password ? errors.password : ''}
          error={touched.password && Boolean(errors.password)}
          label="Password"
          type="password"
          value={password}
          onChange={change.bind(null, 'password')}
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          helperText={touched.confirmPassword ? errors.confirmPassword : ''}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={change.bind(null, 'confirmPassword')}
        />
        <Button
          type="submit"
          fullWidth
          variant="raised"
          color="primary"
          disabled={!isValid}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export const FormValidator = () => {
  const values = { name: '', email: '', confirmPassword: '', password: '' };
  return (
    <Formik
      render={(props) => <Form {...props} />}
      initialValues={values}
      validationSchema={validationSchema}
    />
  );
};
