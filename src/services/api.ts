import type { CreateUser, User } from "../types/user";

export const getAllUsers = async (): Promise<User[]> => {
  const request = await fetch(`https://fakestoreapi.com/users`);

  if (!request.ok) {
    throw new Error("Yuklanishga oid xato yuz berdi!");
  }

  return request.json();
};

export const postUser = async (newUser: CreateUser): Promise<User[]> => {
  const request = await fetch(`https://fakestoreapi.com/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!request.ok) {
    throw new Error("Qo'shishda xato yuz berdi!");
  }

  return request.json();
};
