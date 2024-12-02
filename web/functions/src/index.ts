import * as admin from "firebase-admin";
import {isDiscount} from "./isDiscount-call-function";
import {addAdminClaims} from "./user-manage";
import {newOrder} from "./new-order";
import {onOrderFieldUpdate} from "./order-update";
import {signUp} from "./https-requests/sign-up/sign-up";

// Admin
admin.initializeApp();

// Exports
module.exports = {
  isDiscount,
  addAdminClaims,
  newOrder,
  signUp,
  onOrderFieldUpdate,
};

