import firebase from "firebase";

interface Profile {
  email: string;
  name: string;
}

export class User {
  private user: firebase.User;

  constructor(user: firebase.User) {
    this.user = user;
  }

  // getProfile will return email as of now
  getProfile(): Profile {
    if (this.user.email === null) {
      throw new Error("email not found");
    } else if (this.user.displayName === null) {
      throw new Error("display name not found");
    }
    return { email: this.user.email, name: this.user.displayName };
  }
  /**
   * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
   */
  getToken(): Promise<string> {
    return this.user.getIdToken();
  }
}
