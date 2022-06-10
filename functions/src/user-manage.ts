import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const addAdminClaims = functions.https.onCall(async (data, contex) => {
  const customClaims = {admin: true, accessLevel: 9};
  console.log(data.uid + ">>>>>help");
  try {
    await admin.auth().setCustomUserClaims(data.uid, customClaims);
  } catch (error) {
    console.log(error);
  }
});
