import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {

    const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
    console.log(url)
  }, [location]);

  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div>
        <h1 className="font-bold text-4xl text-tert">RedBond</h1>
      </div>
      <div className="flex flex-row justify-between w-2/5 items-center">
        <nav className="flex flex-row gap-4">
          <Link to="/donors" className={`${url === "/donors" ? "underline underline-offset-8 font-semibold" : ""}`}>View Donors</Link>
          <Link to="/request" className={`${url === "/request" ? "underline underline-offset-8 font-semibold" : ""}`}>Request Blood</Link>
          <Link to="/appointment" className={`${url === "/appointment" ? "underline underline-offset-8 font-semibold" : ""}`}>Appointments</Link>
        </nav>
        <Avatar>
          <AvatarImage src="https://static.wikia.nocookie.net/beluga-characters/images/6/64/Beluga4.jpg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
