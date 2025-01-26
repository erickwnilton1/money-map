import Navbar from "../_components/navbar";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex  items-center justify-center">
          <SignInButton>
            <Button
              variant="outline"
              className="w-[200px] text-purple-800 hover:text-purple-800 sm:w-[500px]"
            >
              <LogInIcon />
              Fazer login ou criar conta
            </Button>
          </SignInButton>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
