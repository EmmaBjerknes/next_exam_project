import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "@/app/components/ui/badge";
import Link from "next/link";

interface IProps {
  itemsInCart: number;
}

const CartButton = (props: IProps) => {
  return (
    <div className="relative">
      <button
        className="p-1 hover:bg-purple-200 transition-colors duration-300 rounded-full"
        title="cart"
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
