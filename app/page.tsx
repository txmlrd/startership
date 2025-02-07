import Button from "@/components/reusable/Button";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p>ini adalah page landing page</p>

      <Button link="/about">Menuju ke About </Button>
    </div>
  );
};

export default page;
