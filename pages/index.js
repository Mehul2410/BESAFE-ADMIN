import React, { useEffect } from "react";
import BasePage from "../layout/BasePage";
import BaseLayout from "../layout/BaseLayout";
// import Login from "../components/login/Login";
import Verification from "../components/verification/Verification";
import { data } from "autoprefixer";

const index = ({ authstatus, police }) => {
  return (
    <div>
      <BaseLayout authstatus={authstatus}>
        <BasePage>
          <Verification police={police} />
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const { cookies } = req;
  if (!cookies.access_token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  let police;
  let data;
  police = await fetch("https://besaferestapi.herokuapp.com/api/getAllPolice", {
    method: "GET",
    headers: {
      Accept: "application/json",
      // authorization: `Bearer ${cookies.access_token}`,
    },
  });
  data = await police.json();
  if (data.success) {
    return { props: { authstatus: true, police: data.user } };
  }
  return { props: { authstatus: true, police: data.user } };
};

export default index;

// let police;
// let data;
// try {
//   police = await fetch(
//     "https://besaferestapi.herokuapp.com/api/getAllPolice",
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         authorization: `Bearer ${cookies.access_token}`,
//       },
//     }
//   );
//   data = await police.json();
//   console.log(data);
//   if (data.success) {
//     return { props: { authstatus: true, police: data.user } };
//   }
//   try {
//     const refresh = await fetch(
//       "https://besaferestapi.herokuapp.com/api/refresh",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           refresh: cookies.refresh_token,
//         }),
//       }
//     );
//     const tokens = await refresh.json();
//     if (tokens.success) {
//       await fetch("/api/login", {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(tokens),
//       });

//       police = await fetch(
//         "https://besaferestapi.herokuapp.com/api/getAllPolice",
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             authorization: `Bearer ${tokens.access_token}`,
//           },
//         }
//       );
//       const Pdata = police.json();
//       return { props: { authstatus: true, police: Pdata.user } };
//     }
//   } catch (error) {
//     console.log(error);
//   }
// } catch (error) {
//   console.log(error);
// }
