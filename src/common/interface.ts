export default interface IRoute {
  path?: string;
  exact?: boolean;
  component: any;
  name?: string;
  props?: any;
}

export interface IParams {
  id?: string | undefined;
}

export interface CustomStyleProps {
  width?: number;
  height?: number;
  flexDirection?: string;
  placeholder?: string;
  justifyContent?: string;
  alignItems?: string;
};

export interface ISearchResultData {
  thumbnail: string,
  title: string,
  duration: string,
  channelName: string,
  views: string,
  postDate: string,
  imgAlt: string,
  videoId: string
}