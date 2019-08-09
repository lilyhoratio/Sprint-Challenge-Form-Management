import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

// class FormComp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

const FormComp = props => {
  // render() {
  console.log(props.values);
  console.log(props.errors);

  const [users, setUsers] = useState([]);
  console.log("USERS", users);

  useEffect(() => {
    if (props.status) {
      setUsers([...users, props.status]);
    }
  }, [props.status, users]);

  return (
    <Form>
      {props.touched.username && props.errors.username && (
        <p className="error">{props.errors.username}</p>
      )}
      <Field type="text" name="username" placeholder="username" />
      {props.touched.password && props.errors.password && (
        <p className="error">{props.errors.password}</p>
      )}
      <Field type="password" name="password" placeholder="password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required.")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    // console.log("request");
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        console.log("post response", res.data);
        // setStatus(res.data);
        resetForm();
      })
      .catch(error => console.error(error));
  }
})(FormComp);

export default FormikForm;
