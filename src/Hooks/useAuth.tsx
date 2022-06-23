import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
} from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
  updatePassword,
  UserCredential,
  updateProfile,
  connectAuthEmulator,
  sendEmailVerification,
} from "firebase/auth";
import { isDev } from "../Utils";

export const app = initializeApp({
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT,
  storageBucket: process.env.REACT_APP_FB_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER,
  appId: process.env.REACT_APP_FB_APP,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
});

export interface AuthContextValue {
  user: User | null;
  isAuthenticating: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<boolean>;
  signOutUser: () => void;
  updateUserPassword: (password: string) => Promise<void> | String;
  userPasswordResetEmail: (email: string) => Promise<void>;
  emailVerification: (user: User) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provide hook that creates auth object and handles state.
export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const auth = getAuth();

  connectAuthEmulator(auth, "http://localhost:9099");

  /**
   * @type {Function} - Create a new user with email and password.
   * @param {string} email - Email of the user to be created.
   * @param {string} password - Password for the user to be created.
   * @return {Promise} Boolean - Returns true if the user was successfully created.
   * */
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const updateUserProfile = (
  //   user: User,
  //   {
  //     displayName,
  //     photoURL,
  //   }: {
  //     displayName?: string | null;
  //     photoURL?: string | null;
  //   }
  // ) => {
  //   return updateProfile(user, { displayName, photoURL });
  // };

  /**
   * @type {Function} - SignIn existing user with email and password.
   * @param {string} email - Email of the user to be signed in.
   * @param {string} password - Password for the user to be signed in.
   * @return {promise} Boolean - Returns true if the user is successfully Authenticated and signed in.
   * */
  const signInUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        setUser(userCredentials.user);
        return true;
      }
    );
  };

  /**
   * @type {Function} - SignOut current user.
   * @return {Void} This is the result.
   * */
  const signOutUser = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  const updateUserPassword = (password: string) => {
    const user = auth.currentUser;
    if (user) {
      return updatePassword(user, password);
    } else {
      return "User no not logged in.";
    }
  };

  const userPasswordResetEmail = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const emailVerification = (user: User) => {
    return sendEmailVerification(user);
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsAuthenticating(false);
    });
    // Cleanup subscription on unmount
    return unsubscribe();
  }, [auth]);

  const values = {
    user,
    isAuthenticating,
    createUser,
    signInUser,
    signOutUser,
    updateUserPassword,
    userPasswordResetEmail,
    emailVerification,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
