// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import UseLogin from '../../hooks/auth/UseLogin';
// import { useNavigate } from 'react-router-dom';
// const LoginForm = () => {

//   const [loginDetails, setLoginDetails] = useState({
//     email: "",
//     password: ""
//   })

//   const navigate = useNavigate();
//   const { login, isLoading } = UseLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginDetails
//     console.log(email, password)
//     const success = await login(email, password);
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="space-y-2">
//         <Label htmlFor="email">Email</Label>
//         <Input id="email" name="email" type="email" onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} required />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="password">Password</Label>
//         <Input id="password" name="password" onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} type="password" required />
//       </div>
//       {false && (
//         <Alert variant="destructive">
//           <AlertDescription>{"state.error"}</AlertDescription>
//         </Alert>
//       )}
//       <Button type="submit" className="w-full" disable={false}>
//         {false ? 'Logging in...' : 'Login'}
//       </Button>
//       <div className="text-center space-y-2">
//         <Button variant="link" type="button">Forgot Password?</Button>
//       </div>
//     </form>
//   )
// }

// export default LoginForm;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import UseLogin from "../../hooks/auth/UseLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = UseLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password)
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen overflow-y-hidden">
      <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-3xl font-bold text-red-800">
            Welcome Back
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Sign in to continue to your account
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="mr-2 text-red-600 w-5 h-5" />
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center">
                <Lock className="mr-2 text-red-600 w-5 h-5" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-red-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-red-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition-colors"
            >
              Sign In
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Sign Up Link */}
            <div className="text-center mt-4">
              <span className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-red-600 hover:underline font-semibold"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
