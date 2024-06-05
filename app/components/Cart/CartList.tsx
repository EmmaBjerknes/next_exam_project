"use client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/app/utils/CartContext";
import Stepper from "../ui/stepper";
import AlertDialog from "../AlertDialog";
import { CartProduct } from "@/app/types/cart";
import { LuTrash2 } from "react-icons/lu";

const CartList = () => {
  const { cart, addToCart, subtractFromCart, removeProductFromCart } =
    useContext(CartContext);

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<CartProduct>();

  const openConfirmation = (item: CartProduct) => {
    setItemToRemove(item);
    setIsConfirmationOpen(true);
  };
  const handleConfirmRemoval = () => {
    if (itemToRemove) {
      removeProductFromCart(itemToRemove);
      setIsConfirmationOpen(false);
    }
  };
  const handleCancelRemoval = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <Card className="h-fit">
      <CardContent>
        {cart.length != 0 ? (
          cart.map((item) => (
            <div key={item.id} className="grid gap-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-white w-14 h-20 md:w-24 md:h-32">
                  {
                    <Image
                      src={`https://www.mcdn.net${item.productimage}`}
                      alt={`Produktbild av ${item.name}`}
                      className="object-contain w-full h-full"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  }
                </div>
                <div className="flex-1 grid gap-1.5">
                  <div className="font-bold text-lg">{item.name}</div>

                  {item.discountPrice ? (
                    <div>
                      <div className="font-semibold text-xl text-red-600">
                        {item.discountPrice} kr
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Ord. {item.price} kr
                      </div>
                    </div>
                  ) : (
                    <div className="font-semibold">{item.price} kr</div>
                  )}
                  <Stepper
                    amount={item.quantity}
                    onSubtract={() =>
                      item.quantity != 1
                        ? subtractFromCart(item)
                        : openConfirmation(item)
                    }
                    onAdd={() => addToCart(item)}
                  />
                </div>
                <Button
                  size="sm"
                  variant="destructive"
                  title="Ta bort"
                  onClick={() => openConfirmation(item)}
                >
                  <LuTrash2 size={20} />
                </Button>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div>Din varukorg är tom</div>
        )}
      </CardContent>
      {isConfirmationOpen && (
        <AlertDialog
          message={"Är du säker på att du vill ta bort produkten?"}
          onConfirm={handleConfirmRemoval}
          onCancel={handleCancelRemoval}
        />
      )}
    </Card>
  );
};

export default CartList;
