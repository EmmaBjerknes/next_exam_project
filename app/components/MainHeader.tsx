"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Panel from "./Panel/Panel";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import CartButton from "./Cart/CartButton";
import { CartContext } from "../utils/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const { cart } = useContext(CartContext);
  const totalInCart = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <header className="flex flex-row items-center justify-between p-4 relative top-0 bg-white gap-4">
      <div className="container gap-4 flex items-center">
        <Image
          src="/favicon.ico"
          alt="Company Logo here"
          width={40}
          height={40}
        />
        <h1>
          <Link href="/">Essence</Link>
        </h1>
      </div>
      <CartButton itemsInCart={totalInCart} />
      <div>
        <button
          onClick={togglePanel}
          className="p-1 hover:bg-purple-200 transition-colors duration-300 rounded-full"
          title="open menu"
        >
          <MdMenu size={"2rem"} />
        </button>
      </div>
      {isOpen && <Panel {...{ togglePanel }} />}
    </header>
  );
};

export default Header;
