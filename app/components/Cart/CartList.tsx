"use client";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IoMdTrash } from "react-icons/io";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/app/utils/CartContext";

const CartList = () => {
  const { cart } = useContext(CartContext);
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

                <div>Antal: {item.quantity}</div>
                {/* Dropdown */}
              </div>
              <Button size="sm">
                <IoMdTrash className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </Button>
            </div>
            <hr />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CartList;