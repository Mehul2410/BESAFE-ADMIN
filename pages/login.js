import React from "react";
import Login from "../components/login/Login";
import BaseLayout from "../layout/BaseLayout";
import BasePage from "../layout/BasePage";

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
