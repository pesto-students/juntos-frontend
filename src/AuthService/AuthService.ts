import firebase from "firebase/app";
import { AuthFormData } from "src/common/interface";
import { User } from "src/User/User";

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export function signUp({ email, password }: AuthFormData): Promise<User> {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((UserCredential) => {
      const { user } = UserCredential;
      return new User(user);
    });
}

export function signIn({ email, password }: AuthFormData): Promise<User> {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((UserCredential) => {
      const { user } = UserCredential;
      return new User(user);
    });
}

export function requestPasswordReset(email: string): Promise<void> {
  return auth.sendPasswordResetEmail(email);
}

export function signOut(): Promise<void> {
  return auth.signOut();
}
