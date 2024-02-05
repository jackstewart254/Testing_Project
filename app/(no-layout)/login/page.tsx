"use client";
import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "@/api/fetchSupabase/fetchSupabase";
import { useEffect, useState } from "react";
import { authoriseLogin } from "@/api/authoriseLogin/authoriseLogin";
import { useRouter } from "next/router";

const Login = () => {
    // const router = useRouter();

    const onClickLogin = async () => {
        const { data, error } = await authoriseLogin(email, password);
        if (data) {
            // router.push('/client-portal');
        } else {
            // handle error
            console.error(error);
        }
        setEmail("");
        setPassword("");
    };

    const [isClient, setIsClient] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // const onClickLogin = () => {
    //     authoriseLogin(email, password);
    //     setTimeout(() => {
    //         setEmail("");
    //         setPassword("");
    //     }, 400);
    // };

    return (
            <div className="flex h-screen w-screen bg-osBackgroundBlue items-center justify-center flex-col">
            <div className="flex w-96 h-72 bg-white rounded-md">
                <div className="flex flex-col m-6 w-full items-center">
                <div className="w-72">
                    <button>
                        <h2 className="text-osBackgroundBlue">New? Contact us</h2>
                    </button>
                        <div className="flex flex-row items-center">
                            <div className=" h-0.5 bg-osGrey w-28"/>
                            <h2 className="mx-5 text-osGrey">Or</h2>
                            <div className=" h-0.5 bg-osGrey w-28"/>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-osBackgroundBlue">Enter email</h2>
                        <input className="bg-osOffWhite mb-4 rounded-sm w-72" value={email} onChange={onChangeEmail}/>
                    </div>
                    <div>
                        <h2 className="text-osBackgroundBlue">Enter password</h2>
                        <input className="bg-osOffWhite mb-4 rounded-sm w-72" type="password" value={password} onChange={onChangePassword}/>
                    </div>
                    <div className="items-center justify-center flex">
                    <button className=" mt-5 w-20 h-8 rounded-md justify-center" onClick={onClickLogin}>
                        <a href="/client-portal">
                            <h2 className="text-osBlue font-semibold text-lg">Login</h2>
                        </a>                    
                    </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center mt-6">
                <h1 className="text-sm font-inter text-white font-medium">Brought to you by <span className="font-bold">Only</span><span className="font-bold text-osOrange">Sport</span></h1>
            </div>
        </div>

    )
}

export default Login;