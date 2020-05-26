import React from 'react';
import { Formik } from 'formik';

export class Basic extends React.Component {
  constructor(props) {
    super(props);
  }

  validate01 = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  validate02 = (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    return sleep(5000).then(() => {
      let errors = {};
      if (['admin', 'null', 'god'].includes(values.username)) {
        errors.username = 'Nice try';
      }
      if (Object.keys(errors).length) {
        throw errors;
      }
    });
  };

  clickSubmit = (errors) => {
    console.log(errors);
  };

  submit = (values, actions) => {
    console.log(actions);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 400);
  };

  testSetFieldValue = (props) => {
    props.setFieldValue('email', '12334');
  };

  testValues = (props, values, errors, touched, isSubmitting) => {
    console.log('props', props);
    console.log('values', values);
    console.log('errors', errors);
    console.log('touched', touched);
    console.log('isSubmitting', isSubmitting);
  };

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validate={this.validate01}
        // validate={this.validate02}
        onSubmit={this.submit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, ...props }) => (
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
            <p>{errors.username && touched.username && errors.username}</p>
            <input type="text" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            <br />
            <p>{errors.email && touched.email && errors.email}</p>
            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            <br />
            <p>{errors.password && touched.password && errors.password}</p>
            <button type="submit" disabled={isSubmitting} onClick={() => this.clickSubmit(errors)}>
              Submit
            </button>
            <button onClick={() => this.testSetFieldValue(props)}>setFieldValue</button>
            <button onClick={() => this.testValues(props, values, errors, touched, isSubmitting)}>values</button>
          </form>
        )}
      </Formik>
    );
  }
}

// isValidating
// isSubmitting
