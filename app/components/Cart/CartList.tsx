"use client";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IoMdTrash } from "react-icons/io";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/app/utils/CartContext";
import Stepper from "../ui/stepper";
import AlertDialog from "../AlertDialog";
import { CartProduct } from "@/app/types/cart";

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
    <Card>
      <CardHeader>
        <CardTitle>Din varukorg</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.map((item) => (
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
                <div className="font-medium">{item.name}</div>

                {item.discountPrice ? (
                  <div>
                    <div className="font-semibold text-red-600">
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
                  onSubtract={() => subtractFromCart(item)}
                  onAdd={() => addToCart(item)}
                />
              </div>
              <Button
                size="sm"
                variant={"remove"}
                title="Ta bort"
                onClick={() => openConfirmation(item)}
              >
                <IoMdTrash />
              </Button>
            </div>
            <hr />
          </div>
        ))}
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
