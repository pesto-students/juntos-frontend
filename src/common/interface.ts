export default interface IRoute {
  path?: string;
  exact?: boolean;
  component: any;
  name?: string;
  props?: any;
}

export interface AuthFormData {
  name?: string;
  email: string;
  password: string;
}
