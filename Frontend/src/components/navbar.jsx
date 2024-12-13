import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ContextMenu from "./ui/contextMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
    console.log(url);
  }, [location]);

  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center sticky top-0 z-20 backdrop-blur-md">
      <div>
       <Link to="/home"><img src="/images/logo.png" className="w-auto h-20"/></Link> 
      </div>
      <div className="flex flex-row justify-bw-2/5 items-center">
        <nav className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/donors"
            className={`min-w-fit justify-center self-center ${
              url === "/donors"
                ? "underline underline-offset-8 font-semibold"
                : ""
            }`}
          >
            View Donors
          </Link>
          <Link
            to="/request"
            className={`min-w-fit justify-center self-center ${
              url === "/request"
                ? "underline underline-offset-8 font-semibold"
                : ""
            }`}
          >
            Request Blood
          </Link>
          
          <Link className="flex justify-center align-middle gap-2">
            <ContextMenu className="absolute z-10001" />
            <span className="self-center  sm:hidden">username</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
