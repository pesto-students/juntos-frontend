import React, { Suspense, useEffect } from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";

import { guestRoutes, userRoutes } from "src/common/routes";
import useAuthRedirect from "src/common/hooks/useAuthRedirect";
import Loader from "src/components/Loader/Loader";
import { useAuth } from "src/context/GlobalContext";
import { toast } from "react-toastify";

const Application: React.FC<
  RouteComponentProps<{}, {}, { from: { pathname: string } }>
> = () => {
  useAuthRedirect();
  const { globalState } = useAuth();
  const { error } = globalState;
  const currentRoutes = globalState.user ? userRoutes : guestRoutes;
  useEffect(() => {
    if (error) {
      toast(error);
    }
  }, [error]);

  return (
    <Suspense fallback={<Loader />}>
      {globalState.loading && <Loader />}
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
