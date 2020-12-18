import RestDataSource from "./restdatasource";

export const TokenApi = {
  TokenUser,
};

function TokenUser(fn, fnError) {
  let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_URL_JWT_TRUST}`;

  return new RestDataSource(url, fnError).GetData((res) => fn(res.data));
}
