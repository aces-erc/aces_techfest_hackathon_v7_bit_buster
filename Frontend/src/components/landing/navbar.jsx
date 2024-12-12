import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menu,
  X,
  Users,
  HandHeart,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setUrl(location.pathname);
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const NAV_LINKS = [
    { href: "/donors", label: "View Donors", icon: Users },
    { href: "/request", label: "Request Blood", icon: HandHeart },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="RedBond Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`
          fixed inset-0 bg-  p-6 md:static md:bg-transparent md:p-0
          ${isMenuOpen ? "block" : "hidden"} md:block
        `}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  flex items-center gap-2 text-gray-600 hover:text-red-600 
                  transition-colors duration-200
                  ${url === link.href ? "text-red-600 font-semibold" : ""}
                `}
              >
                <link.icon className="h-5 w-5 md:hidden" />
                <span>{link.label}</span>
              </Link>
            ))}

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-red-50"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/api/placeholder/40/40" alt="User" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:block">Username</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
