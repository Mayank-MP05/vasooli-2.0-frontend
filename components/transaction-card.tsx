import React from "react";

const TransactionCard = () => {
  return (
    <div className="p-3 m-2 bg-white flex flex-col rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            🖋 Title: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad, aliquam.
          </h5>

          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
            📜 Category Description: Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Laboriosam aspernatur officia sed impedit delectus. Odit ipsa
            rerum, aliquam aspernatur autem nostrum. At asperiores, quos odit
            ipsum perferendis omnis saepe earum.
          </p>

          <div className="flex flex-row">
            <div>🌀 Category: Lorem, ipsum.</div>
            <div className="ml-auto mr-2">📅 Date: Lorem, ipsum.</div>
          </div>
        </div>
        <div className="flex flex-col w-[20%] text-2xl font-bold bg-red-400 rounded-3xl justify-center items-center">
          ₹100
        </div>
      </div>
      <div className="flex flex-row justify-center items-center pt-2 mt-1 -mb-1 bg-blue-200">
        This is only for Vasooli
      </div>
    </div>
  );
};

export default TransactionCard;
