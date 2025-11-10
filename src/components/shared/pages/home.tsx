import React from "react";
import { cn } from "../../../lib/utils";
import { NavLink } from "react-router";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center max-w-[1280px] mx-auto pt-10",
        className
      )}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold">Welcome to ECommerce App</h1>

        <p className="text-xl mt-4">
          This is a sample ECommerce App built using React, Redux, and Tailwind
          CSS.
        </p>
        <p className="text-xl mt-4">
          This project was created by <b>Eduard Kuruliak</b> &
          <b> Orobets Oleg</b> as a team project for the course "JavaScript
          frameworks"
        </p>
      </div>
      <NavLink
        to="/products"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        View Products
      </NavLink>
    </div>
  );
};
