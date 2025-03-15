import { WalletMinimal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex px-8 py-2">
      <div className="text-white">
        <WalletMinimal size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
