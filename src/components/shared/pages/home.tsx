import React from "react";
import { Container } from "../container";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  return <Container className={className}>Home</Container>;
};
