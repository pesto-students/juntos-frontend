import {
  signIn,
  signUp,
  requestPasswordReset,
  signOut,
} from "src/AuthService/AuthService";

jest.mock("firebase", () => ({
  initializeApp: jest.fn(() => {
    const functions = require("firebase-functions-test");
    const { User } = require("src/User/User");
    const testEnv = functions();
    const firebaseUser = testEnv.auth.exampleUserRecord();
    return {
      auth: () => {
        return {
          signInWithEmailAndPassword: () =>
            Promise.resolve(new User(firebaseUser)),
          createUserWithEmailAndPassword: () =>
            Promise.resolve(new User(firebaseUser)),
          sendPasswordResetEmail: () => Promise.resolve(),
          signOut: () => Promise.resolve(),
        };
      },
    };
  }),
}));

describe("Auth Service", () => {
  beforeEach(() => {});

  it("Should Sign In", async () => {
    const newUser = await signIn({
      email: "user@gmail.com",
      password: "******",
    });
    expect(newUser).toHaveProperty("user.email", "user@gmail.com");
  });

  it("Should Sign Up", async () => {
    const newUser = await signUp({
      email: "user@gmail.com",
      password: "******",
    });
    expect(newUser).toHaveProperty("user.email", "user@gmail.com");
  });

  it("Should request password reset", async () => {
    const result = await requestPasswordReset("user@gmail.com");
    expect(result).toEqual(undefined);
  });

  it("Should Sign out user", async () => {
    const result = await signOut();
    expect(result).toEqual(undefined);
  });
});
