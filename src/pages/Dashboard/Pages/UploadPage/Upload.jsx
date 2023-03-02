import { Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import UploadComponent from "./Components/UploadComponent";

const Upload = () => {
	const fileIdIsTrue = localStorage.getItem("fileId");
	const navigate = useNavigate();
	return (
		<>
			{fileIdIsTrue !== null ? (
				navigate("view")
			) : (
				<Flex w="100%" justifyContent={"center"} pt="48px">
					<UploadComponent />
				</Flex>
			)}
		</>
	);
};

export default Upload;
