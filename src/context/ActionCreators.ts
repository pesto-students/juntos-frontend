import { AuthFormData } from "src/common/interface";
import { Dispatch, Types } from "src/context/context.interface";
import { signUp, signIn, signOut } from "src/modules/AuthService";

export const register = async (dispatch: Dispatch, payload: AuthFormData) => {
  try {
    dispatch({ type: Types.REQUEST });
    await signUp(payload);
  } catch (error) {
  } finally {
    dispatch({ type: Types.LOADER_OFF });
  }
};

export const login = async (dispatch: Dispatch, payload: AuthFormData) => {
  try {
    dispatch({ type: Types.REQUEST });
    await signIn(payload);
  } catch (error) {
  } finally {
    dispatch({ type: Types.LOADER_OFF });
  }
};

export const logout = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: Types.REQUEST });
    await signOut();
  } catch (error) {
  } finally {
    dispatch({ type: Types.LOADER_OFF });
  }
};
