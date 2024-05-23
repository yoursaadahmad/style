"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export default function SignInForm(){

    const [email, setEmail] = useState<null | string>(null);

    async function SignInWithEmail(){
        const signInResult = await signIn("email", {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false,
        })

        if(!signInResult?.ok){
            return toast({
                title:"Something Happened, Can't Get You Logged In",
                description: "Error happened while logging in, Try Again",
                variant:"destructive",
            });
        }

        return toast({
            title:"Check your Email",
            description:"A magic link has been sent to your email",
        })
    }
    return(
        <form action={SignInWithEmail}>
            <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="name@example.com"  />
            </div>
            <Button type="submit" className="mt-4 w-full">Login with Email</Button>
        </form>
    )
}