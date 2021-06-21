import React from "react";

import IRoute from "src/common/interface";
import { routes } from "src/common/constants/pageRoutes";

//Lazy routes
const HomePage = React.lazy(() => import("src/Home/Home"));
const AboutPage = React.lazy(() => import("src/About/About"));
const NoPagefound = React.lazy(() => import("src/Error/NoPageFound"));
const Auth = React.lazy(() => import("src/Auth/Auth"));

export const guestRoutes: IRoute[] = [
  {
    path: routes.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: routes.AUTH,
    component: Auth,
    exact: false,
  },
  {
    component: NoPagefound,
    exact: false,
  },
];

export const userRoutes: IRoute[] = [
  {
    path: routes.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: routes.ABOUT,
    component: AboutPage,
    exact: true,
  },
  {
    component: NoPagefound,
    exact: false,
  },
];
