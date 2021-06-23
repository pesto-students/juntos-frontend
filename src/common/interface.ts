export default interface IRoute {
  path?: string;
  exact?: boolean;
  component: any;
  props?: any;
}

export interface IParams {
  id?: string | undefined;
}

export interface ISearchResultData {
  thumbnail: string;
  title: string;
  duration: string;
  channelName: string;
  views: string;
  postDate: string;
  imgAlt: string;
  videoId: string;
}
export interface AuthFormData {
  name?: string;
  email: string;
  password: string;
}

export enum SocketRoomEvents {
  joinRoom = "joinRoom",
  leaveRoom = "leaveRoom",
  startVideo = "startVideo",
  pauseVideo = "pauseVideo",
  updateTimeStamp = "updateTimeStamp",
}
