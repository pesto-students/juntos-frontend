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