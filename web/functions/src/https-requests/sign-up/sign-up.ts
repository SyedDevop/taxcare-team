import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

const app = express();

app.use(cors({origin: true}));

app.get("/", async (req, res) => {
  const apiKey = req.query.apiKey as string | undefined;
  if (apiKey) {
    const docId = apiKey.split("-").reverse()[0];
    const result = await admin
        .firestore()
        .collection("tempClientData")
        .doc(docId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return res.status(200).send(doc.data());
          } else {
            return res.status(403).send({
              error: {
                code: 403,
                message: `You dont have access to this page.
                Please contact support if this wasn't supposed to happen.`,
                link: "contact",
              },
            });
          }
        });
    return result;
  }
  return res.status(400).send({
    error: {
      code: 400,
      message: `The request includes an invalid parameter
          , or a required parameter is missing.
          For example, the apiKey parameter is not within
          the expected range, or is missing from the request`,
    },
  });
});

export const signUp = functions.https.onRequest(app);
