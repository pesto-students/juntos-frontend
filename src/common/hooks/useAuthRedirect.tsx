import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { routes } from "src/common/constants/pageRoutes";
import { useAuth } from "src/context/GlobalContext";

const useAuthRedirect: () => void = () => {
  const { globalState } = useAuth();

  const history = useHistory<{ from: { pathname: string } }>();

  useEffect(() => {
    // Store previous route in history state to return user back to that route
    // from which it came from after user verified from auth listener.
    if (globalState.user) {
      const { state } = history.location;
      history.replace(state?.from?.pathname ?? routes.HOME);
    } else {
      history.replace(routes.HOME, {
        from: { pathname: history.location.pathname },
      });
    }
  }, [globalState.user, history]);
};

export default useAuthRedirect;
