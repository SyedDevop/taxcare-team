import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// export const addAdminClaims = functions.https.onCall(async (data, _) => {
//   const customClaims = {admin: true, accessLevel: 9};
//   console.log(data.uid + ">>>>>help");
//   try {
//     await admin.auth().setCustomUserClaims(data.uid, customClaims);
//   } catch (error) {
//     console.log(error);
//   }
// });
export const newOrder = functions.firestore
    .document("orders/{ordersId}")
    .onCreate((snap, context) => {
      const orderData = snap.data();
      const data = {
        orderId: context.params.ordersId,
        title: "new order",
        client: orderData.clientType,
        name: orderData.clientData.name,
        issuedDate: admin.firestore.FieldValue.serverTimestamp(),
      };
      const notification = admin.firestore().collection("notification");
      return notification.add(data);
    });
