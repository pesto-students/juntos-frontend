import firebase from "firebase";

type getToken =
  | ((forceRefresh?: boolean | undefined) => Promise<string>)
  | undefined;

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
   * Returns the current token if it has not expired. Otherwise, this will refresh the token and return a new one.
   * @param forceRefresh: boolean
   * Force refresh regardless of token expiration.
   */
  getToken(): getToken {
    return this.user?.getIdToken;
  }
}
