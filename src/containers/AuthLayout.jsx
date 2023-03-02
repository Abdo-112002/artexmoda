import React, { useEffect } from "react";

// Imports
import AuthNavbar from "../pages/Auth/Components/AuthNavbar";
import { Outlet } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../store/ArtexSlices/ThemeSlice";
import { Box, Container } from "@chakra-ui/react";

import LogibGuard from "../util/LogibGuard";

const AuthLayout = () => {
	const { mode } = useSelector((state) => state.theme);

	const dispatch = useDispatch();

	useEffect(() => {
		const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

		dispatch(setMode(themeClass));
	}, [dispatch]);

	return (
		<>
			<Box className={`layout ${mode}`} backgroundColor={`${"var(--main-bg)"}`}>
				<AuthNavbar />
				<Container maxW={"6xl"}>
					<Outlet />
				</Container>
			</Box>
		</>
	);
};

export default LogibGuard(AuthLayout);
