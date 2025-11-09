import React from "react";
import { Container } from "../container";
import { NavLink } from "react-router";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="flex flex-col items-center justify-center max-w-[1280px] mx-auto">
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
    </Container>
  );
};
