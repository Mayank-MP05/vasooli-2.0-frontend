import React from "react";

type inputProps = {
  icon?: any;
  size?: number;
  headerTitle?: string;
};

const IconWrapper = ({ icon, size, headerTitle }: inputProps): JSX.Element => {
  return (
    <div className="flex flex-row justify-start items-center cursor-pointer">
      <img className={`mx-2 h-${size || 12} `} src={icon} alt="icon" />
      <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-black-600 hover:underline">
        {headerTitle}
      </h4>
    </div>
  );
};

export default IconWrapper;
