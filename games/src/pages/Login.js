import React from "react";
import { useFormik } from "formik";
import Header from "../components/Header";
// import Image from "../components/Image";

const Login = () => {
  const initialValues = {
    // name: "",
    phoneNumber: "",
    password: "",
  };
  const onSubmit = (value) => {
    console.log("all values", value);
  };
  const validate = (value) => {
    let errors = {};

    if (!value.phoneNumber) {
      errors.phoneNumber = " phoneNumber is required";
    }
    if (!value.password) {
      errors.password = " chanel is  required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("Dfdfdfd", formik.touched);

  return (
    <div className="App ">
      <Header />
      {/* <Image /> */}
      <form onSubmit={formik.handleSubmit}>
        <div className="loginPage">
          <div>
            <label htmlFor="email"> PhoneNumber: </label>
          </div>
          <input
            // type="tel"
            type="text"
            pattern="[0-9]*"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          ></input>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
        <div className="loginPage">
          <div>
            {" "}
            <label htmlFor="chanel"> Password </label>
          </div>

          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
