import React from "react";
import { Check, Clear } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const InvitationDecisionButtons = props => {
	const { disabled, acceptInvitationHandler, rejectInvitationHandler } = props;
	return (
		<Box sx={{ display: "flex" }}>
			<IconButton
				style={{ color: "white", cursor: "pointer" }}
				disabled={disabled}
				onClick={acceptInvitationHandler}
			>
				<Check />
			</IconButton>
			<IconButton
				style={{ color: "white", cursor: "pointer" }}
				disabled={disabled}
				onClick={rejectInvitationHandler}
			>
				<Clear />
			</IconButton>
		</Box>
	);
};

export default InvitationDecisionButtons;
