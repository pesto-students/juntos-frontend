import { AuthFormData } from "src/common/interface";
import { User } from "src/modules/User";

export interface GlobalState {
  user?: User;
  loading: boolean;
  error?: string;
}

export enum Types {
  REQUEST = "REQUEST",
  SET_USER = "SET_USER",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

export type Dispatch = React.Dispatch<{
  type: Types;
  payload?: any;
}>;

export type ContextActions = {
  signUp: (payload: AuthFormData) => Promise<void>;
  signIn: (payload: AuthFormData) => Promise<void>;
  signOut: () => Promise<void>;
};
