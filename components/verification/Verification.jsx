import React from "react";
import { useState } from "react";
import VerificationTable from "./VerificationTable";

const Verification = ({ police }) => {
  console.log(police);
  const [view, setView] = useState({
    url: "",
    state: false,
  });

  return (
    <div className="flex flex-col">
      <span className="flex text-light text-4xl mx-auto my-5">
        Verification Panal
      </span>
      <div className="flex flex-col relative ">
        {view.state && (
          <div className="absolute flex bg-light items-center rounded-lg left-44 p-7 z-30 ">
            <img className="h-5/6 rounded-lg" src={view.url} />
            <img
              className=" absolute h-5 w-5 top-2 right-2  cursor-pointer"
              onClick={() => setView({ state: true })}
              src="./close.svg"
            />
          </div>
        )}
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-2 rounded-lg border-opacity-20 border-white sm:rounded-lg">
              <VerificationTable police={police} setView={setView} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
