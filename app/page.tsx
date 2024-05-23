
import { getServerSession } from "next-auth";
import Hero from "./components/Hero"
import Newest from "./components/Newest";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export const dynamic = "force-dynamic";

export default async function Home() {

  const session = await getServerSession(authOptions);
  return (

    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      {session ? (
        <div>
          
          <LogoutButton />
        </div>

      ):(
        <div>
          
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      )}
      
   <Hero />
   <Newest />
   
   </div>
   
  );
}
