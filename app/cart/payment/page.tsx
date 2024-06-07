"use client";
import { useState } from "react";
import AmountSummary from "@/app/components/Cart/AmountSummary";
import { Card, CardContent } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radiogroup";
import { useUserInfo } from "@/app/utils/UserContext";
import { CreditCardIcon, StoreIcon } from "lucide-react";
import ProgressBar from "@/app/components/Cart/ProgressBar";
import NavHomeButton from "@/app/components/Cart/NavHomeButton";

const Payment = () => {
  const [showbtn, setShowbtn] = useState(true);
  const { user, setUser } = useUserInfo();
  const currentPage = "cart/payment";

  const onSubmit = (value: string) => {
    const updatedUser = { ...user, payment: value };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setShowbtn(false);
  };

  return (
    <>
      <div className="w-full lg:w-3/5">
        <NavHomeButton />
      </div>
      <div className="mx-4">
        <h2>Betalningssätt</h2>
        <h4>Välj ditt betalningssätt.</h4>

        <div className="flex flex-col gap-8 p-4 mt-2 md:mt-8 justify-around md:flex-row">
          <Card className="h-fit">
            <CardContent className="p-2 sm:p-6">
              <RadioGroup
                defaultValue=""
                className="grid grid-cols-2 justify-center gap:2 sm:gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="peer sr-only"
                    onClick={(event) => onSubmit(event.currentTarget.value)}
                  />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center text-lg justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900"
                  >
                    <CreditCardIcon className="mb-3 h-6 w-6" />
                    Kort
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="instore"
                    id="instore"
                    className="peer sr-only"
                    onClick={(event) => onSubmit(event.currentTarget.value)}
                  />
                  <Label
                    htmlFor="instore"
                    className="flex flex-col items-center text-lg justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900"
                  >
                    <StoreIcon className="mb-3 h-6 w-6" />
                    Betala i butik
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <AmountSummary
            btnText="Gå vidare till summering"
            path="/cart/summary"
            showBtn={showbtn}
          />
        </div>
        <ProgressBar currentPage={currentPage} />
      </div>
    </>
  );
};

export default Payment;
