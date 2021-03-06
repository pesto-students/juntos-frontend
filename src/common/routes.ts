import React from "react";

import IRoute from "src/common/interface";
import { routes } from "src/common/constants/pageRoutes";
import StartParty from "src/StartParty/StartParty";

/**
 * Lazily Loaded React Components for Faster Load time
 */
const HomePage = React.lazy(() => import("src/Home/Home"));
const AboutPage = React.lazy(() => import("src/About/About"));
const NoPagefound = React.lazy(() => import("src/Error/NoPageFound"));
const SelectVideoPage = React.lazy(() => import("src/SelectVideo/SelectVideo"));
const CreateRoomPage = React.lazy(() => import("src/CreateRoom/CreateRoom"));
const CreateLinkForLaterPage = React.lazy(() => import("src/CreateRoom/CreateLinkForLater"));
const SelectStreamingServicePage = React.lazy(() => import("src/CreateRoom/SelectStreamingService"));
const JoinRoomPagePage = React.lazy(() => import("src/JoinRoom/JoinRoom"));
const AuthPage = React.lazy(() => import("src/Auth/Auth"));

export const guestRoutes: IRoute[] = [
  {
    path: routes.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: routes.AUTH,
    component: AuthPage,
    exact: false,
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
    path: routes.START_PARTY,
    component: StartParty,
    exact: true,
  },
  {
    path: routes.JOIN_ROOM,
    component: JoinRoomPagePage,
    exact: true,
  },
  {
    component: NoPagefound,
    exact: false,
  },
];
