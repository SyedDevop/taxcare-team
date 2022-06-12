import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
const api = functions.config().sendgrid.api;


/**
 * Adds two numbers together.
 * @param {any} orderData The first number.
 * @return {Promise<void>} The sum of the two numbers.
 */
export function sendGridSendEmail(orderData: FirebaseFirestore.DocumentData):
Promise<void> {
  sgMail.setApiKey(api);
  const msg = {
    to: orderData.clientData.email,
    from: {
      name: "Taxcare Team",
      email: "admin@taxcareteam.com",
    },
    templateId: "d-d69e3a067b8a4412b73936965377d74b",
    dynamic_template_data: {
      subject: "New Order uzair",
      orderId: orderData.orderId,
      name: orderData.clientData.name,
      email: orderData.clientData.email,
      number: orderData.clientData.phoneNumber,
      plan: [orderData.orderDetails],
      addons: orderData.orderDetails.addOnRecord,
      discount: orderData.discountPrice,
      subtotal: orderData.totalAddOnAmount + orderData.orderDetails.price,
      total: orderData.totalAmount,
    },
  };

  return sgMail.send(msg).then((response) =>
    (console.log("Success sending email: ", response)
    )).catch((error) => (console.log("Error sending email: ", error)));
}

/**
 * Template for the email.
 */
// type TemplateDataType = {
//   subject: string,
//   orderId: string,
//   name: string,
//   orderSummary: {
//     plan: {
//       planType: string,
//       price: number,
//       planId: string,
//     }[],
//     addons?: {
//       addOnPlanId: string,
//       addOnPrice: number,
//     }[],
//     subtotal: number,
//     discount:number,
//     total:number,
//   },
// };
