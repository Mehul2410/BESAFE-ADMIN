import forms from "@tailwindcss/forms";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center item-center mt-36">
      <form className="bg-darker flex flex-col py-10  w-80 h-64 space-y-6 rounded-xl drop-shadow-xl items-center">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-light placeholder-white rounded-lg w-60"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="bg-light placeholder-white rounded-lg w-60"
        />
        <input
          type="submit"
          name="Login"
          value="Login"
          className=" rounded-md h-10 w-48 flex justify-center cursor-pointer bg-dark text-white font-medium"
        />
      </form>
    </div>
  );
};

export default Login;
