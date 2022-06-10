import {
  httpsCallable,
  getFunctions,
  connectFunctionsEmulator,
} from "firebase/functions";
import { getApp } from "firebase/app";
import { isDev } from "../Utils";

export const useFirebaseFunction = () => {
  const firebaseFunctions = getFunctions(getApp());
  // eslint-disable-next-line no-restricted-globals
  if (isDev()) {
    connectFunctionsEmulator(firebaseFunctions, "localhost", 5001);
  }
  
  const checkDiscount = httpsCallable<{ code: string }>(
    firebaseFunctions,
    "isDiscount"
  );
  const signUp = httpsCallable<{ apiKey: string }>(firebaseFunctions, "signUp");

  return { checkDiscount, signUp };
};
// { code: discountCode }
