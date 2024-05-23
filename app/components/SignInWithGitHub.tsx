"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react"

export default function SignInWithGitHub(){
    return (
        <Button onClick={() => signIn('github', {
            callbackUrl:`${window.location.origin}`
        })} className="mt-6" variant="secondary">
            Login with GitHub <Github className="w-4 h-4 ml-4" />
        </Button>
    )
}