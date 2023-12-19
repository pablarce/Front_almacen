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
  getUserByToken: (token: string) => Promise<User>;
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
            const errorData = await response.json();
            throw new Error(errorData.message || "Registration failed");
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

const getUserByToken = async (token: string): Promise<User> => {
  const response = await fetch(
    `https://localhost:44332/api/Users/GetUserByToken?token=${token}`
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  const result: User = await response.json(); // Espera a que se resuelva la promesa JSON

  return result;
};

  return { authenticateUser, registerUser, getUserByToken };
};

export default UserDataFetcher;
