import jwt_decode from "jwt-decode";

export const getUserInfo = () => {
	const userInfo = localStorage.getItem("discord-user");
	if (userInfo) {
		const userDetails = JSON.parse(userInfo);
		return userDetails;
	}
	return {};
};

export const Auth = token => {
	if (token) {
		const { exp } = jwt_decode(token);
		if (Date.now() >= exp * 1000) {
			return false;
		}
		return true;
	}

	return false;
};
