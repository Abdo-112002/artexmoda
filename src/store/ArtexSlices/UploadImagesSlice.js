import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	selectedImages: [],
};

const uploadImages = createSlice({
	name: "uploadImages",
	initialState: INITIAL_STATE,
	reducers: {
		// this action as event
		addSelectedImages: (state, action) => {
			const event = action.payload;
			const selectedFiles = event.target.files;
			const selectedFilesArray = Array.from(selectedFiles);
			const imagesArray = selectedFilesArray.map((file) => {
				return { name: file.name, url: URL.createObjectURL(file) };
			});
			state.selectedImages = [...state.selectedImages, ...imagesArray];
		},
		// this action as event
		addDraggableImages: (state, action) => {
			const event = action.payload;
			const selectedFiles = event.dataTransfer.files;
			const selectedFilesArray = Array.from(selectedFiles);
			const dT = new DataTransfer();
			selectedFilesArray.forEach((item) => {
				dT.items.add(item);
			});
			const dTFilesArray = Array.from(dT.files);
			const imagesArray = dTFilesArray.map((file) => {
				return { name: file.name, url: URL.createObjectURL(file) };
			});
			state.selectedImages = [...state.selectedImages, ...imagesArray];
		},
		removeImages: (state, action) => {
			state.selectedImages = state.selectedImages.filter(
				(_, index) => index !== action.payload
			);
		},
	},
});

export const { addSelectedImages, addDraggableImages, removeImages } =
	uploadImages.actions;
export default uploadImages.reducer;
