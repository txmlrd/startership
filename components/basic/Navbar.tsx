import React from "react";
import Button from "../reusable/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-white text-black p-4 font-bold">
      <a href="/">Home</a>
      <Button link="/service">Service</Button>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;
