import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/api";
import type { User } from "../../types/user";

export const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const request = await getAllUsers();
        setUsers(request);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return {
    users,
    loading,
    error,
  };
};
