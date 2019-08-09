import React from "react";
import { Form, Field, withFormik } from "formik";

class FormComp extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: []
  //   };
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prev props:", prevProps)
  //   console.log("current props:", this.state.props)
  // }

  render() {
    return (
      <Form>
        <Field type="text" name="username" placeholder="username" />
        <Field type="password" name="password" placeholder="password" />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

const FormikForm = withFormik({})(FormComp);

export default FormikForm;
