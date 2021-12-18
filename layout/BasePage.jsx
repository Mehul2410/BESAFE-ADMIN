import React from "react";

const BasePage = (props) => {
  const { children, className = "" } = props;
  return (
    <div className={`base-page h-screen ${className}`} >
      <div className="max-w-7xl m-auto h-full px-5 relative">{children}</div>
    </div>
  );
};

export default BasePage;
