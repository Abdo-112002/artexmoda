import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { PopUp } from "../../../../components";
import Informations from "./Components/Informations";
import ViewComponent from "./Components/ViewComponent";
import { useNavigate } from "react-router-dom";

const ViewMore = () => {
	const [showPopup, setShowPopup] = useState(false);
	const navigate = useNavigate();
	const backHandel = () => navigate("/dashboard/upload");

	return (
		<>
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
					<ViewComponent />
				</Box>
				<Box
					w={["100%", "100%", "830px", "830px"]}
					display={"flex"}
					alignItems="flex-start"
					flexDirection={"column"}
				>
					<Informations />
					<Flex
						display={"flex"}
						alignItems="center"
						justifyContent={"flex-end"}
						w="100%"
						gap="16px"
					>
						<Button
							w="122px"
							colorScheme={"red"}
							variant="outline"
							onClick={() => backHandel()}
						>
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
							onClick={() => setShowPopup(true)}
						>
							Finish
						</Button>
					</Flex>

					<PopUp UploadNumber={250} show={showPopup} setShow={setShowPopup} />
				</Box>
			</Flex>
		</>
	);
};

export default ViewMore;
