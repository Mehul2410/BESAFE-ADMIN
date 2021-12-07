import React from "react";
import BasePage from "../layout/BasePage";
import BaseLayout from "../layout/BaseLayout";
// import Login from "../components/login/Login";
import Verification from "../components/verification/Verification";

const index = () => {
  return (
    <div>
      <BaseLayout>
        <BasePage>
          <Verification />
        </BasePage>
      </BaseLayout>
    </div>
  );
};
export default index;
