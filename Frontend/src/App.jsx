import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Home from "./pages/home";
import { UseAuthStore } from "./zustand/AuthStore";
import { Toaster } from "@/components/ui/toaster";
import Layout from "./pages/layout";
import Donors from "./pages/donors";
import Request from "./pages/request";
import UserDashboard from "./pages/userDashboard";
import LoginPage from "./components/auth/login";
import SignupPage from "./components/auth/signup";
// import { db } from './firebase/firebaseconfig'
function App() {
  const { checkAuth, authUser } = UseAuthStore();
  useEffect(() => {
    checkAuth();  
  }, []);

  console.log(authUser);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={authUser ? <Home /> : <Navigate to="/" replace={true} />}
          />
          <Route
            path="/donors"
            element={authUser ? <Donors /> : <Navigate to="/" replace={true} />}
          />
          <Route
            path="/request"
            element={
              authUser ? <Request /> : <Navigate to="/" replace={true} />
            }
          />
          <Route
            path="/user/dashboard"
            element={
              authUser ? <UserDashboard /> : <Navigate to="/" replace={true} />
            }
          />
        </Route>
        <Route
          path="/"
          element={
            authUser ? <Navigate to="/home" replace={true} /> : <Landing />
          }
        />
        <Route
          path="/login"
          element={
            authUser ? <Navigate to="/home" replace={true} /> : <LoginPage />
          }
        />
        <Route
          path="/signup"
          element={
            authUser ? <Navigate to="/login" replace={true} /> : <SignupPage />
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
