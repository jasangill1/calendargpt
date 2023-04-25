'use client'
import {signIn} from "next-auth/react"
import Image from "next/image";

function Login (){
    return (
        <div>
            <Image 
                src= "https://links.papareact.com/t4i"
                height={400}
                width={400}
                alt="logo"
            />
            <button>Sign In to use ChatGPT</button>
        </div>
    )

}

export default Login;