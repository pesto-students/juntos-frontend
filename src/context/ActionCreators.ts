import { toast } from "react-toastify";
import { AuthFormData } from "src/common/interface";
import { Dispatch, Types } from "src/context/context.interface";
import {
  signUp,
  signIn,
  signOut,
  requestPasswordReset,
} from "src/modules/AuthService";

export const register = async (dispatch: Dispatch, payload: AuthFormData) => {
  try {
    dispatch({ type: Types.REQUEST });
    const user = await signUp(payload);
    dispatch({ type: Types.SET_USER, payload: user });
  } catch (error) {
    dispatch({ type: Types.ERROR, payload: error.message });
  } finally {
    dispatch({ type: Types.LOADED });
  }
};

export const login = async (dispatch: Dispatch, payload: AuthFormData) => {
  try {
    dispatch({ type: Types.REQUEST });
    const user = await signIn(payload);
    dispatch({ type: Types.SET_USER, payload: user });
  } catch (error) {
    dispatch({ type: Types.ERROR, payload: error.message });
  } finally {
    dispatch({ type: Types.LOADED });
  }
};

export const resetPassword = async (dispatch: Dispatch, email: string) => {
  try {
    dispatch({ type: Types.REQUEST });
    await requestPasswordReset(email);
    toast.success("reset link sent to your email");
  } catch (error) {
    dispatch({ type: Types.ERROR, payload: error.message });
  } finally {
    dispatch({ type: Types.LOADED });
  }
};

export const logout = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: Types.REQUEST });
    await signOut();
  } catch (error) {
    dispatch({ type: Types.ERROR, payload: error.message });
  } finally {
    dispatch({ type: Types.LOADED });
  }
};
