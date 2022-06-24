import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRemoveAlertMessage } from "../../app/actions/alertActions";

const AlertNotification = () => {
	const dispatch = useDispatch();
	const { alertMessageContent, showAlertMessage } = useSelector(
		state => state.alert
	);
	return (
		<Snackbar
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			open={showAlertMessage}
			onClose={() => dispatch(setRemoveAlertMessage())}
			autoHideDuration={6000}
		>
			<Alert>{alertMessageContent}</Alert>
		</Snackbar>
	);
};

export default AlertNotification;
