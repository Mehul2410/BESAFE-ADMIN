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

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { cookies } = req;
  if (cookies.access_token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { authstatus: true } };
};

export default login;
