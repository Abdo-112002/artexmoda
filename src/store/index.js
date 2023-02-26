import { configureStore } from "@reduxjs/toolkit";

import toggle from "./ArtexSlices/Toggle";
import theme from "./ArtexSlices/ThemeSlice";

export default configureStore({
	reducer: {
		toggle,
		theme,
	},
});
