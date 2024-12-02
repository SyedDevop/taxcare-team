import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
import {NewOrderEmailTemplateType, OrderData} from "../@Types";
const api = functions.config().sendgrid.api;


type SendGridEmailSubject = "New Order" | "Order Confirmed" | "Order Cancelled";
/**
 * Sends dynamic email to user when new order is placed.
 * @param {OrderData} orderData - Order data.
 * @param {SendGridEmailSubject} subject - subject For Email.
 * @param {string} subjectTextColor - color of email Subject.
 * @return {Promise<void>} Promise<Voide>.
 */
export async function sendGridSendEmail(
    orderData: OrderData,
    subject: SendGridEmailSubject,
    subjectTextColor: string):
Promise<void> {
  sgMail.setApiKey(api);
  const templateData: NewOrderEmailTemplateType = {
    subjectTextColor,
    subject: subject,
    orderId: orderData.orderId,
    name: orderData.clientData.name,
    email: orderData.clientData.email,
    number: orderData.clientData.phoneNumber,
    plan: [orderData.orderDetails],
    addons: orderData.orderDetails.addOnRecord,
    discount: orderData.discountPrice,
    subtotal: orderData.totalAddOnAmount + orderData.orderDetails.price,
    total: orderData.totalAmount,
  };
  const msg = {
    to: orderData.clientData.email,
    from: {
      name: "Taxcare Team",
      email: "admin@taxcareteam.com",
    },
    templateId: "d-d69e3a067b8a4412b73936965377d74b",
    dynamic_template_data: templateData,
  };

  try {
    const response = await sgMail.send(msg);
    return (console.log("Success sending email: ", response)
    );
  } catch (error) {
    return (console.log("Error sending email: ", error));
  }
}
