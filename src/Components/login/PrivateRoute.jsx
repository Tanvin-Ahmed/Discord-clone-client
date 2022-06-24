import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "../../hooks/auth";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
	const { userDetails } = useSelector(state => state.auth);

	const location = useLocation();
	const auth = Auth(userDetails.token);

	return auth ? (
		children
	) : (
		<Navigate to="/login" replace state={{ from: location }} />
	);
};

export default PrivateRoute;
