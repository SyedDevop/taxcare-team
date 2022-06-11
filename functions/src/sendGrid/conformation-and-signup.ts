import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
import * as sgMail from "@sendgrid/mail";
// import {OrderData} from "../../../src/Type";

// import {UserOrderData} from "../@Types/myIndex";

export const OnNewOrder = functions.firestore
    .document("orders/{ordersId}")
    .onCreate((snap) => {
      const api = functions.config().sendgrid.api;
      sgMail.setApiKey(api);
      const orderData = snap.data();
      // const data = {
      //   orderId: context.params.ordersId,
      //   title: "new order",
      //   client: orderData.clientType,
      //   name: orderData.clientData.name,
      //   issuedDate: admin.firestore.FieldValue.serverTimestamp(),
      // };
      // const notification = admin.firestore().collection("notification");
      // return notification.add(data);
      const msg = {
        to: orderData.clientData.email,
        from: {
          name: "Taxcare Team",
          email: "admin@taxcareteam.com",
        },
        templateId: "d-d69e3a067b8a4412b73936965377d74b",
        dynamic_template_data: {
          subject: "New Order",
          orderId: orderData.orderId,
          name: orderData.clientData.name,
          orderSummary: {
            plan: [orderData.orderDetails],
            addons: orderData.orderDetails.addOnRecord,
            discount: orderData.discountPrice,
            subtotal: orderData.totalAddOnAmount + orderData.orderDetails.price,
            total: orderData.totalAmount,
          },
        },
      };
      console.log(msg.dynamic_template_data);
      // return sgMail.send(msg);
      return sendGridSendEmail(msg);
    });

/**
 * Adds two numbers together.
 * @param {any} msg The first number.
 * @return {Promise<[sgMail.ClientResponse, {}]>} The sum of the two numbers.
 */
function sendGridSendEmail(msg:sgMail.MailDataRequired) {
  return sgMail.send(msg).then((response) => {
    console.log(response);
    return response;
  }).catch((error) => {
    console.log(error);
    return error;
  });
}

/**
* Template for the email.
* {
    "subject":"New Order",
    "orderSummary":{
        "plan":[{
            "planType":"Accounting",
            "price":"7500",
            "planId":"Plan(Pro)"
            }],
        "addons":[{
            "addOnPlanId":"Caplitel gain",
            "addOnPrice":600
            },{
            "addOnPlanId":"Caplitel gain",
            "addOnPrice":600
            }],
        "subtotal":"8600",
        "discount":1000,
        "total":7600
        }
}
*/
