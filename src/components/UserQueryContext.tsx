//import {  useQueryClient } from "react-query";

type UserAtributes = {
  username: string;
  password: string;
};

type User = {
  username: string;
  wallet: number;
  type: string;
};

interface UserData {
  getUserById: (id: number) => Promise<User>;
  authenticateUser: (userToAuth: UserAtributes) => Promise<string>;
  registerUser: (userToAuth: UserAtributes) => Promise<string>;
}

const UserDataFetcher = (): UserData => {
  //const queryClient = useQueryClient();

  const registerUser = async (userToAuth: UserAtributes): Promise<string> => {
    const { username, password } = userToAuth;
    const response = await fetch(
      `https://localhost:44332/api/Users/Register?username=${username}&password=${password}`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    return response.json();
  };

  const authenticateUser = async (
    userToAuth: UserAtributes
  ): Promise<string> => {
    const { username, password } = userToAuth;
    const response = await fetch(
      `https://localhost:44332/api/Users/Authenticate?username=${username}&password=${password}`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    return response.json();
  };

  const getUserById = async (id: number): Promise<User> => {
    const response = await fetch(
      `https://localhost:44332/api/Users/${id}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    return response.json();
  };

  return { authenticateUser, registerUser, getUserById };
};

export default UserDataFetcher;
