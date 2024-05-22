import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const AmountSummary = () => {
  // TODO:
  // - räkna ut ordinariepris
  // - räkna ut erhåller rabatt
  // - räkna ut totalen
  // - räkna ut moms
  //
  // - fixa gå vidare knapp
  return (
    <Card className="h-fit">
      <CardContent className="p-6">
        <div className="flex flex-col gap-1 text-sm">
          {/* Om rabatt finns -> visa denna*/}
          <div className="flex items-center gap-2">
            <div>Ordinarie pris:</div>
            <div className="ml-auto">$125.00</div>
          </div>

          <div className="flex items-center gap-2">
            <div>Rabatt:</div>
            <div className="ml-auto">$10.00</div>
          </div>
          <hr />
          {/* ner hit */}
          <div className="flex items-center font-semibold">
            <h3>Total</h3>
            <div className="ml-auto">$135.00</div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 ">
            <div>Varav moms:</div>
            <div className="ml-auto">$35.00</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"checkoutFlowButton"}>
          <Link href={"/cart/delivery"}>
            <h4>Gå vidare till leverans</h4>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AmountSummary;
