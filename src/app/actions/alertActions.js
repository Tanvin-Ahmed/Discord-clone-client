import { alertSlice } from "../slices/alertSlice";

const { actions: alert } = alertSlice;

export const setAlertMessage = content => dispatch => {
	dispatch(alert.setAlertMessage(content));
};

export const setRemoveAlertMessage = () => dispatch => {
	dispatch(alert.removeAlertMessage());
};
