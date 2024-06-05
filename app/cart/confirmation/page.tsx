"use client";
import React, { useEffect, useContext } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { CartContext } from "@/app/utils/CartContext";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const Confirmation = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
    localStorage.removeItem("user");
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <div className="flex flex-col space-y-2">
          <h2>Tack för din order!</h2>
          <p>
            Jag uppskattar att du har tagit dig tid att gå igenom hela
            kassaflödet.
          </p>
          <Button className="mx-auto">
            <Link href={"/"}>
              <h4>Till första sidan</h4>
            </Link>
          </Button>
        </div>
        <div className="flex justify-end">
          <p className="text-sm text-gray-500">
            Med vänliga hälsningar,
            <br />
            Essence // Emma
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Confirmation;
