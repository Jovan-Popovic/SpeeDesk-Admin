/* eslint-disable jsx-a11y/anchor-is-valid */

export const Header = () => (
  <div className="relative bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
        <div className="p-4 flex flex-row items-center justify-between">
          <img className="h-10 w-auto mr-3" src="../favicon.ico" alt="" />
          <a
            href="#"
            className="whitespace-nowrap text-2xl text-base font-medium text-gray-500 hover:text-gray-900"
          >
            SpeeDesk
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-green-400 to-blue-500"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  </div>
);
