import React from "react";
import "./SignUp.css";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { Link } from "react-router-dom";


  const initialValues = {
    email: "",
    Password: "",
    rememberme: ""
  };
  const onSubmit = (values) => {};

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    Password: Yup.string().required("Required!"),
    rememberme:Yup.string().required("Required!")
  });

  function SignUp() {
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
    return (
      <React.Fragment>
        <div class="main-div">
          <div class="div-1">
            <div class="Path-flex">
              
              {/* <Link to="#">
                <h3>Login</h3>
              </Link>
              <Link to="register.html"> 
                <h3>Register</h3>
              </Link> */}
            </div>
            <form class="Login" onSubmit={formik.handleSubmit}>
              <input type="text" id="email" placeholder="email"  {...formik.getFieldProps("email")}
            />{" "}
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
              <input type="password" id="Password" placeholder="password"  {...formik.getFieldProps("Password")}
            />{" "}
            {formik.touched.Password && formik.errors.Password ? (
              <div className="error">{formik.errors.Password}</div>
            ) : null}
              <div class="group">
                <div class="check">
                  <input type="checkbox" name="rememberme" id="rememberme"  {...formik.getFieldProps("email")}
            />{" "}
            {formik.touched.rememberme && formik.errors.rememberme ? (
              <div className="error">{formik.errors.rememberme}</div>
            ) : null}
                  <label for="rememberme">Remember Me</label>
                </div>
                {/* <Link to="#">Forgot Password?</Link> */}
              </div>
              <input type="submit" id="Login" value="Login" />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }


export default SignUp;
