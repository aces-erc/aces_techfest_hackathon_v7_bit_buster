import { LogOut, Mail, MessageSquare, User, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { axiosInstance } from "../../lib/axios";
const ContextMenu = () => {
  const handleLogout = async ()=>{
    try {
      await axiosInstance.get("/auth/logout");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback>CN</AvatarFallback>
          <AvatarImage
            src="https://static.wikia.nocookie.net/beluga-characters/images/6/64/Beluga4.jpg"
            alt="@shadcn"
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-10">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <User />
            <Link to="user/dashboard">Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="cursor-pointer">
                  <Mail />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <MessageSquare />
                  <span>copy link</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ContextMenu;
