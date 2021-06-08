import firebase from "firebase/app";
import { AuthFormData } from "src/common/interface";

const firebaseConfig = {
  apiKey: "AIzaSyBKJmcCR4D7AEAAWCgagju0aq7tLfiSTVY",
  authDomain: "juntos-b7bea.firebaseapp.com",
  projectId: "juntos-b7bea",
  storageBucket: "juntos-b7bea.appspot.com",
  messagingSenderId: "748965588535",
  appId: "1:748965588535:web:1006185c0f05ca37a759b2",
  measurementId: "G-Z2DYR5XMNW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export function signUp({
  email,
  password,
}: AuthFormData): Promise<firebase.auth.UserCredential> {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signIn({
  email,
  password,
}: AuthFormData): Promise<firebase.auth.UserCredential> {
  return auth.signInWithEmailAndPassword(email, password);
}

export function requestPasswordReset(email: string): Promise<void> {
  return auth.sendPasswordResetEmail(email);
}

export function signOut(): void {
  auth.signOut();
}
