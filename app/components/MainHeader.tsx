"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Panel from "./Panel/Panel";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import CartButton from "./Cart/CartButton";
import { CartContext } from "../utils/CartContext";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const totalInCart = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <header className="xl:px-20 sm:px-8 sm:pt-8 px-4 py-4 sticky top-0 z-50 bg-white gap-4">
      <div className="flex flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="">
          <Link href="/">
            {" "}
            <Image
              src="/essencelogo.png"
              alt="essence logo"
              width={160}
              height={100}
              priority={true}
            />
          </Link>
        </div>
        <div className="hidden sm:contents">
          <SearchBar />
        </div>
        <div className="flex gap-4">
          <CartButton itemsInCart={totalInCart} />
          <button
            onClick={togglePanel}
            className="p-1 hover:bg-[var(--accent-secondary)] transition-colors duration-300 rounded-full"
            title="open menu"
          >
            <MdMenu size={"2rem"} />
          </button>
        </div>
        {isOpen && <Panel {...{ togglePanel }} />}
      </div>
      <div className="sm:hidden flex justify-center mt-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
