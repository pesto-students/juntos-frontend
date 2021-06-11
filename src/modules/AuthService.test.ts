import * as AuthService from "src/modules/AuthService";
import { User } from "src/modules/User";

jest.mock("firebase", () => ({
  initializeApp: jest.fn(() => {
    const functions = require("firebase-functions-test");
    const testEnv = functions();
    const firebaseUser = testEnv.auth.exampleUserRecord();
    return {
      auth: () => {
        return {
          signInWithEmailAndPassword: () =>
            Promise.resolve({ user: firebaseUser }),
          createUserWithEmailAndPassword: () =>
            Promise.resolve({ user: firebaseUser }),
          sendPasswordResetEmail: () => Promise.resolve(),
          signOut: () => Promise.resolve(),
        };
      },
    };
  }),
}));

describe("Auth Service", () => {
  it("Should Sign In", async () => {
    const existingUser: User = await AuthService.signIn({
      email: "user@gmail.com",
      password: "******",
    });
    expect(existingUser).toHaveProperty("user.email", "user@gmail.com");
  });

  it("Should Sign Up", async () => {
    const newUser: User = await AuthService.signUp({
      email: "user@gmail.com",
      password: "******",
    });
    expect(newUser).toHaveProperty("user.email", "user@gmail.com");
  });

  it("Should request password reset", async () => {
    const result = await AuthService.requestPasswordReset("user@gmail.com");
    expect(result).toEqual(undefined);
  });

  it("Should Sign out user", async () => {
    const result = await AuthService.signOut();
    expect(result).toEqual(undefined);
  });
});
