import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import AlertNotification from "./Components/shared/AlertNotification";
import PrivateRoute from "./Components/login/PrivateRoute";
import ContextWebRTC from "./Context/ContextWebRTC";

function App() {
  return (
    <ContextWebRTC>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <AlertNotification />
    </ContextWebRTC>
  );
}

export default App;
