import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const MainContainer = styled(Box)({
	display: "flex",
	flexGrow: 1,
	marginTop: "48px",
	backgroundColor: "#36393f",
});

const Messenger = () => {
	return <MainContainer>Messenger</MainContainer>;
};

export default Messenger;
