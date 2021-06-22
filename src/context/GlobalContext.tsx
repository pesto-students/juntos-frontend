import React, {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useMemo,
} from "react";
import {
  ContextActions,
  GlobalState,
  Types,
} from "src/context/context.interface";
import * as ActionCreators from "src/context/ActionCreators";
import { rootReducer } from "src/context/reducer";
import { AuthFormData } from "src/common/interface";
import { onAuthStateChanged } from "src/modules/AuthService";
import { User } from "src/modules/User";

const initialState: GlobalState = {
  loading: true,
};
const GlobalContext = createContext<{
  globalState: GlobalState;
  actions?: ContextActions;
}>({
  globalState: initialState,
});

export function useAuth() {
  return useContext(GlobalContext);
}

export const GlobalProvider: React.FC = ({ children }) => {
  const [globalState, dispatch] = useReducer(rootReducer, initialState);

  const actions = useMemo<ContextActions>(
    () => ({
      signUp: (payload: AuthFormData) =>
        ActionCreators.register(dispatch, payload),
      signIn: (payload: AuthFormData) =>
        ActionCreators.login(dispatch, payload),
      signOut: () => ActionCreators.logout(dispatch),
      clearError: () => dispatch({ type: Types.CLEAR_ERROR }),
    }),
    []
  );

  useEffect(() => {
    const unsubscribeAuthChange = onAuthStateChanged((user) => {
      // to avoid setting user if no name available
      if (user && !user?.displayName) return;
      dispatch({
        type: Types.SET_USER,
        payload: user ? new User(user) : undefined,
      });
    });
    return unsubscribeAuthChange;
  }, []);

  return (
    <GlobalContext.Provider value={{ globalState, actions }}>
      {children}
    </GlobalContext.Provider>
  );
};
