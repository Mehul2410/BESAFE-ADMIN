import forms from "@tailwindcss/forms";
import React from "react";

const Forget = () => {
  const [pass, setPass] = React.useState({ newPass: "", confirmPass: "" });

  return (
    <div className="flex justify-center item-center my-36">
      <forms
        className="bg-darker flex flex-col py-10 w-80 h-64  space-y-6 rounded-xl drop-shadow-xl items-center"
        // onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="password"
          name="newPass"
          placeholder="New Password"
          value={pass.newPass}
          onChange={(e) => setPass({ newPass: e.target.value })}
          required
          className="bg-light placeholder-white rounded-lg w-60"
        />
        <input
          type="password"
          name="confirmPass"
          placeholder="Confirm Password"
          onChange={(e) => setPass({ ...pass, confirmPass: e.target.value })}
          required
          className="bg-light placeholder-white rounded-lg w-60"
        />
        <input
          type="submit"
          name="Change Password"
          value="Change Password"
          className=" rounded-md h-10 w-48 flex justify-center cursor-pointer bg-dark text-white font-medium"
          //   onClick={loginFun}
        />
      </forms>
    </div>
  );
};

export default Forget;
