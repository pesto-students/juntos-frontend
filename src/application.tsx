import React, { Suspense } from "react";
import {
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "common/routes";

const Application: React.FunctionComponent<{}> = (props) => {
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map((route, index) => {
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

export default Application;

