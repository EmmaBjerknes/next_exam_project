import Link from "next/link";
import { Button } from "../ui/button";
import HeroImage from "./Hero-Img";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[var(--badge-secondary)] w-full md:w-2/3 gap-y-2">
      <div className="flex flex-col basis-1/4 items-center justify-center text-center p-4 gap-y-2">
        <div className="flex flex-col gap-2">
          <h1>Sommar-Rea!</h1>
          <div>
            <p className="text-lg lg:text-xl font-semibold">
              Vintern ska bort - dags för rea på utvalda produkter!
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col mt-4 items-center justify-center gap-4">
          <Button asChild variant="cta">
            <Link href={"/products/campaign"}> Till rean</Link>
          </Button>
          <Button asChild variant="cta">
            <Link href={"/products"}>Se alla produkter</Link>
          </Button>
        </div>
      </div>
      <div className="basis-3/4">
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroBanner;
