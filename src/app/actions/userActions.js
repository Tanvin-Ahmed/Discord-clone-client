import axios from "../../utils/api";
import { alertSlice } from "../slices/alertSlice";
import { authSlice } from "../slices/userSlice";

const { actions: auth } = authSlice;
const { actions: alert } = alertSlice;

export const setUserDetails = userInfo => dispatch => {
	dispatch(auth.setUserDetails(userInfo));
};

export const setLogin = (userInfo, navigate) => async dispatch => {
	try {
		const { data } = await axios.post("/user/login", userInfo);
		dispatch(auth.setUserDetails(data));
		localStorage.setItem("discord-user", JSON.stringify(data));
		navigate("/dashboard");
	} catch (error) {
		console.log(error);
		dispatch(
			alert.setAlertMessage(error?.response?.data?.message || error.message)
		);
	}
};

export const setRegister = (userInfo, navigate) => async dispatch => {
	try {
		const { data } = await axios.post("/user/register", userInfo);
		dispatch(auth.setUserDetails(data));
		localStorage.setItem("discord-user", JSON.stringify(data));
		navigate("/dashboard");
	} catch (error) {
		dispatch(
			alert.setAlertMessage(error?.response?.data?.message || error.message)
		);
	}
};

export const getRefreshToken = userDetails => dispatch => {
	try {
		const { data } = axios.post("/user/generate-refresh-token", {
			token: userDetails.token,
		});
		const userInfo = { ...userDetails, token: data };
		localStorage.setItem("discord-user", JSON.stringify(userInfo));
		dispatch(auth.setUserDetails(userInfo));
	} catch (error) {
		dispatch(
			alert.setAlertMessage(error?.response?.data?.message || error.message)
		);
	}
};
