import React from "react";
import Button from "../reusable/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-white text-black p-4 font-bold">
      <Link href="/">Home</Link>
      <Button link="/service">Service</Button>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;
