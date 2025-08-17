import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
};
const Field: FC<Props> = ({ children, htmlFor, label }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="label font-semibold text-gray-500">
        {label}
      </label>
      {children}
    </div>
  );
};

export default Field;
