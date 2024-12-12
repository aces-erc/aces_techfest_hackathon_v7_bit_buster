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
import { UseAuthStore } from "../../zustand/AuthStore";
const ContextMenu = () => {

    const { authUser } = UseAuthStore();
    const {profilePicture, firstName, lastName} = authUser;

  const handleLogout = async (e) => {
    e.preventDefault();
   try{
    axiosInstance.post("/auth/logout").then((res) => {
      console.log(res);
      window.location.href = "/";
    });
   }
   catch(err){
    console.log(err.message)
   }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
          <AvatarImage
            src={profilePicture}
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
