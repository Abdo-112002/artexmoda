/* eslint-disable no-unused-expressions */
import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadComponent from "./Components/UploadComponent";

const Upload = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const isTrue = localStorage.getItem("fileId");

		return () => {
			isTrue ? navigate("view") : null;
		};
	}, [navigate]);

	return (
		<>
			<Flex w="100%" justifyContent={"center"} pt="48px">
				<UploadComponent />
			</Flex>
		</>
	);
};

export default Upload;
