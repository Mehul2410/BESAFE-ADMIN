import React from "react";

function ActiveInactive({ edit }) {
  return (
    <td className=" py-4 whitespace-nowrap">
      <select
        className="bg-darkest text-white rounded-3xl outline-none border-0"
        onChange={(e) => setUserStatus(e.target.value)}
        disabled={edit ? false : true}
      >
        <option className=" rounded-3xl" value="active">
          active
        </option>
        <option className=" rounded-3xl" value="inactive">
          inactive
        </option>
      </select>
    </td>
  );
}

function PoliceRows({ person, setView }) {
  const [text, setText] = React.useState(person);
  const [edit, setEdit] = React.useState(false);
  const [undo, setUndo] = React.useState("");

  return (
    <tr key={person.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={person.avatar ? person.avatar : "./police.svg"}
              alt=""
            />
          </div>
          <div className="ml-4">
            {/* <div className="text-sm font-medium text-light">
      {person.name}
    </div> */}
            <div className="text-sm font-medium text-light">
              <input
                type="text"
                defaultValue={person.name}
                value={person.name}
                className="bg-dark outline-none border-0 p-0"
                onChange={(e) => {
                  person.name = e.target.value;
                  setText([...text]);
                  setUndo(e.target.defaultValue);
                }}
                disabled={edit ? false : true}
              ></input>
            </div>
            {/* <div className="text-sm text-light">
    {person.email}
  </div> */}
            <div className="text-sm text-light">
              <input
                type={text}
                value={person.email}
                className="bg-dark text-sm outline-none border-0  p-0"
                onChange={(e) => {
                  person.email = e.target.value;
                  setText([...text]);
                }}
                disabled={edit ? false : true}
              ></input>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  ">
        <div className="text-base  text-light text-center px-3 py-2  rounded-xl bg-darkest">
          <button
            onClick={() => {
              setView({
                state: true,
                url: person.userDetails && person.userDetails.verificationPaper,
              });
            }}
          >
            View
          </button>
        </div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        {/* <div className="text-sm text-light text-center ">
  {person.post}
</div> */}
        <div className="text-sm text-light text-center ">
          <input
            type="text"
            value={
              person.userDetails.policePost && person.userDetails.policePost
            }
            className="bg-dark text-sm outline-none border-0 text-center p-0"
            onChange={(e) => {
              person.post = e.target.value;
              setText([...text]);
            }}
            disabled={edit ? false : true}
          ></input>
        </div>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        {/* <div className="text-sm text-light text-center">
  {person.area}
</div> */}
        <div className="text-sm text-light text-center">
          <input
            type="text"
            value={
              person.userDetails.postingArea && person.userDetails.postingArea
            }
            className="bg-dark text-sm outline-none border-0 text-center p-0"
            onChange={(e) => {
              person.area = e.target.value;
              setText([...text]);
            }}
            disabled={edit ? false : true}
          ></input>
        </div>
      </td>
      <ActiveInactive edit={edit} />
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-light text-center">{person.active}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="space-x-2">
          {edit === true ? (
            <button
              className="bg-light text-sm rounded-full p-3"
              onClick={() => {
                setEdit(false);
              }}
            >
              <img src="/close.svg" alt="close" className="h-5 w-5 bg-light " />
            </button>
          ) : (
            <button
              className="bg-light text-sm rounded-full p-3"
              onClick={() => {
                setEdit(true);
              }}
            >
              <img src="/edit.svg" alt="edit" className="h-5 w-5 bg-light " />
            </button>
          )}
          <button
            className="bg-light rounded-full p-3"
            onClick={() => setEdit(false)}
          >
            <img src="/save.svg" alt="save" className="h-5 w-5 bg-light " />
          </button>
        </div>
      </td>
    </tr>
  );
}

const VerificationTable = ({ police, setView }) => {
  const [userStatus, setUserStatus] = React.useState("");
  return (
    <table className="min-w-full divide-y divide-white divide-opacity-60 ">
      <thead className="bg-darkest ">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
          >
            Details
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
          >
            Post
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
          >
            Posting Area
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
          >
            Auto Verification
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
          >
            Status
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-dark divide-y divide-gray-200">
        {police.map((person) => {
          return <PoliceRows person={person} setView={setView} />;
        })}
      </tbody>
    </table>
  );
};

export default VerificationTable;
