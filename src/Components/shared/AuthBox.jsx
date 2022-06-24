import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BoxWrapper = styled(Box)({
	width: "100%",
	height: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	background: "#5865F2",
});

const ContainerBox = styled(Box)(({ theme }) => ({
	height: 400,
	background: "#36393f",
	borderRadius: "5px",
	boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
	display: "flex",
	flexDirection: "column",
	padding: "25px",
	[theme.breakpoints.down("md")]: {
		width: "80vw",
	},
	[theme.breakpoints.up("md")]: {
		width: 700,
	},
}));

const AuthBox = props => {
	return (
		<BoxWrapper>
			<ContainerBox>{props.children}</ContainerBox>
		</BoxWrapper>
	);
};

export default AuthBox;
