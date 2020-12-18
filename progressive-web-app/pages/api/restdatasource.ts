const axios = require("axios").default;

export interface restParameters {
  baseurl: string;
  errorCallBack: () => {};
}
export default class RestDataSource implements restParameters {
  baseurl: string;
  errorCallBack: () => {};

  constructor(base_url, errorCallback) {
    this.baseurl = base_url;
    this.errorCallBack = errorCallback;

    axios.defaults.headers.common["applicationid"] = "11101";
    axios.defaults.headers.common["buid"] = "2";
    axios.defaults.headers.common["subbuid"] = "1";
    axios.defaults.headers.common["environment"] = "dev";
    axios.defaults.headers.common["tokentype"] = "jti";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["issuer"] = "Dap";
    axios.defaults.headers.common["jtitoken"] =
      localStorage.getItem("jti-token") !== "undefined"
        ? localStorage.getItem("jti-token")
        : localStorage.getItem("jwt-token");
    axios.defaults.headers.common["token"] = localStorage.getItem("jwt-token");
    // axios.defaults.headers.common["tokentype"] = localStorage.getItem(
    //   "TokenName"
    // );
    if (
      localStorage.getItem("userid") !== "" &&
      localStorage.getItem("userid") !== null
    ) {
      axios.defaults.headers.common["userId"] = JSON.parse(
        localStorage.getItem("userid")
      );
      axios.defaults.headers.common["userlogin"] = localStorage.getItem(
        "eMail"
      );
    } else {
      axios.defaults.headers.common["userId"] = 2;
      axios.defaults.headers.common["userlogin"] = "pramila@gmail.com";
    }
  }

  //`${process.env.API_BASE_URL}`
  async GetData(callback) {
    this.SendRequest("get", this.baseurl, callback, "");
  }
  async GetOneByParam(id, callback) {
    this.SendRequest("get", `${this.baseurl}?${id}`, callback, "");
  }
  async GetOne(id, callback) {
    this.SendRequest("get", `${this.baseurl}/${id}`, callback, "");
  }
  async Store(data, callback) {
    this.SendRequest("post", this.baseurl, callback, data);
  }
  async Update(data, callback) {
    this.SendRequest("put", this.baseurl, callback, data);
  }
  async Delete(data, callback) {
    this.SendRequest("delete", this.baseurl, callback, data);
  }

  async DeleteOneByParam(id, callback) {
    this.SendRequest(
      "delete",
      `${process.env.API_BASE_URL}?${id}`,
      callback,
      ""
    );
  }
  async SendRequest(method, url, callback, data) {
    try {
      let response = await axios.request({
        //headers: axiosheaders.Headers(),
        method: method,
        url: url,
        data: data,
      });
      callback(response);
    } catch (err) {
      console.log(err);
      // warning(err);
      // this.handleError(err);
    }
  }
}
