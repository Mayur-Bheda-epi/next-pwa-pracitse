// export type PendingLogin = { type: "PENDING"; payload: any };
// export type SuccessLogin = { type: "SUCCESS"; payload: any };
//export type ErrorLogin = { type: "ERROR"; payload: any };
export const PendingLogin = "PendingLogin";
export const SuccessLogin = "SuccessLogin";
export const ErrorLogin = "ErrorLogin";

export const pendingAction = () => {
  return {
    type: "PENDING",
  };
};

export const successAction = (payload) => {
  return {
    type: "SUCCESS",
    payload: payload,
  };
};

export const errorAction = (errorPayLoad) => {
  return {
    type: "ERROR",
    payload: errorPayLoad,
  };
};
