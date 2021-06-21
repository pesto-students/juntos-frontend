export default interface IRoute {
  path?: string;
  exact?: boolean;
  component: any;
  props?: any;
}

export interface AuthFormData {
  name?: string;
  email: string;
  password: string;
}
