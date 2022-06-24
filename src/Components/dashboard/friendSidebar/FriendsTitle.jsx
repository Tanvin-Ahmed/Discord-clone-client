import { Typography } from "@mui/material";
import React from "react";

const FriendsTitle = ({ title }) => {
	return (
		<Typography
			style={{
				marginTop: "10px",
				fontSize: "14px",
				color: "#8e9297",
				textTransform: "uppercase",
			}}
		>
			{title}
		</Typography>
	);
};

export default FriendsTitle;
