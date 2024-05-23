import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import LogoutButton from "./LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SessionComponent = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <div>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default SessionComponent;
