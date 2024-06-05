import { IoCaretBack } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";

const NavHomeButton = () => {
  return (
    <div>
      <Button variant="outline" className="relative mb-2 sm:absolute sm:left-2">
        <Link
          href={"/"}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <IoCaretBack />
          <h4>Fortsätt handla</h4>
        </Link>
      </Button>
    </div>
  );
};

export default NavHomeButton;
