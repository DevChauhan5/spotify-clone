"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {
    //todo
  };
  return <div></div>;
};
export default Header;
