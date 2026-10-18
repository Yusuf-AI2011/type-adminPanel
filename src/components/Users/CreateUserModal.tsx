import { useState } from "react";
import type { CreateUser } from "../../types/user";
import { useCreateUser } from "../../hooks/users/usePostUser";
import toast, { Toaster } from "react-hot-toast";

const CreateUserModal = (setClickCreateUserModal: any) => {
  const [userFromData, setUserFormData] = useState<CreateUser>({
    username: "",
    email: "",
    password: "",
  });

  const { createUser, error } = useCreateUser();

  function HandleSubmit(e: any) {
    e.preventDefault();
    const { username, email, password } = userFromData;

    if (!username || !email || !password) {
      return toast.error("Hamma bo'limlarni to'ldiring!");
    }

    toast.promise(createUser(userFromData), {
      loading: "Yuklanmoqda...",
      success: <b>Muvvafaqiyatli yuklandi!</b>,
      error: <b>{error}</b>,
    });
  }

  return (
    <div className="w-[100%] h-[100vh] absolute top-0 left-0 bg-white flex justify-center items-center">
      <Toaster position="top-right" />
      <form className="w-[600px] flex justify-center items-center p-[10px]">
        <input className="w-[200px] h-[30px]" placeholder="name" type="text" />
        <input
          className="w-[200px] h-[30px]"
          placeholder="email"
          type="email"
        />
        <input
          className="w-[200px] h-[30px]"
          placeholder="password"
          type="password"
        />
        <div>
          <button className="w-[120px] h-[30px] border rounded-[8px]">
            Qo'shish
          </button>
          <button
            onClick={() => {
              setClickCreateUserModal(false);
            }}
            className="w-[120px] h-[30px] border rounded-[8px]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserModal;
