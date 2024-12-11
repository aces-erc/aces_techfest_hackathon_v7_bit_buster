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

export default function DialogDemo({buttonText}) {
  const [btntext, SetBtnText] = useState(buttonText)
  console.log(buttonText)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-8" variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center"> anish</DialogTitle>

        </DialogHeader>
        <form action={""} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          {false && (
            <Alert variant="destructive">
              <AlertDescription>{"state.error"}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full" disable={false}>
            {false ? 'Logging in...' : 'Login'}
          </Button>
          <div className="text-center space-y-2">
            <Button variant="link" type="button">Forgot Password?</Button>
            <div>
              Don't have an account?{' '}
              <Button variant="link" type="button">Create Account</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
