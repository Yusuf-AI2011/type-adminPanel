import { useState } from "react";
import { postUser } from "../../services/api";
import type { CreateUser } from "../../types/user";

export const useCreateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (newUser: CreateUser) => {
    try {
      setLoading(true);
      const request = await postUser(newUser);
      return request;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    createUser,
    loading,
    error,
  };
};
