import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
	name: "alert",
	initialState: {
		showAlertMessage: false,
		alertMessageContent: null,
	},
	reducers: {
		setAlertMessage: (state, action) => {
			state.alertMessageContent = action.payload;
			state.showAlertMessage = true;
		},
		removeAlertMessage: (state, action) => {
			state.alertMessageContent = null;
			state.showAlertMessage = false;
		},
	},
});
