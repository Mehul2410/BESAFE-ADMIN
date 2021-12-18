import forms from "@tailwindcss/forms";
import { useRouter } from "next/router";
import React from "react";

const Login = () => {
  const router = useRouter();
  const [loginDetail, setLoginDetail] = React.useState({
    email: "",
    password: "",
  });

  async function loginFun() {
    try {
      const res = await fetch("http://localhost:8000/admin-sign-in", {
        method: "post",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(loginDetail),
      });
      const result = await res.json();
      console.log(result);
      if (result.success === true) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center item-center my-36">
      <form
        className="bg-darker flex flex-col py-10 w-80 h-64  space-y-6 rounded-xl drop-shadow-xl items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginDetail.email}
          onChange={(e) => setLoginDetail({ email: e.target.value })}
          required
          className="bg-light placeholder-white rounded-lg w-60"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setLoginDetail({ ...loginDetail, password: e.target.value })
          }
          required
          className="bg-light placeholder-white rounded-lg w-60"
        />
        <input
          type="submit"
          name="Login"
          value="Login"
          className=" rounded-md h-10 w-48 flex justify-center cursor-pointer bg-dark text-white font-medium"
          onClick={loginFun}
        />
      </form>
    </div>
  );
};

export default Login;
