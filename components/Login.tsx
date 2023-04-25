'use client'
import {signIn} from "next-auth/react"
import Image from "next/image";

function Login (){
    return (
        <div className="bg-[blue] h-screen flex flex-col items-center">
            <Image 
                src= "https://links.papareact.com/t4i"
                height={400}
                width={400}
                alt="logo"
            />
            <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">
                Sign In to use CaliGPT
            </button>
        </div>
    )

}

export default Login;