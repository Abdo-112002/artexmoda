import { createSlice } from "@reduxjs/toolkit";

// Init Slice
const initialState = {
	mode: "",
};

const ThemeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setMode: (state, action) => {
			state.mode = action.payload;
		},
	},
});

export const { setMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
