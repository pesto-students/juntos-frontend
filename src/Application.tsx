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

const Application: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const { state } = useAuth();

  useEffect(() => {
    state.user ? history.push(routes.HOME) : history.push(routes.AUTH);
  }, [state.user, history]);

  if (state.loading) return <h1>Loading...</h1>;

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        {(state.user ? userRoutes : guestRoutes).map((route, index) => {
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
