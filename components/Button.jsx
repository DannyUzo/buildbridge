import React from "react";

export const Button = ({ title, variant }) => {
  return (
    <button
      className={`px-4 py-2  w-40 border border-slate-300 rounded-3xl ${variant} hover:text-white transition-colors text-secondary-white`}
    >
      {title}
    </button>
  );
};
