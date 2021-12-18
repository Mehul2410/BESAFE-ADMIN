import React from "react";
import Header from "../components/Header";
const BaseLayout = ({ children, authstatus }) => {
  return (
    <div className="bg-darkest h-screen overflow-y-scroll scrollbar-none">
      <Header authstatus={authstatus} />

      {children}
    </div>
  );
};

export default BaseLayout;
