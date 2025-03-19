import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-1 w-full">

        {/* Sign in */}
        <Link href="/signin" className="flex items-center header-button">
          Hello, Sign in
        </Link>

{/* Cart */}
        <Link href="/cart" className="header-button">
        <div className="flex items-end">
          <ShoppingCartIcon className="h-8 w-8" />
          Cart
          </div>
        </Link>
        
      </nav>
    </div>
  );
};

export default Menu;
