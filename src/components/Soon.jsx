import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Soon = () => {
	return (
		<Flex
			alignItems={"center"}
			justifyContent="center"
			w={"100%"}
			h={`${"calc(100vh - 60px)"}`}
		>
			<Text
				fontSize={["md", "lg", "xl", "2xl"]}
				fontWeight="bold"
				color={`${"var(--main-color)"}`}
			>
				SOON
			</Text>
		</Flex>
	);
};

export default Soon;
