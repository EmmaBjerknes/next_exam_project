"use client";
import AmountSummary from "@/app/components/Cart/AmountSummary";
import { Card, CardContent } from "@/app/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radiogroup";
import { useUserInfo } from "@/app/utils/UserContext";
import { useState } from "react";
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Label } from "@/app/components/ui/label";
import ProgressBar from "@/app/components/Cart/ProgressBar";
import NavHomeButton from "@/app/components/Cart/NavHomeButton";

const Delivery = () => {
  const [showbtn, setShowbtn] = useState(true);
  const { user, setUser } = useUserInfo();
  const currentPage = "cart/delivery";

  const onSubmit = (value: string) => {
    const updatedUser = { ...user, delivery: value };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setShowbtn(false);
  };

  return (
    <>
      <div className="w-full lg:w-3/5">
        <NavHomeButton />
      </div>
      <div>
        <h2>Välj leveranssätt</h2>
        <div className="flex flex-col gap-8 p-4 mt-2 justify-around sm:flex-row">
          <Card className="h-fit">
            <CardContent className="p-6">
              <RadioGroup defaultValue="">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="0"
                    onClick={(event) => onSubmit(event.currentTarget.value)}
                  />
                  <Label>
                    <div className="flex gap-2 items-center text-lg">
                      <FaStoreAlt size={24} />
                      Hämta i butik - 0kr
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="149"
                    onClick={(event) => onSubmit(event.currentTarget.value)}
                  />
                  <Label>
                    <div className="flex gap-2 items-center text-lg">
                      <MdOutlineLocalShipping size={24} />
                      Hemleverans - 149kr
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          <AmountSummary
            btnText="Gå vidare till kunduppgifter"
            path="/cart/customerInformation"
            showBtn={showbtn}
          />
        </div>
        <ProgressBar currentPage={currentPage} />
      </div>
    </>
  );
};

export default Delivery;
