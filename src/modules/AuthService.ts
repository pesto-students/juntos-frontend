import firebase from "firebase";
import { AuthFormData } from "src/common/interface";
import { User } from "src/modules/User";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export async function signUp({
  name,
  email,
  password,
}: AuthFormData): Promise<User> {
  const UserCredentials = await auth.createUserWithEmailAndPassword(
    email,
    password
  );
  const { user } = UserCredentials;
  if (user === null) {
    throw new Error("sign-up failure");
  }
  await user.updateProfile({ displayName: name });
  return new User(user);
}

export function signIn({ email, password }: AuthFormData): Promise<User> {
  return auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
    if (user === null) {
      throw new Error("sign-in failure");
    }
    return new User(user);
  });
}

export function requestPasswordReset(email: string): Promise<void> {
  return auth.sendPasswordResetEmail(email);
}

export function signOut(): Promise<void> {
  return auth.signOut();
}

export function onAuthStateChanged(
  listener: (a: firebase.User | null) => void
) {
  return auth.onAuthStateChanged(listener);
}
