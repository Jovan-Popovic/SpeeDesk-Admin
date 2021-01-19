/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export const Reports = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => getUsers(), []);

  const getUsers = () =>
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        console.log(res.data);
        const { data } = res;
        setUsers(data.map((user) => ({ ...user, modal: false })));
      })
      .catch((error) => console.log(error));

  const removeReport = (event) => {
    const { id } = event.target;
    setUsers(
      users.filter((user) => {
        console.log(id, user.id);
        return user.id !== Number(id);
      })
    );
  };

  const toggleModal = (event) => {
    const { id } = event.target;
    console.log("Dio");
    setUsers(
      users.map((user) =>
        user.id === Number(id) ? { ...user, modal: !user.modal } : user
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sent
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.avatar_url}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.login}
                          </div>
                          <div className="text-sm text-gray-500">
                            {`${user.login}@gmail.com`}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Regional Paradigm Technician
                      </div>
                      <div className="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.id}min ago
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to="/"
                        id={user.id}
                        className="text-blue-500 hover:text-blue-900"
                        onClick={toggleModal}
                      >
                        View
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to="/"
                        id={user.id}
                        className="text-red-500 hover:text-red-600"
                        onClick={removeReport}
                      >
                        Remove
                      </Link>
                    </td>
                    {user.modal ? (
                      <div class="fixed z-10 inset-0 overflow-y-auto">
                        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                          <div
                            class="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                          >
                            <div
                              id={user.id}
                              class="absolute inset-0 bg-gray-500 opacity-75"
                              onClick={toggleModal}
                            ></div>
                          </div>
                          <span
                            class="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                          >
                            &#8203;
                          </span>
                          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div class="px-4 py-5 sm:px-6">
                              <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Report Info
                              </h3>
                              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                                Sent: {user.id}minutes ago
                              </p>
                            </div>
                            <div class="border-t border-gray-200">
                              <dl>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    Full name
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 capitalize sm:col-span-2">
                                    {user.login}
                                  </dd>
                                </div>
                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    Position
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Cleaner
                                  </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    Email address
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.login}@gmail.com
                                  </dd>
                                </div>
                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    Damaged Object
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Broken Lamp
                                  </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    Found at
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Room number 33
                                  </dd>
                                </div>
                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    About
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <React.Fragment />
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
/*
                      <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 transform text-left sm:block sm:p-0">
                          <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                          >
                            <div
                              id={user.id}
                              className="absolute inset-0 bg-gray-500 opacity-50"
                              onClick={toggleModal}
                            />
                          </div>

                          <div className="mx-10 bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Applicant Information
                              </h3>
                              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Personal details and application.
                              </p>
                            </div>
                            <div className="border-t border-gray-200">
                              <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Margot Foster
                                  </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Application for
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Backend Developer
                                  </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    margotfoster@example.com
                                  </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Salary expectation
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    $120,000
                                  </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                    About
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Fugiat ipsum ipsum deserunt culpa aute sint
                                    do nostrud anim incididunt cillum culpa
                                    consequat. Excepteur qui ipsum aliquip
                                    consequat sint. Sit id mollit nulla mollit
                                    nostrud in ea officia proident. Irure
                                    nostrud pariatur mollit ad adipisicing
                                    reprehenderit deserunt qui eu.
                                  </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                    Attachments
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                          {/* Heroicon name: paper-clip *
                                          <svg
                                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                          <span className="ml-2 flex-1 w-0 truncate">
                                            resume_back_end_developer.pdf
                                          </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                          <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Download
                                          </a>
                                        </div>
                                      </li>
                                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                          {/* Heroicon name: paper-clip *
                                          <svg
                                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                          <span className="ml-2 flex-1 w-0 truncate">
                                            coverletter_back_end_developer.pdf
                                          </span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                          <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Download
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                                          </div>*/
