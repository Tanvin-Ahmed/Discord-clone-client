import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		userDetails: {},
	},
	reducers: {
		setUserDetails: (state, action) => {
			state.userDetails = action.payload;
		},
	},
});
