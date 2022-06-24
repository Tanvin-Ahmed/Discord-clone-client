import { Button } from "@mui/material";
import React from "react";

const CustomPrimaryButton = props => {
	const {
		label = "",
		additionalStyles = {},
		disabled = false,
		onClick = () => {},
	} = props;

	return (
		<Button
			variant="contained"
			sx={{
				backgroundColor: "#5865F2",
				color: "white",
				textTransform: "none",
				fontSize: "16px",
				fontWeight: 500,
				width: "100%",
				height: "40px",
			}}
			style={additionalStyles}
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</Button>
	);
};

export default CustomPrimaryButton;
