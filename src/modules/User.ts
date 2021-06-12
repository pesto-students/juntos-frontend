import firebase from "firebase";

interface Profile {
  email: string;
}

export class User {
  private user: firebase.User;

  constructor(user: firebase.User) {
    this.user = user;
  }

  // getProfile will return email as of now
  getProfile(): Profile {
    if (this.user?.email === null) {
      throw new Error("email not found");
    }
    return { email: this.user?.email };
  }
  /**
   * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
   */
  getToken(): Promise<string> {
    if (this.user?.getIdToken() === undefined) {
      throw new Error("token not found");
    }
    return this.user.getIdToken();
  }
}
