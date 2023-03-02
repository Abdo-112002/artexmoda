/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Informations from "./Components/Informations";
import ViewComponent from "./Components/ViewComponent";
import { useNavigate } from "react-router-dom";

import { useGetProductQuery } from "../../../../store/ArtexSlices/RTQApis";

const ViewMore = () => {
	const { data } = useGetProductQuery(localStorage.getItem("fileId"));
	const fileIdIsTrue = localStorage.getItem("fileId");
	const navigate = useNavigate();

	return (
		<>
			{fileIdIsTrue === null ? (
				navigate("/dashboard/upload")
			) : (
				<Flex
					w="100%"
					justifyContent={"center"}
					flexDirection={["column", "column", "row", "row"]}
					py="40px"
					px="24px"
					gap="16px"
				>
					<Box
						w={["100%", "100%", "300px", "300px"]}
						h="594.63px"
						border={`1px solid ${"var(--border-color)"}`}
						rounded="4px"
					>
						<ViewComponent dataView={data?.spreadsheetData} />
					</Box>
					<Box
						w={["100%", "100%", "830px", "830px"]}
						display={"flex"}
						alignItems="flex-start"
						flexDirection={"column"}
					>
						<Informations infoData={data?.spreadsheetColumns} />
					</Box>
				</Flex>
			)}
		</>
	);
};

export default ViewMore;
