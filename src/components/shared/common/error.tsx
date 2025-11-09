import React from "react";

interface Props {
  text?: string;
}

export const Error: React.FC<Props> = ({ text }) => {
  return (
    <p className="text-center mt-10 text-red-500">
      {text || "Something went wrong"}
    </p>
  );
};
