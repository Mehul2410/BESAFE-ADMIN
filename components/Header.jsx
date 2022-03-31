import React, { useState } from "react";

const Header = ({ authstatus }) => {
  const [auth, setAuth] = useState(authstatus ? authstatus : false);

  return (
    <div>
      <div className="bg-dark flex h-20">
        <h2 className="m-auto  text-white text-2xl">Admin Panel</h2>
        {auth ? (
          <span className="cursor-pointer my-auto mr-7 py-2 px-7 bg-darkest text-white rounded-lg">
            logout
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
