import * as functions from "firebase-functions";

import {sendGridSendEmail} from "./sendGrid/conformation-and-signup";
import {OrderData} from "./@Types";
// function on order field is update or changed.
export const onOrderFieldUpdate = functions.firestore
    .document("orders/{ordersId}")
    .onUpdate(async (change) => {
      const orderData = <OrderData>change.after.data();
      if (orderData.orderStates.state === "complete") {
        return sendGridSendEmail(orderData, "Order Confirmed", "#388e3c");
      } else if (orderData.orderStates.state === "cancelled") {
        return sendGridSendEmail(orderData, "Order Cancelled", "#ff0059");
      }
      return null;
    }
    );

// TODO: Delete payment state in order.
