"use client";
import React, { useContext } from "react";
import AmountSummary from "@/app/components/Cart/AmountSummary";
import { Card } from "@/app/components/ui/card";
import { CartContext } from "@/app/utils/CartContext";
import { useUserInfo } from "@/app/utils/UserContext";
import ProgressBar from "@/app/components/Cart/ProgressBar";
import NavHomeButton from "@/app/components/Cart/NavHomeButton";

const Summary = () => {
  const { cart } = useContext(CartContext);
  const { user } = useUserInfo();
  const currentPage = "cart/summary";

  return (
    <div className="mx-2">
      <NavHomeButton />
      <h2>Översikt</h2>
      <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 justify-around md:flex-row">
        <Card className="grid md:grid-cols-[1fr_2fr] gap-2">
          <div className="h-fit p-6 grid gap-2">
            <h3>Dina uppgifter</h3>
            <div className="grid gap-2">
              <div>
                Namn: {user?.firstName} {user?.lastName}
              </div>
              <div>E-post: {user?.email}</div>
              <div>Telefon: {user?.phonenumber}</div>
              <div>
                Adress:
                <div>
                  {user?.address}
                  <br />
                  {user?.postnumber} {user?.city}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-l-2 ">
            <div className="grid gap-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <h3>Produkter</h3>
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
                  <h3>Betalning</h3>
                  <div className="flex items-center justify-between">
                    <div>Betalningsmetod:</div>
                    <div>
                      {user?.payment === "card" ? "Kort" : "Betalas i butik"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <AmountSummary path={"/cart/confirmation"} btnText={"Slutför köp"} />
      </div>
      <ProgressBar currentPage={currentPage} />
    </div>
  );
};

export default Summary;
