import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RedirectText = styled("span")({
	color: "#00AFF4",
	cursor: "pointer",
	fontWeight: 500,
});

const RedirectInfo = props => {
	const { text, redirectText, additionalStyles = {}, redirectHandler } = props;

	return (
		<Typography
			sx={{ color: "#72767d" }}
			style={additionalStyles}
			variant="subtitle2"
		>
			{text}
			<RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
		</Typography>
	);
};

export default RedirectInfo;
