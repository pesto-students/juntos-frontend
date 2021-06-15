import { AuthFormData } from "src/common/interface";
import { User } from "src/modules/User";

export interface GlobalState {
  user?: User;
  loading: boolean;
}

export enum Types {
  REQUEST = "REQUEST",
  SET_USER = "SET_USER",
  LOADER_OFF = "LOADER_OFF",
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
