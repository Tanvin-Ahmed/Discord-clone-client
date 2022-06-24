import { Typography } from "@mui/material";
import React from "react";

const LoginPageHeader = () => {
	return (
		<>
			<Typography variant="h5" color="white">
				Welcome back!
			</Typography>
			<Typography sx={{ color: "#b9bbbe" }}>
				We are happy that you are with us!
			</Typography>
		</>
	);
};

export default LoginPageHeader;
