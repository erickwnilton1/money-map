import { UserButton } from "@clerk/nextjs";
import { WalletMinimal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b-[1px] border-solid px-8 py-2">
      <div className="text-purple-800">
        <WalletMinimal />
      </div>
      <div>
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;
