import React from "react";
import { CarProvider } from "./utils/CarContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <CarProvider>
        {/* <AuthProvider> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}

          <Route path="/" element={<LandingPage />} />
          <Route element={<PrivateRoutes />}>
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          <Route path="/changepassword" element={<ChangePasswordForm />} /> */}
          </Route>
        </Routes>
        {/* </AuthProvider> */}
      </CarProvider>
    </Router>
  );
}
