"use client";
import { useContext } from "react";
import AmountSummary from "../components/Cart/AmountSummary";
import CartList from "../components/Cart/CartList";
import { CartContext } from "../utils/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const productsInCart = !cart.length;
  return (
    <div className="mx-2">
      <h2>Din varukorg</h2>
      <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 justify-around md:flex-row">
        <CartList />
        <AmountSummary
          showBtn={productsInCart}
          btnText="Gå vidare till leveranssätt"
          path="/cart/delivery"
        />
      </div>
    </div>
  );
};

export default Cart;
