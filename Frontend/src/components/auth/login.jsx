import React from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert";
const LoginForm = () => {
  return (
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
          </div>
        </form>
  )
}
export default LoginForm;