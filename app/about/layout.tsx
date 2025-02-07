import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <h1>navbar</h1>
      {children}
      <h1>footer</h1>
    </div>
  );
};

export default layout;
