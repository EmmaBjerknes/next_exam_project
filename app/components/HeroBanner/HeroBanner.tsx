import Link from "next/link";
import { Button } from "../ui/button";
import HeroImage from "./Hero-Img";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[var(--badge-secondary)] w-full md:w-3/4 gap-y-2">
      <div className="flex flex-col basis-1/4 items-center justify-center text-center p-4 gap-y-2">
        <div className="flex flex-col gap-2">
          <h2>Stor vår-Rea!</h2>
          <div>
            <p>Vintern ska bort - dags för rea på utvalda produkter!</p>
          </div>
        </div>
        <Button asChild variant="cta">
          <Link href={"/products/campaign"}> Till rean</Link>
        </Button>
      </div>
      <div className="basis-3/4">
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroBanner;
