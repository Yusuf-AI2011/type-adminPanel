export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export type CreateUser = Omit<User, "id">;
