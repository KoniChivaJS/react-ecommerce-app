import React from "react";
import { cn } from "../../../lib/utils";

interface Props {
  className?: string;
}

export const Loader: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "animate-pulse flex items-center justify-center",
        className
      )}
    >
      <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
    </div>
  );
};
