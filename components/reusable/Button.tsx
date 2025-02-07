import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
  link: string;
}

const Button: NextPage<Props> = ({ children, link }) => {
  return (
    <a href={link} className="px-3 py-2 bg-green-400 text-black rounded-sm">
      {children}
    </a>
  );
};

export default Button;
