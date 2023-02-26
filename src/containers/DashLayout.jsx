import React from "react";
import { Box } from "@chakra-ui/react";
import { Navigation, Sidebar } from "../pages";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
	const { value } = useSelector((state) => state.toggle);

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

export default DashLayout;
