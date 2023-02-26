import { createSlice } from "@reduxjs/toolkit";

// Init Slice
const initState = { value: false };

const toggleSlice = createSlice({
	name: "toggle",
	initialState: initState,
	reducers: {
		toggleClass: (state) => {
			state.value = !state.value;
		},
	},
});

export const { toggleClass } = toggleSlice.actions;

export default toggleSlice.reducer;
