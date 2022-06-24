import React, { useEffect, useState, useTransition } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
	Box,
} from "@mui/material";
import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import InputWithLabel from "../../shared/InputWithLabel";
import {
	sendFriendInvitation,
	setSuggestPeople,
} from "../../../app/actions/friendsActions";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../shared/Avatar";

const AddFriendDialog = props => {
	const dispatch = useDispatch();
	const { isDialogOpen, closeDialogHandler } = props;
	const { suggestedPeople } = useSelector(state => state.friends);

	const [panding, setTransition] = useTransition();
	const [name, setName] = useState("");

	useEffect(() => {
		if (!name) return;
		setTransition(() => {
			dispatch(setSuggestPeople(name));
		});
	}, [name, dispatch]);

	const handleCloseDialog = () => {
		closeDialogHandler();
		setName("");
	};

	const handleSendInvitation = mail => {
		dispatch(
			sendFriendInvitation({ targetMailAddress: mail }, handleCloseDialog)
		);
	};

	return (
		<div>
			<Dialog open={isDialogOpen} onClose={handleCloseDialog}>
				<DialogTitle>
					<Typography>Invite a friend</Typography>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Enter e-mail address of friend which you would like to invite
					</DialogContentText>
					<InputWithLabel
						label="Name"
						type="text"
						value={name}
						setValue={setName}
						placeholder="Search name..."
					/>
				</DialogContent>
				<DialogActions>
					<Box style={{ maxHeight: "60vh", overflowY: "auto", width: "100%" }}>
						{suggestedPeople.map(people => (
							<Box
								key={people?._id}
								display="flex"
								alignItems="center"
								justifyContent="space-between"
								p={2}
							>
								<Box
									display="flex"
									alignItems="center"
									justifyContent="space-between"
								>
									<Avatar username={people?.username} />
									<Typography
										style={{ marginLeft: "5px", letterSpacing: "1px" }}
									>
										{people?.username}
									</Typography>
								</Box>
								<Box>
									<CustomPrimaryButton
										label="Send"
										onClick={() => handleSendInvitation(people.mail)}
									/>
								</Box>
							</Box>
						))}
					</Box>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddFriendDialog;
