import React from "react";
import { useState } from "react";

const Verification = () => {
  const people = [
    {
      id: 0,
      name: "Jane Cooper",
      details: "View",
      post: "Sr. Inspector",
      area: "location",
      verify: "Verified",
      status: "inactive",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      id: 1,
      name: "Cooper",
      details: "View",
      post: "Sr. Inspector",
      area: "location",
      verify: "Verified",
      status: "inactive",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];

  const [text, setText] = useState(people);
  const [edit, setEdit] = useState({
    id: null,
    state: false,
  });

  const [undo, setUndo] = useState("");
  console.log(undo);

  const [userStatus, setUserStatus] = useState("");

  function handleundo(person) {
    const old = person;
    setUndo(old);
  }
  return (
    <div className="flex flex-col">
      <span className="flex text-light text-4xl mx-auto my-5">
        Verification Panal
      </span>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-2 rounded-lg border-opacity-20 border-white sm:rounded-lg">
              <table className="min-w-full divide-y divide-white divide-opacity-60">
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
                  {text.map((person) => {
                    return (
                      <tr key={person.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.image}
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
                                  disabled={
                                    person.id === edit.id && edit.state === true
                                      ? false
                                      : true
                                  }
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
                                  disabled={
                                    person.id === edit.id && edit.state === true
                                      ? false
                                      : true
                                  }
                                ></input>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  ">
                          <div className="text-base  text-light text-center px-3 py-2  rounded-xl bg-darkest">
                            {person.details}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          {/* <div className="text-sm text-light text-center ">
                            {person.post}
                          </div> */}
                          <div className="text-sm text-light text-center ">
                            <input
                              type="text"
                              value={person.post}
                              className="bg-dark text-sm outline-none border-0 text-center p-0"
                              onChange={(e) => {
                                person.post = e.target.value;
                                setText([...text]);
                              }}
                              disabled={
                                person.id === edit.id && edit.state === true
                                  ? false
                                  : true
                              }
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
                              value={person.area}
                              className="bg-dark text-sm outline-none border-0 text-center p-0"
                              onChange={(e) => {
                                person.area = e.target.value;
                                setText([...text]);
                              }}
                              disabled={
                                person.id === edit.id && edit.state === true
                                  ? false
                                  : true
                              }
                            ></input>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-light text-center">
                            {person.verify}
                          </div>
                        </td>
                        <td className=" py-4 whitespace-nowrap">
                          <select
                            className="bg-darkest text-white rounded-3xl outline-none border-0"
                            onChange={(e) => setUserStatus(e.target.value)}
                            disabled={
                              person.id === edit.id && edit.state === true
                                ? false
                                : true
                            }
                          >
                            <option className=" rounded-3xl" value="active">
                              active
                            </option>
                            <option className=" rounded-3xl" value="inactive">
                              inactive
                            </option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="space-x-2">
                            {person.id === edit.id && edit.state === true ? (
                              <button
                                className="bg-light text-sm rounded-full p-3"
                                onClick={() => {
                                  setEdit({ id: null, state: false });
                                }}
                              >
                                <img
                                  src="/close.svg"
                                  alt="close"
                                  className="h-5 w-5 bg-light "
                                />
                              </button>
                            ) : (
                              <button
                                className="bg-light text-sm rounded-full p-3"
                                onClick={() => {
                                  setEdit({ id: person.id, state: true });
                                }}
                              >
                                <img
                                  src="/edit.svg"
                                  alt="edit"
                                  className="h-5 w-5 bg-light "
                                />
                              </button>
                            )}
                            {/* {!(
                              person.id === edit.id && edit.state === true
                            ) && (
                              <button
                                className="bg-light text-sm rounded-full p-3"
                                onClick={() =>
                                  setEdit({ id: person.id, state: true })
                                }
                              >
                                <img
                                  src="/edit.svg"
                                  alt="edit"
                                  className="h-5 w-5 bg-light "
                                />
                              </button>
                            )}
                            {person.id === edit.id && edit.state === true && (
                              <button
                                className="bg-light text-sm rounded-full p-3"
                                onClick={() =>
                                  setEdit({ id: person.id, state: true })
                                }
                              >
                                <img
                                  src="/close.svg"
                                  alt="close"
                                  className="h-5 w-5 bg-light "
                                />
                              </button>
                            )} */}

                            <button
                              className="bg-light rounded-full p-3"
                              onClick={() => setEdit(false)}
                            >
                              <img
                                src="/save.svg"
                                alt="save"
                                className="h-5 w-5 bg-light "
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
