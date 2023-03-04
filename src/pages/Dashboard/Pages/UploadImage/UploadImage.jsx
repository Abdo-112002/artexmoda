import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
const UploadImage = () => {
	return (
		<Flex justify={"center"} pt="48px" w={"100%"}>
			<Outlet />
		</Flex>
	);
};

export default UploadImage;
