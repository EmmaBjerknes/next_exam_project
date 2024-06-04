"use client";
import AmountSummary from "../components/Cart/AmountSummary";
import CartList from "../components/Cart/CartList";

const Cart = () => {
  return (
    <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 justify-around md:flex-row">
      <CartList />
      <AmountSummary
        btnText="Gå vidare till leveranssätt"
        path="/cart/delivery"
      />
    </div>
  );
};

export default Cart;
