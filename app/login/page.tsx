import Navbar from "../_components/navbar";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { SquarePlayIcon } from "lucide-react";
import { redirect } from "next/navigation";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <section className="h-screen flex flex-col bg-gradient-to-b from-black to-[#001f4a]">
      <Navbar />
      <div className="w-full h-full px-8 flex flex-col m-auto items-center justify-center gap-10">
        <div>
          <h1
            className={`${inter.className} font-bold text-white text-[32px] lg:text-[42px] xl:text-[50px] leading-tight`}
          >
            O controle financeiro pessoal com toda a{" "}
            <br className="hidden md:block" />
            praticidade para{" "}
            <span className="underline hover:text-[#081e9d]">
              organizar
            </span>{" "}
            suas finanças.
          </h1>
        </div>
        <div>
          <p
            className={`${inter.className} font-light text-[18px] lg:text-[25px] text-[#B1aaaa] sm:text-center`}
          >
            Na MAP você controla seu dinheiro em tempo real em uma solução
            <br className="hidden md:block" />
            completa, garantindo uma gestão financeira prática.
          </p>
        </div>
        <div>
          <SignInButton>
            <Button
              className={`${inter.className} font-bold text-[15px] w-[250px] h-[50px] bg-[#081e9d] hover:bg-[#28089de5]`}
            >
              Teste gratuitamente
              <SquarePlayIcon
                style={{ width: "35px", height: "35px" }}
                className="text-white"
              />
            </Button>
          </SignInButton>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
