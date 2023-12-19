import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./assets/logo.svg";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useForm } from "react-hook-form"
import { Form, FormControl, FormItem } from "./components/ui/form";
import UserDataFetcher from "./components/UserQueryContext"
import { useToast } from "./components/ui/use-toast"


const Login = () => {
    const screenHeight = "100vh"; // Puedes ajustar la altura según tus necesidades
    const navigate = useNavigate();
    const { toast } = useToast()
    const {authenticateUser, getUserById, registerUser} = UserDataFetcher()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const token = await authenticateUser({ username, password });
          console.log("Authentication successful. Token:", token);
          navigate("/gestion");
        } catch (error : any) {
            toast({
                title: error.message,
                description: "Username might not exist or password is incorrect",
            });
        }
    };

    const handleRegister = async () => {
        try {
          const result = await registerUser({ username, password });
          console.log("Registration successful. Result:", result);
          navigate("/gestion");
        } catch (error: any) {
            toast({
              title: "Registration failed",
              description: error.message || "An error occurred during registration",
              status: "error",
            });
        }
    };
    
    const form = useForm()

    return (
        <div className="flex items-center justify-center overflow-hidden w-full bg-gradient" style={{ height: screenHeight }}>
            <div className='flex flex-col items-center justify-center bg-gray-50 border-black rounded-xl h-2/3 w-1/3'>
                <img src={logo} className='h-40 w-40 -mb-8' alt="logo" />
                <p className='text-2xl'>Inicio de sesión</p>
                <div className='py-4'></div>
                <Form {...form}>
                    <form className='w-full flex flex-col items-center' onSubmit={handleSubmit}>
                        <div className='w-2/3 flex flex-col gap-2'>
                            <FormItem>
                                <FormControl>
                                    <Input
                                        id="username"
                                        type="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </FormControl>
                            </FormItem>
                            <FormItem>
                                <FormControl>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>
                            </FormItem>
                            <Button type='submit' className="flex items-center justify-center h-10 w-full rounded-xl    border text-lg cursor-pointer bg-gray-900 hover:bg-gray-700">
                                <p className="text-white">Login</p>
                            </Button>
                        </div>
                    </form>
                </Form>
                <p className='underline cursor-pointer' onClick={handleRegister} >Registrarse</p>
            </div>
        </div>
    );
};

export default Login;
