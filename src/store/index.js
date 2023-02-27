import { configureStore } from "@reduxjs/toolkit";

import toggle from "./ArtexSlices/Toggle";
import theme from "./ArtexSlices/ThemeSlice";

import { RtqApi } from "./ArtexSlices/RTQApis";
export default configureStore({
	reducer: {
		toggle,
		theme,

		// Add the generated reducer as a specific top-level slice
		[RtqApi.reducerPath]: RtqApi.reducer,
	},

	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(RtqApi.middleware),
});
