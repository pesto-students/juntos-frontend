import React from "react";

import IRoute from "src/common/interface";
import { routes } from "src/common/constants/pageRoutes";

//Lazy routes
const HomePage = React.lazy(() => import("src/Home/Home"));
const AboutPage = React.lazy(() => import("src/About/About"));
const NoPagefound = React.lazy(() => import("src/Error/NoPageFound"));
const SelectVideoPage = React.lazy(() => import("src/SelectVideo/SelectVideo"));
const CreateRoomPage = React.lazy(() => import("src/CreateRoom/CreateRoom"));
const CreateLinkForLaterPage = React.lazy(() => import("src/CreateRoom/CreateLinkForLater"));
const SelectStreamingServicePage = React.lazy(() => import("src/CreateRoom/SelectStreamingService"));
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
    path: routes.SELECT_VIDEO,
    component: SelectVideoPage,
    exact: true,
  },
  {
    path: routes.CREATE_ROOM,
    component: CreateRoomPage,
    exact: true,
  },
  {
    path: routes.CREATE_LINK_FOR_LATER,
    component: CreateLinkForLaterPage,
    exact: true,
  },
  {
    path: routes.SELECT_STREAMING_SERVICE,
    component: SelectStreamingServicePage,
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
