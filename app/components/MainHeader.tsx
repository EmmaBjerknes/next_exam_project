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
    <header className="flex flex-row items-center justify-between p-4">
      <Image
        src="/favicon.ico"
        alt="Company Logo here"
        width={40}
        height={40}
      />
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Essence</Link>
        </h1>
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
      </div>
    </header>
  );
};

export default Header;
