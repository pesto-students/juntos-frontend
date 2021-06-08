import React from "react";

import IRoute from "src/common/interface";
import * as pageRoutes from "src/common/constants/pageRoutes";
//Lazy routes
const HomePage = React.lazy(() => import("src/Home/Home"));
const AboutPage = React.lazy(() => import("src/About/About"));
const NoPagefound = React.lazy(() => import("src/Error/NoPageFound"));

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
    component: NoPagefound,
    exact: false,
  },
];

export default routes;
