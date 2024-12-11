import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Children, useState } from "react"
import LoginForm from "./login"
import RegistrationForm from "./register"

export default function DialogDemo({login}) {
  const [isLogin, setLogin] = useState(login)
  return (
    <Dialog>
      <DialogTrigger >
        <Button className="py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-8" variant="outline">{isLogin ? "Login" : "Signup"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center"> {isLogin ? "Login" : "Signup"}</DialogTitle>
        </DialogHeader>
       {isLogin? <LoginForm/>: <RegistrationForm/>}
       <div>
              {isLogin ? "Dont" : "Already"} have an account?
              <Button variant="link" type="button" onClick={()=>{
                setLogin(!isLogin)
              }} >{isLogin ? "Create Account" : "Login"}</Button>
</div>
      </DialogContent>
    </Dialog>
  )
}

