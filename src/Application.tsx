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
import Header from "./components/Header/Header";

const Application: React.FC = () => {
  useAuthRedirect();
  const { globalState, actions } = useAuth();
  const { error } = globalState;
  const currentRoutes = globalState.user ? userRoutes : guestRoutes;

  useEffect(() => {
    if (error) {
      toast(error);
    }
  }, [error]);

  return (
    <Suspense fallback={<Loader />}>
      <Header user={globalState.user} signOut={actions?.signOut}/>
      {globalState.loading && <Loader />}
      <Switch>
        {currentRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default withRouter(Application);
