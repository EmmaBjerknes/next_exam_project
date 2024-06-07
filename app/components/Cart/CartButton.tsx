import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";
import { CartContext } from "@/app/utils/CartContext";
import { useContext } from "react";

interface IProps {
  itemsInCart: number;
}

const CartButton = (props: IProps) => {
  const { cart } = useContext(CartContext);
  const productsInCart = !!cart.length;
  return (
    <div className="relative">
      <button
        className="p-1 hover:bg-[var(--accent-secondary)] transition-colors duration-300 rounded-full"
        title={productsInCart ? "Kundvagn" : "Din kundvagn är tom"}
      >
        <Link href="/cart" className="flex items-center">
          <MdOutlineShoppingCart size={"2rem"} />
          {props.itemsInCart > 0 && (
            <Badge variant="cart">{props.itemsInCart}</Badge>
          )}
        </Link>
      </button>
    </div>
  );
};

export default CartButton;
