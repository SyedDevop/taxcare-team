import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  orderBy,
  connectFirestoreEmulator,
} from "firebase/firestore";

import { OrderData } from "../Type";
import { isDev } from "../Utils";

const db = getFirestore();
if (isDev()) {
  connectFirestoreEmulator(db, "localhost", 8081);
}

export const useDb = () => {
  const orderById = async (userId: string) => {
    const queryRef = query(
      collection(db, "orders"),
      where("userId", "==", userId),
      orderBy("issuedDate")
    );
    return await getDocs(queryRef);
  };

  const addOrder = (data: OrderData) => {
    const uploadDate = { ...data, issuedDate: serverTimestamp() };
    return addDoc(collection(db, "orders"), uploadDate);
  };

  // const addNewUserOrder = (data: NewUserOrder) => {
  //   const uploadDate = { ...data, issuedDate: serverTimestamp() };
  //   return addDoc(collection(db, "newUserOrder"), uploadDate);
  // };

  const orderExist = async (filed: string, userId: string) => {
    let exists: boolean = false;
    const queryRef = query(
      collection(db, "orders"),
      where("userId", "==", userId),
      where("tag", "==", filed)
    );
    await getDocs(queryRef).then((data) => {
      data.forEach((result) => {
        exists = result.exists();
      });
    });
    return exists;
  };

  return { orderById, addOrder, orderExist };
};
