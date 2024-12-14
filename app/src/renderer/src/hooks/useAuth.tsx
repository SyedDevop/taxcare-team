import { useState, useEffect, useContext, createContext, FC } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  User,
  updatePassword,
  UserCredential,
} from "firebase/auth";

export const app = initializeApp({
  apiKey: import.meta.env.RENDERER_VITE_APP_FB_API,
  authDomain: import.meta.env.RENDERER_VITE_APP_FB_DOMAIN,
  projectId: import.meta.env.RENDERER_VITE_APP_FB_PROJECT,
  storageBucket: import.meta.env.RENDERER_VITE_APP_FB_BUCKET,
  messagingSenderId: import.meta.env.RENDERER_VITE_APP_FB_SENDER,
  appId: import.meta.env.RENDERER_VITE_APP_FB_APP,
  measurementId: import.meta.env.RENDERER_VITE_APP_FB_MEASUREMENT_ID,
});

export interface AuthContextValue {
  user: User | null;
  isAuthenticating: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<boolean>;
  signOutUser: () => Promise<void>;
  updateUserPassword: (password: string) => Promise<void>;
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
export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const auth = getAuth(app);

  /**
   * @type {Function} - Create a new user with email and password.
   * @param {string} email - Email of the user to be created.
   * @param {string} password - Password for the user to be created.
   * @return {Promise<UserCredential>} UserCredential - Returns true if the user was successfully created.
   * */
  const createUser = (
    email: string,
    password: string,
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /**
   * @type {Function} - SignIn existing user with email and password.
   * @param {string} email - Email of the user to be signed in.
   * @param {string} password - Password for the user to be signed in.
   * @return {promise} Boolean - Returns true if the user is successfully Authenticated and signed in.
   * */
  const signInUser = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    setUser(userCredential.user);
    console.log(userCredential.user);
    return true;
  };

  /**
   * @type {Function} - SignOut current user.
   * @return {Void} This is the result.
   * */
  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateUserPassword = async (password: string): Promise<void> => {
    const user = auth.currentUser;
    if (user) {
      return updatePassword(user, password);
    }
    return;
  };

  const userPasswordResetEmail = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
  };
  // const addAdminPrivilege = () => {
  //   return
  // }
  // eslint-disable-next-line consistent-return
  const emailVerification = async (user: User): Promise<void> => {
    return sendEmailVerification(user);
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
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

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
