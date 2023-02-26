import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Informations from "./Components/Informations";
import ViewComponent from "./Components/ViewComponent";

const ViewMore = () => {
	return (
		<>
			<Flex w="100%" justifyContent={"center"} pt="48px" px="24px" gap="16px">
				<Box
					w="300px"
					border={`1px solid ${"var(--border-color)"}`}
					rounded="4px"
				>
					<ViewComponent />
				</Box>
				<Box
					w="830px"
					display={"flex"}
					alignItems="flex-start"
					flexDirection={"column"}
					gap="16px"
				>
					<Informations />
					<Informations />
					<Informations />
					<Informations />
					<Flex
						display={"flex"}
						alignItems="center"
						justifyContent={"flex-end"}
						w="100%"
						gap="16px"
					>
						<Button w="122px" colorScheme={"red"} variant="outline">
							Cancel
						</Button>
						<Button
							fontSize={["14px"]}
							w="122px"
							rounded="8"
							bg={`${"var(--main-color)"}`}
							fontWeight="400"
							colorScheme={"blue"}
							letterSpacing="1px"
						>
							Finish
						</Button>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default ViewMore;
