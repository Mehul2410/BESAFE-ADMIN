import React from "react";
import Login from "../components/login/Login";

const login = () => {
  return (
    <div>
      <BaseLayout>
        <BasePage>
          <Login />
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default login;
