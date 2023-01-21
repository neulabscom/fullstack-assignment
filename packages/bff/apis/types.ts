export type User = {
  id: number;
  name: string;
  email: string;
};

export interface IUserApi {
  getUsers: () => Promise<User[]>;
}
