import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { icons } from "../assets";

const Error = ({ active, setActive, whiteColoe, message, text }) => {
	return (
		<>
			<Box position={"relative"}>
				<Box
					position={"fixed"}
					bottom="10%"
					right={active ? "4%" : "-100%"}
					backgroundColor="#F05454"
					transition={active ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out"}
					width={"273px"}
					height={"61px"}
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexDirection={"row"}
					borderRadius="4px"
					gap="16px"
				>
					<Image src={icons.errorIcon} />
					<Text
						fontSize={"14px"}
						fontWeight="400"
						color={whiteColoe}
						textAlign="start"
					>
						{text} <br /> {message}
					</Text>
					<Image
						src={icons.removeFile}
						position="absolute"
						top={"10px"}
						right="10px"
						width="16px"
						height="16px"
						cursor={"pointer"}
						onClick={() => setActive(false)}
					/>
				</Box>
			</Box>
		</>
	);
};

export default Error;
