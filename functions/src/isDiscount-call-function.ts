import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

type DiscountData = { disCode: string; price: number };

export const isDiscount = functions.https.onCall(async (data, contex) => {
  let exists = false;
  const gotData: DiscountData[] | FirebaseFirestore.DocumentData = [];
  const query = await admin
      .firestore()
      .collection("discountList")
      .where("disCode", "==", data["code"])
      .get();
  query.forEach((doc) => {
    exists = doc.exists;
    gotData.push(doc.data());
  });
  console.log(gotData);
  console.log("Hello ");
  return JSON.stringify({exists, gotData});
});
