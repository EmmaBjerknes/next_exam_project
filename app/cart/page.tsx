import CartList from "../components/Cart/CartList";

const Cart = () => {
  return (
    <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 w-full justify-around md:flex-row">
      <CartList />
      <div>Prisberäkning</div>
    </div>
  );
};

export default Cart;
