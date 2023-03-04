import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootRoute } from "./routes/RootRoutes";
import { DashRoutes } from "./routes/DashRoutes";
import { useEffect } from "react";

const router = createBrowserRouter([RootRoute, DashRoutes], {
	basename: "/brands",
});

const App = () => {
	useEffect(() => {
		// When the component mounts, check if the user is signed in
		const isLoggedIn = Boolean(localStorage.getItem("loggedIn"));
		if (!isLoggedIn) {
			// If not, clear any data from local storage
			localStorage.clear();
		}

		// Attach an event listener to the window to detect when the page is about to be unloaded
		const handleBeforeUnload = () => {
			// Store the current time in local storage
			localStorage.setItem("lastVisit", Date.now());
		};
		window.addEventListener("beforeunload", handleBeforeUnload);

		// When the component unmounts, remove the event listener
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	useEffect(() => {
		// When the component mounts, check if the user is signed in
		const isLoggedIn = Boolean(localStorage.getItem("loggedIn"));
		if (isLoggedIn) {
			// If the user is signed in, check if the last visit time is more than 24 hours ago
			const lastVisit = localStorage.getItem("lastVisit");
			if (lastVisit) {
				const timeDiff = Date.now() - parseInt(lastVisit);
				const hoursDiff = timeDiff / (1000 * 60 * 60);
				if (hoursDiff > 24) {
					// If more than 24 hours have passed since the last visit, clear any data from local storage
					localStorage.clear();
				}
			}
		}
	}, []);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
