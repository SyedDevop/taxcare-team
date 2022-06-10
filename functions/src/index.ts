import * as admin from "firebase-admin";
import * as isDiscount from "./isDiscount-call-function";
import * as userManage from "./user-manage";
import * as newOrders from "./new-order";
import * as SineUp from "./https-requests/sign-up/sign-up";
import * as OnNewOrder from "./sendGrid/conformation-and-signup";

// Admin
admin.initializeApp();

// Exports
module.exports = {
  ...isDiscount,
  ...userManage,
  ...newOrders,
  ...SineUp,
  ...OnNewOrder,
};

