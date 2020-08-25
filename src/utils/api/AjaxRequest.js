import axios from "axios";
import ErrorModel from "../models/ApiErrorModel";
import { API_URL } from "./ApiUrl.js";
// import { AUTHENTICATION_ERROR_CONSTANTS } from "./type";

// Common ajax param for all xhr request
const ajaxParams = {
  // baseURL: API_URL, // Api URL "http://dev.letscherish.com" or 'https://api.letscherish.com' can be changed in const file.
  baseURL: API_URL, // Api URL "http://dev.letscherish.com" or 'https://api.letscherish.com' can be changed in const file.
};

export const AjaxRequest = async (params) => {
  console.log("ajax params", params);
  let requestParameters = { ...ajaxParams };
  // let selectedCity = CommonFunctions.getCity();

  requestParameters["url"] = API_URL + params.url;
  requestParameters["method"] = params.method;

  if (params.method === "post" || params.method === "put") {
    requestParameters["data"] = params.data;
  }

  if (params.method === "get" && params.params) {
    requestParameters["params"] = params.params;
  }

  if (params.version) {
    Object.assign(
      requestParameters.headers,
      {},
      { "App-Version": params.version }
    );
  }

  try {
    console.log("request params", requestParameters);
    const response = await axios(requestParameters);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      let error_data = new ErrorModel(
        error.response.data.error_message || error.response.data.message,
        error.response.status,
        error.response.data.data
      );
      return error_data;
    } else {
      return new ErrorModel();
    }
  }
};
