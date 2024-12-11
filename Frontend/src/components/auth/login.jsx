import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert";
import UseLogin from '../../hooks/auth/UseLogin';
const LoginForm = () => {

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const {login, isLoading} = UseLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = loginDetails
    console.log(email, password)
    await login(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" onChange={(e) => setLoginDetails({...loginDetails, email:e.target.value})} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})} type="password" required />
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