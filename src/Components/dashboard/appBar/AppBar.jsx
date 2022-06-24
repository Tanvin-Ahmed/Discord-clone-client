import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";

const MainContainer = styled(Box)({
	position: "absolute",
	top: 0,
	right: 0,
	height: "48px",
	width: "calc(100% - 326px)",
	borderBottom: "1px solid black",
	backgroundColor: "#36393f",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0 15px",
});

const AppBar = () => {
	return (
		<MainContainer>
			<ChosenOptionLabel />
			<DropdownMenu />
		</MainContainer>
	);
};

export default AppBar;
