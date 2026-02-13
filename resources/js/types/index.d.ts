export interface Auth {
  user: User;
}

export interface SharedData {
  name: string;
  auth: Auth;

  [key: string]: unknown;
}
