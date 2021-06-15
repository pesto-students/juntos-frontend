import { GlobalState, Types } from "./context.interface";

export const rootReducer = (
  state: GlobalState,
  action: { type: Types; payload?: any }
) => {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.LOADER_OFF:
      return { ...state, loading: false };
    case Types.SET_USER:
      return { ...state, user: action.payload, loading: false };
    default:
      return state;
  }
};
