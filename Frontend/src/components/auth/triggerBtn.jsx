import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import LoginForm from "./login"
import RegistrationForm from "./register"

export default function DialogDemo({ login, styles }) {
  const [isLogin, setLogin] = useState(login)
  return (
    <Dialog >
      <DialogTrigger >
        <Button className={styles} variant="outline">{isLogin ? "Login" : "Signup"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-y-auto h-screen">
        <DialogHeader>
          <DialogTitle className="text-center"> {isLogin ? "Login" : "Signup"}</DialogTitle>
        </DialogHeader>
        {isLogin ? <LoginForm /> : <RegistrationForm />}
        <div>
          {isLogin ? "Dont" : "Already"} have an account?
          <Button variant="link" onClick={() => {
            setLogin(!isLogin)
          }} >{isLogin ? "Create Account" : "Login"}</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

