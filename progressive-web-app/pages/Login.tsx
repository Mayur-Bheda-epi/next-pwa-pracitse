import React, { useEffect } from "react";
import { useFormik } from "formik";
import { TokenApi } from "./api/token.api";
import getLoginUser from "./api/login.api";
import { useRouter } from "next/router";

const Login = () => {
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

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      otp: "",
      isMobile: true,
    },
    onSubmit: (values) => {
      getLoginUser(values, (res) => {
        debugger;
        console.log("tsx" + res);
        if (res.status === "success") {
          //test();
          const router = useRouter();
          router.replace("/dashboard");
        }
      });
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="mobileNumber"
        name="mobileNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.mobileNumber}
      />
      <label htmlFor="otp">Last Name</label>
      <input
        id="otp"
        name="otp"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.otp}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
