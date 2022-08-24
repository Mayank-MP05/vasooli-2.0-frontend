import React from "react";

type inputProps = {
  icon?: string;
  size?: number;
  headerTitle?: string;
};

const IconWrapper = ({ icon, size, headerTitle }: inputProps): JSX.Element => {
  return (
    <div className="flex flex-row justify-start items-center cursor-pointer">
      <div className="flex flex-row p-1 justify-center items-center">
        <img className={`mx-2 h-${size || 12} `} src={icon} alt="icon" />
        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-black-600 hover:underline">
          {headerTitle}
        </h4>
      </div>

      <button
        type="button"
        className="flex ml-auto flex-row p-1 justify-center items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <svg
          className="mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
            fill="rgba(255,255,255,1)"
          />
        </svg>

        <p className="font-bold mx-auto">Create New</p>
      </button>
    </div>
  );
};

export default IconWrapper;
