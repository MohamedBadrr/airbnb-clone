import { GlobeIcon, Menu, UserCircle } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end space-x-4 text-gray-500">
      <p className="hidden md:inline cursor-pointer ">Become a host </p>
      <GlobeIcon className="cursor-pointer" />
      <div className="flex space-x-2 border-2 p-2 rounded-full"> 
        <Menu />
        <UserCircle />
      </div>
    </div>
  );
};

export default Navbar;
