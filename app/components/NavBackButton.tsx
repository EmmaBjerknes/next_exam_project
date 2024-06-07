"use client";
import { useRouter } from "next/navigation";
import { IoCaretBack } from "react-icons/io5";
import { Button } from "./ui/button";

const NavBackButton = () => {
  const router = useRouter();
  return (
    <div className="w-full ml-4 hidden sm:block">
      <Button variant={"navBack"} onClick={() => router.back()}>
        <IoCaretBack />
        Tillbaka
      </Button>
    </div>
  );
};

export default NavBackButton;
