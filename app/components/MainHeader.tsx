"use client";
import React, { useState } from "react";
import Image from "next/image";
import Panel from "./Panel/Panel";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row items-center justify-between p-4 sticky top-0 bg-white">
      <div className="container gap-4 flex items-center">
        <Image
          src="/favicon.ico"
          alt="Company Logo here"
          width={40}
          height={40}
        />
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold">
          <Link href="/">Essence</Link>
        </h1>
      </div>
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
