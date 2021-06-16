import React, { Suspense, useEffect } from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";

import { guestRoutes, userRoutes } from "src/common/routes";
import { routes } from "./common/constants/pageRoutes";
import { useAuth } from "./context/GlobalContext";

const Application: React.FC<
  RouteComponentProps<{}, {}, { from: { pathname: string } }>
> = ({ history }) => {
  const { state } = useAuth();

  useEffect(() => {
    // Store previous route in history state to return user back to that route
    // from which it came from after user verified from auth listener.
    if (state.user) {
      const { state } = history.location;
      history.replace(state?.from?.pathname ?? routes.HOME);
    } else {
      history.replace(routes.AUTH, {
        from: { pathname: history.location.pathname },
      });
    }
  }, [state.user, history]);

  if (state.loading) return <h1>Loading...</h1>;

  const currentRoutes = state.user ? userRoutes : guestRoutes;

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {currentRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default withRouter(Application);
