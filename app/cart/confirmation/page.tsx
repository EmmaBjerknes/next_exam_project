"use client";
import AmountSummary from "@/app/components/Cart/AmountSummary";
import { CartContext } from "@/app/utils/CartContext";
import { useUserInfo } from "@/app/utils/UserContext";
import React, { useContext } from "react";

const Confirmation = () => {
  const { cart } = useContext(CartContext);
  const { user } = useUserInfo();

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-xl font-bold mb-4">Dina uppgifter</h2>
          <div className="grid gap-2">
            <div>
              <span className="font-medium">Namn:</span> {user?.firstName}
              {user?.lastName}
            </div>
            <div>
              <span className="font-medium">E-post:</span> {user?.email}
            </div>
            <div>
              <span className="font-medium">Telefon:</span> {user?.phonenumber}
            </div>
            <div>
              <span className="font-medium">Adress:</span>
              <div>
                {user?.address}
                <br />
                {user?.postnumber} {user?.city}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-xl font-bold mb-4">Översikt</h2>

          <div className="grid gap-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="font-medium">Produkter</h3>
                <div className="grid gap-2">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div>{item.name}</div>
                      <div>
                        {item.quantity} x{" "}
                        {item.discountPrice ? item.discountPrice : item.price}{" "}
                        kr
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="font-medium">Betalning</h3>
                <div className="flex items-center justify-between">
                  <div>Betalningsmetod:</div>
                  <div>
                    {user?.payment === "card" ? "Kort" : "Betalas i butik"}
                  </div>
                </div>
              </div>
              <AmountSummary path={""} btnText={"Slutför köp"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
