import { Box } from "@mui/system";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";

const OnlineIndicator = () => {
	return (
		<Box
			style={{
				color: "#3ba55d",
				display: "flex",
				alignItems: "center",
				position: "absolute",
				right: "5px",
			}}
		>
			<FiberManualRecord />
		</Box>
	);
};

export default OnlineIndicator;
