import React, { useEffect } from "react";
import BasePage from "../layout/BasePage";
import BaseLayout from "../layout/BaseLayout";
// import Login from "../components/login/Login";
import Verification from "../components/verification/Verification";

const index = ({ adminLogin }) => {
  console.log(adminLogin);
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

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { cookies } = req;
  if (!cookies.adminLogin) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default index;
