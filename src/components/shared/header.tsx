import React from "react";
import { NavigationItem } from "./navigation-item";
import { Container } from "./container";

interface Props {
  className?: string;
}

export interface NavItem {
  label: string;
  link: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Header: React.FC<Props> = ({ className }) => {
  const navigateItems: NavItem[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Products",
      link: "/products",
    },
  ];

  return (
    <div className={`${className} w-full shadow-sm h-[50px] flex items-center`}>
      <Container className="flex justify-center items-center gap-7">
        {navigateItems.map((item, index) => (
          <NavigationItem key={index} navigationItem={item} />
        ))}
      </Container>
    </div>
  );
};
