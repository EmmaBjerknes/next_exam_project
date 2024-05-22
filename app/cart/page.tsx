import AmountSummary from "../components/Cart/AmountSummary";
import CartList from "../components/Cart/CartList";

const Cart = () => {
  return (
    <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 w-full justify-around items-center md:flex-row">
      <CartList />
      <AmountSummary />
    </div>
  );
};

export default Cart;
