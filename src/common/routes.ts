import React from "react";

import IRoute from "./interface";
import * as pageRoutes from "./pageRoutes";
//Lazy routes
const HomePage = React.lazy(() => import("../Home/Home"));
const AboutPage = React.lazy(() => import("../About/About"));
const Auth = React.lazy(() => import("../Auth/Auth"));
const NoPagefound = React.lazy(() => import("../Error/NoPageFound"));

const routes: IRoute[] = [
  {
    path: pageRoutes.HOME,
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: pageRoutes.ABOUT,
    component: AboutPage,
    exact: true,
  },
  {
    path: pageRoutes.AUTH,
    component: Auth,
    exact: true,
  },
  {
    component: NoPagefound,
    exact: false,
  },
];

export default routes;
