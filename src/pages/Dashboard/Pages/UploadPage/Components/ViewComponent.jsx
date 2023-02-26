import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { icons, images } from "../../../../../assets";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "../../../../../components";

const ViewComponent = () => {
	// Colors
	const mainColor = `${"var(--main-color)"}`;

	const navigate = useNavigate();

	const onClick = () => {
		navigate("/dashboard/upload");
	};

	return (
		<>
			<Image src={images.testView} height="203.63px" w="100%" />
			<Box
				p="16px"
				display={"flex"}
				alignItems="flex-start"
				flexDirection={"column"}
				gap="24px"
			>
				<Text
					fontSize={"18px"}
					fontWeight="400"
					color={`${"var(--black-color)"}`}
				>
					SR23 - BOSS Black <br /> Menswear
				</Text>

				<Box display={"flex"} flexDirection="column" gap="16px" w="100%">
					<Box display={"flex"} flexDirection="column" gap="8px" w="100%">
						<Text fontSize={"14px"} fontWeight="400" color={"#626262"}>
							Preorder period
						</Text>
						<Box
							display={"flex"}
							justifyContent="space-between"
							alignItems={"center"}
							flexDirection={"row"}
							padding="8px 16px"
							gap="10px"
							border={`2px solid ${"var(--border-color)"}`}
							w="100%"
							rounded="4px"
						>
							<Text
								fontSize={"14px"}
								fontWeight="400"
								color={`${"var(--main-color)"}`}
							>
								27/07/2022 - 23/01/2023
							</Text>
							<Image src={icons.calender} />
						</Box>
					</Box>
					<Box display={"flex"} flexDirection="column" gap="8px" w="100%">
						<Text fontSize={"14px"} fontWeight="400" color={"#626262"}>
							Preorder period
						</Text>
						<Box
							display={"flex"}
							justifyContent="space-between"
							alignItems={"center"}
							flexDirection={"row"}
							padding="8px 16px"
							gap="10px"
							border={`2px solid ${"var(--border-color)"}`}
							w="100%"
							rounded="4px"
						>
							<Text
								fontSize={"14px"}
								fontWeight="400"
								color={`${"var(--main-color)"}`}
							>
								12/04/203
							</Text>
							<Image src={icons.calender} />
						</Box>
					</Box>
				</Box>

				<Box
					display={"flex"}
					alignItems="center"
					justifyContent={"center"}
					gap="16px"
					w="100%"
					rounded={"8px"}
					backgroundColor="#F6F6F6"
					padding="8px 16px"
				>
					<Text fontSize={"14px"} fontWeight="400" color={"#626262"}>
						File_name_super_long_na...
					</Text>
				</Box>

				<DefaultButton
					bgColor={mainColor}
					buttonMargin="0"
					buttonName={"View File"}
					handelClick={onClick}
					rounded="8px"
					size={"md"}
					width="100%"
				/>
			</Box>
		</>
	);
};

export default ViewComponent;
