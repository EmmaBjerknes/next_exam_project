import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { navigationData } from "@/app/data/navigationData";

interface IProps {
  togglePanel: () => void;
}


const Panel = ({ togglePanel }: IProps) => {
  return (
    <>
      <div
        className="fixed top-0 right-0 w-full h-full bg-gray-300/[.5]"
        onClick={togglePanel}
        title="close"
      ></div>
      <div className="fixed z-90 pl-4 top-0 right-0 h-full w-2/4 max-w-sm bg-white text-black">
        <div className="py-4">
          <button
            onClick={togglePanel}
            className="p-1 hover:bg-purple-200 transition-colors duration-300 rounded-full"
            title="close"
          >
            <IoMdClose size={"2rem"} />
          </button>
        </div>
        <ul className="text-black text-lg w-fit">
          {navigationData.map((nav) => (
            <li key={nav.name} className="mb-4 py-1">
              <Link href={nav.path}>
                <h4
                  className="border-b-2 border-b-white hover:border-b-2 hover:border-purple-200"
                  onClick={togglePanel}
                >
                  {nav.name}
                </h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Panel;
