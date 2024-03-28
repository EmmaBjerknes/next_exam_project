import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import SignInAdmin from "./login-btn";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center p-4">
      <div className="container gap-4 flex items-center content-end">
        <Link href="https://www.linkedin.com/in/emma-bjerknes/" target="blank">
          <FaLinkedin size={"1.2rem"} />{" "}
        </Link>
        <Link
          href="https://github.com/EmmaBjerknes/next_exam_project"
          target="blank"
        >
          {" "}
          <FaGithub size={"1.2rem"} />{" "}
        </Link>
        <SignInAdmin />
      </div>
    </footer>
  );
};

export default Footer;
