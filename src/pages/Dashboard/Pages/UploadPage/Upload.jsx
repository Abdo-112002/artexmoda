import { Flex } from "@chakra-ui/react";
import React from "react";
import UploadComponent from "./Components/UploadComponent";

const Upload = () => {
	return (
		<>
			<Flex w="100%" justifyContent={"center"} pt="48px">
				<UploadComponent />
			</Flex>
		</>
	);
};

export default Upload;
