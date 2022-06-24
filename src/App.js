import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import AlertNotification from "./Components/shared/AlertNotification";
import PrivateRoute from "./Components/login/PrivateRoute";

function App() {
	return (
		<>
			<BrowserRouter>
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
			</BrowserRouter>
			<AlertNotification />
		</>
	);
}

export default App;
