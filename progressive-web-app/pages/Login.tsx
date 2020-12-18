import React, { Component, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TokenApi } from "./api/token.api";
import LoginUser from "./api/login.api";
import { NextApiRequest } from "next";
import { parseBody } from "next/dist/next-server/server/api-utils";

function Login() {
  useEffect(() => {
    debugger;
    TokenApi.TokenUser(
      (res) => {
        debugger;
        if (res.status === "success") {
          localStorage.setItem("jti-token", res.responseObject);
          localStorage.setItem("jwt-token", res.responseObject);
        } else {
          localStorage.setItem("jti-token", "");
          localStorage.setItem("jwt-token", "");
        }
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    //return () => {};
  }, []);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        mobileNumber: "",
        otp: "",
        isMobile: true,
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
        let res = LoginUser(values);
        debugger;
        console.log(res);
      }}
    >
      {({ touched, errors, setFieldValue, values }) => (
        <Form>
          <>
            <div>
              <label>Username</label>
              <Field
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                variant="outlined"
                size="small"
                placeholder="User Name"
              ></Field>
              <label>Password</label>
              <Field
                type="text"
                id="otp"
                name="otp"
                variant="outlined"
                size="small"
                placeholder="password"
              ></Field>
              <button type="submit" color="primary">
                Login
              </button>
            </div>
          </>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
