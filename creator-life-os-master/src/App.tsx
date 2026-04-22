import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { LoginPage } from "./features/auth/LoginPage";
import { AppLayout } from "./components/layout/AppLayout";
import { LandingPage } from "./features/landing/LandingPage";

export default function App() {
  const { user, isConfigured } = useAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={isConfigured && user ? <Navigate to="/app" replace /> : <LandingPage />} 
        />
        <Route 
          path="/login" 
          element={isConfigured && user ? <Navigate to="/app" replace /> : <LoginPage />} 
        />
        <Route 
          path="/app/*" 
          element={<AppLayout />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
