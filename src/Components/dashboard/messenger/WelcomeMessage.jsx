import React from "react";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";

const Wrapper = styled(Box)({
	flexGrow: 1,
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const WelcomeMessage = () => {
	return (
		<Wrapper>
			<Typography variant="h6" sx={{ color: "gray" }}>
				To start chatting - choose conversation
			</Typography>
		</Wrapper>
	);
};

export default WelcomeMessage;
