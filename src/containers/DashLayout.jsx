import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Navigation, Sidebar } from "../pages";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import withGuard from "../util/withGuard";

const DashLayout = () => {
	const { value } = useSelector((state) => state.toggle);

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
			<Box
				position={"relative"}
				w="100%"
				overflow={"hidden"}
				backgroundColor={`${"var(--main-bg)"}`}
			>
				<Sidebar />
				<Box
					position={"relative"}
					width={value ? `${"calc(100% - 60px)"}` : `${"calc(100% - 260px)"}`}
					left={value ? "60px" : "260px"}
					minH="100vh"
					transition="0.4s"
					className={value ? "main active" : "main"}
				>
					<Navigation value={value} />
					<Outlet />
				</Box>
			</Box>
		</>
	);
};

export default withGuard(DashLayout);
