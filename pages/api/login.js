// const login = async (req, res) => {
//   console.log(req.body);
//   const response = await fetch(
//     "https://besaferestapi.herokuapp.com/api/admin",
//     {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//       },
//       // headers: headers,
//       body: JSON.stringify(req.body),
//     }
//   );
//   res.json(await response.json());
// };

// export default login;

import cookie from "cookie";

export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("access_token", req.body.access_token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    })
  );
  // res.setHeader(
  //   "Set-Cookie",
  //   cookie.serialize("refresh_token", req.body.refresh_token, {
  //     maxAge: 1000 * 60 * 60 * 24 * 30,
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: "None",
  //     path: "/",
  //   })
  // );
  res.statusCode = 200;
  res.json({ success: true });
};
