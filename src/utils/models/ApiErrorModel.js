// import Utilities from "../../utils/Utilities";

export default class ErrorModel {
  constructor(eMessage, eCode = "500", data = {}, sError = false) {
    this.errorMessage = eMessage;
    this.errorCode = eCode;
    this.errorData = data;
    this.showError = sError;
  }

  static fromJson(json) {
    var data = JSON.parse(json); // Parsing the json string.
    return new ErrorModel(data);
  }

  // static errorHandle(data) {
  //   let eCode = data.errorCode;
  //   let eMessage = "";
  //   switch (eCode) {
  //     case 400:
  //       eMessage = "Bad Request";
  //       break;

  //     case 401:
  //       eMessage = data.errorMessage;

  //       break;

  //     case 403:
  //       eMessage = data.errorMessage;
  //       break;

  //     case 405:
  //       eMessage = data.errorMessage;
  //       break;

  //     case 412:
  //       eMessage = data.errorMessage;
  //       break;

  //     case 500:
  //       eMessage = "Server Error";
  //       break;

  //     case 501:
  //       eMessage = "Server Error";
  //       break;

  //     default:
  //       return data;
  //   }

  //   if (eCode == 401 || eCode == 403) {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("profile");
  //     if (eMessage !== "No Token supplied.") {
  //       Utilities.showAlert("Error!", eMessage);
  //     }
  //     if (!localStorage.getItem("autherror")) {
  //       window.location.reload();
  //     }
  //     localStorage.setItem("autherror", true);
  //   }

  //   if (eMessage === "mobile_not_available") {
  //     localStorage.setItem("openMobileEmpty", true);
  //   } else {
  //     localStorage.removeItem("openMobileEmpty");
  //   }

  //   if (!localStorage.getItem("autherror"))
  //     Utilities.showAlert("Error!", eMessage);
  // }
}
