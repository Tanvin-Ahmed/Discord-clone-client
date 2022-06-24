import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	acceptFriendInvitation,
	rejectFriendInvitation,
} from "../../../../app/actions/friendsActions";
import Avatar from "../../../shared/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

const PendingInvitationsListItem = props => {
	const dispatch = useDispatch();
	const { id, username, mail } = props;

	const [buttonsDisabled, setButtonsDisabled] = useState(false);

	const handleAcceptInvitation = () => {
		dispatch(acceptFriendInvitation({ id, username }));
		setButtonsDisabled(true);
	};

	const handleRejectInvitation = () => {
		dispatch(rejectFriendInvitation({ id, username }));
		setButtonsDisabled(true);
	};
	return (
		<Tooltip title={mail}>
			<div style={{ width: "100%" }}>
				<Box
					sx={{
						width: "100%",
						height: "42px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: "10px",
					}}
				>
					<Avatar username={username} />
					<Typography
						style={{
							marginLeft: "7px",
							fontWeight: 700,
							color: "#8e9297",
							flexGrow: 1,
						}}
						variant="subtitle1"
					>
						{username}
					</Typography>
					<InvitationDecisionButtons
						disabled={buttonsDisabled}
						acceptInvitationHandler={handleAcceptInvitation}
						rejectInvitationHandler={handleRejectInvitation}
					/>
				</Box>
			</div>
		</Tooltip>
	);
};

export default PendingInvitationsListItem;
