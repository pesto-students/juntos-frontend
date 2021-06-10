import firebase from "firebase";

type getToken = Promise<string> | undefined;

type IUSER = firebase.User | null;
interface Profile {
  email: string | undefined | null;
}

export class User {
  private user: IUSER;

  constructor(user: IUSER) {
    this.user = user;
  }

  // getProfile will return email as of now
  getProfile(): Profile {
    return { email: this.user?.email };
  }
  /**
   * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
   */
  getToken(): getToken {
    return this.user?.getIdToken();
  }
}
