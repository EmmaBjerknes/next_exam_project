"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { CartContext } from "@/app/utils/CartContext";
import { CartProduct } from "@/app/types/cart";
import { useUserInfo } from "@/app/utils/UserContext";

interface IProps {
  showBtn?: boolean;
  path: string;
  btnText: string;
}

const AmountSummary = (props: IProps) => {
  const { cart } = useContext(CartContext);
  const { user, setUser } = useUserInfo();

  const calculateTotals = useCallback((items: CartProduct[]) => {
    let newTotalPrice = 0;
    let newTotalOriginalPrice = 0;
    let newTotalDiscount = 0;

    items.forEach((item) => {
      const { quantity, price, discountPrice, campaign_discount_percent } =
        item;

      newTotalPrice += discountPrice
        ? quantity * discountPrice
        : quantity * price;

      newTotalOriginalPrice += quantity * price;

      if (campaign_discount_percent) {
        newTotalDiscount += Math.floor(
          quantity * price * (campaign_discount_percent / 100)
        );
      }
    });

    return {
      totalPrice: newTotalPrice,
      totalOriginalPrice: newTotalOriginalPrice,
      newTotalDiscount,
    };
  }, []);

  const [totals, setTotals] = useState({
    totalPrice: 0,
    totalOriginalPrice: 0,
    newTotalDiscount: 0,
  });

  useEffect(() => {
    const { totalPrice, totalOriginalPrice, newTotalDiscount } =
      calculateTotals(cart);
    setTotals({ totalPrice, totalOriginalPrice, newTotalDiscount });
  }, [cart, calculateTotals]);

  return (
    <Card className="h-fit">
      <CardContent className="p-6">
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-2">
            <div>Ordinarie pris:</div>
            <div className="ml-auto">{totals.totalOriginalPrice} kr</div>
          </div>
          <div className="flex items-center gap-2">
            <div>Rabatt:</div>

            <div className="ml-auto text-red-600">
              {totals.newTotalDiscount > 0
                ? `- ${totals.newTotalDiscount} kr`
                : "-"}
            </div>
          </div>
          {user?.delivery && (
            <div className="flex items-center gap-2">
              <div>Leveranskostnad:</div>
              <div className="ml-auto">{user.delivery} kr</div>
            </div>
          )}
          <hr />
          <div className="flex items-center font-semibold">
            <h3>Total</h3>
            <div className="ml-auto">{totals.totalPrice} kr</div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 ">
            <div>Varav moms:</div>
            <div className="ml-auto">{totals.totalPrice * 0.25} kr</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled={props.showBtn}>
          <Link href={props.path}>
            <h4>{props.btnText}</h4>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AmountSummary;
