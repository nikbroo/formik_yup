import "./App.css";
import { useFormik, Formik, Form, Field } from "formik";
import { signupValidation } from "./signupValidation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
function App() {
  return (
    <div className="App">
      <Formik initialValues={initialValues} validationSchema={signupValidation}>
        {({ errors }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <br />
            <Field type="text" name="name" />
            <br />
            {errors.name && <small>{errors.name}</small>}
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <Field type="email" name="email" />
            <br />
            {errors.email && <small>{errors.email}</small>}
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <Field type="password" name="password" />
            <br />
            {errors.password && <small>{errors.password}</small>}
            <br />
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <Field type="password" name="cpassword" />
            <br />
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
