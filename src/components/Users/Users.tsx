import { useState } from "react";
import { useGetAllUsers } from "../../hooks/users/useGetAllUsers";
import CreateUserModal from "./CreateUserModal";

const Users = () => {
  const { users, error, loading } = useGetAllUsers();
  const [clickCreateUserModal, setClickCreateUserModal] =
    useState<boolean>(false);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

  // if (loading && !users) return toast.loading("Yuklanmoqda!");
  // if (error) toast.error(error);

  return (
    <div>
      {clickCreateUserModal ? (
        <CreateUserModal setClickUserModal={setClickCreateUserModal} />
      ) : null}
      <div className="w-150 p-2.5 flex justify-end items-center">
        <button
          onClick={() => setClickCreateUserModal(true)}
          className="rounded-[8px] p-1.25 bg-blue-700 text-mist-200"
        >
          Create +
        </button>
      </div>
      <div className="w-[600px] flex justify-start items-center gap-[10px] p-[10px]">
        <p className="flex justify-start items-center w-[200px]">Username</p>
        <p className="flex justify-start items-center w-[200px]">Email</p>
        <p className="flex justify-center items-center w-[200px]">Actions</p>
      </div>
      {users?.map(({ id, username, email }) => (
        <div
          key={id}
          className="border-b w-[600px] p-[10px] flex justify-start items-center rounded-[8px]"
        >
          <p className="w-[200px]">{username}</p>
          <p className="w-[200px]">{email}</p>
          <div className="w-[200px] flex justify-end items-center gap-[10px] text-mist-200">
            <button className="w-[70px] h-[30px] rounded-[8px] bg-orange-400">
              Edit
            </button>
            <button className="w-[70px] h-[30px] rounded-[8px] bg-red-600">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
