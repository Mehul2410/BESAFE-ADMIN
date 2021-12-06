import React from "react";
import Header from "../components/Header";
const BaseLayout = ({ children }) => {
  return (
    <div className="bg-darkest h-screen overflow-y-scroll scrollbar-none">
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
