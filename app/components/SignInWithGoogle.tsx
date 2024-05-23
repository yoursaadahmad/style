"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"

export default function SignInWithGoogle(){
    return(
        <Button onClick={() => signIn('google', {
            callbackUrl:`${window.location.origin}`
        })} variant="secondary" className="mt-6">
            Login with Google 
        </Button>
    )
}