import React from "react";
import { useFormik } from "formik";
import Header from "../components/Header";

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    Address: "",
  };
  const onSubmit = (value) => {
    console.log("all values", value);
  };
  const validate = (value) => {
    let errors = {};
    const passwordRegex = /(?=.*[0-9])/;
    if (!value.name) {
      errors.name = " Name is required !";
    }
    if (!value.email) {
      errors.email = " Email is required !";
    }
    if (!value.phoneNumber) {
      errors.phoneNumber = " PhoneNumber is required !";
    }
    if (!value.password) {
      errors.password = " Password is  required !";
    } else if (value.password.length < 8) {
      errors.password = "*Password must be 8 characters long.";
    } else if (!passwordRegex.test(value.password)) {
      errors.password = "*Invalid password. Must contain one number.";
    }
    if (!value.confirmPassword) {
      errors.confirmPassword = " ConfirmPassword  is  required !";
    } else if (value.password !== value.confirmPassword) {
      errors.confirmPassword = "Confirm Password in not matched";
    }
    if (!value.Address) {
      errors.Address = " Address  is  required !";
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
        {/* 
        name  */}
        <div>
          <div>
            <label htmlFor="name"> name </label>
          </div>
          <input
            // type="tel"
            type="name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        {/* 
         email */}
        <div>
          <div>
            <label htmlFor="email"> email </label>
          </div>
          <input
            // type="tel"
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        {/* phone number  */}
        <div>
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
        <div>
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

        {/*
         */}
        <div>
          <div>
            {" "}
            <label htmlFor="Confirm Password"> Confirm Password </label>
          </div>

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          ></input>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <div>
          <div>
            {" "}
            <label htmlFor="Address"> Address : </label>
          </div>

          <input
            type="textarea"
            id="Address"
            name="Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Address}
          ></input>
          {formik.touched.Address && formik.errors.Address ? (
            <div style={{ color: "red" }}>{formik.errors.Address}</div>
          ) : null}
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
