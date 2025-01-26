"use client";

import { useUser } from "@clerk/nextjs";

const UserWelcome = () => {
  const { user } = useUser();

  return (
    <h1 className="text-purple-800 font-medium">
      Olá, {user?.firstName}. Adicione sua primeira transação.
    </h1>
  );
};

export default UserWelcome;
