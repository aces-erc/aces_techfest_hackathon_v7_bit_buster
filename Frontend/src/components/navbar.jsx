import React from "react";
import { Button } from "@/components/ui/button";
import ContextMenu from "./ui/contextMenu";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div>
        <h1 className="font-bold text-4xl text-tert">RedBond</h1>
      </div>
      <div className="flex flex-row justify-between w-1/3">
        <ul className="flex flex-row gap-4">
          <li>
            <Button variant="outline">SignUp</Button>
          </li>
          <li>
            <Button>Login</Button>
          </li>
        </ul>
        <ContextMenu />
      </div>
    </div>
  );
};

export default Navbar;
