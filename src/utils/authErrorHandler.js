export const logout = () => {
	localStorage.removeItem("discord-user");
	window.location.pathname = "/login";
};

export const authError = error => {
	const statusCode = error?.response?.status || error.statusCode;

	if (statusCode === 401 || statusCode === 403) {
		logout();
	}
};
