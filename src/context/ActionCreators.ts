import { AuthFormData } from "src/common/interface";
import { Dispatch, Types } from "src/context/context.interface";
import { signUp, signIn, signOut } from "src/modules/AuthService";
import { toast } from "react-toastify";

export const register = async (dispatch: Dispatch, payload: AuthFormData) => {
  try {
    dispatch({ type: Types.REQUEST });
    const user = await signUp(payload);
    dispatch({ type: Types.SET_USER, payload: user });
  } catch (error) {
    dispatch({ type: Types.ERROR, payload: error });
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
    toast.error(error.message);
  } finally {
    dispatch({ type: Types.LOADED });
  }
};

export const logout = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: Types.REQUEST });
    await signOut();
  } catch (error) {
    toast.error(error.message);
  } finally {
    dispatch({ type: Types.LOADED });
  }
};
