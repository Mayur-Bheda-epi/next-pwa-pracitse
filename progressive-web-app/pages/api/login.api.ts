import {
  errorAction,
  pendingAction,
  successAction,
} from "../../actions/login.action";
import { NextApiRequest, NextApiResponse } from "next";
import RestDataSource from "./restdatasource";
import { useDispatch } from "react-redux";
// export const LoginApi = {
//   LoginUser,
// };

//export default function LoginUser(user, isMobile, fn, fnError) {
type TGetUserLogin = {
  mobileNumber: string;
  otp: string;
  isMobile: boolean;
};
export default async function getLoginUser(
  { mobileNumber, otp, isMobile }: TGetUserLogin,
  fn
) {
  getLoginOTP({ mobileNumber });
  let url = "";
  url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_URL_LOGIN_MOBILE}`;
  let userMob = {
    mobileNumber: mobileNumber,
    otp: otp,
  };
  debugger;
  return await new RestDataSource(url, (err) => console.error(err)).Store(
    userMob,
    (res) => {
      console.log("loginAPI" + res);
      fn(res.data);
    }
  );
}

type TGetUserOtp = {
  mobileNumber: string;
};

async function getLoginOTP({ mobileNumber }: TGetUserOtp) {
  let url = "";
  url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_URL_MOBILE_OTP}`;
  let userMob = "mobileNo=" + mobileNumber + "&countryCode=91";
  debugger;
  return await new RestDataSource(url, (err) =>
    console.error(err)
  ).GetOneByParam(userMob, (res) => console.log(res));
}
