import React from "react";
import Login from "../components/login/Login";
import BaseLayout from "../layout/BaseLayout";
import BasePage from "../layout/BasePage";

const login = () => {
  return (
      <BaseLayout>
        <BasePage>
          <Login />
        </BasePage>
      </BaseLayout>
  );
};

export default login;
