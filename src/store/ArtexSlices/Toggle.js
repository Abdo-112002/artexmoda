import { createSlice } from "@reduxjs/toolkit";

// Init Slice
const initState = { value: false, ProductCount: 0 };

const toggleSlice = createSlice({
	name: "toggle",
	initialState: initState,
	reducers: {
		toggleClass: (state) => {
			state.value = !state.value;
		},
		productCount: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { toggleClass } = toggleSlice.actions;

export default toggleSlice.reducer;
