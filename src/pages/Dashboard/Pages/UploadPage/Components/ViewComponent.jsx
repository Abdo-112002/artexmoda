import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { images } from "../../../../../assets";
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
							<svg
								className="w-[16px] h-[16px]"
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.33333 1.96655V3.96655M10.6667 1.96655V3.96655M2.33333 6.69322H13.6667M14 6.29989V11.9666C14 13.9666 13 15.2999 10.6667 15.2999H5.33333C3 15.2999 2 13.9666 2 11.9666V6.29989C2 4.29989 3 2.96655 5.33333 2.96655H10.6667C13 2.96655 14 4.29989 14 6.29989Z"
									stroke="#2759CD"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10.4633 9.7666H10.4693M10.4633 11.7666H10.4693M7.99663 9.7666H8.0033M7.99663 11.7666H8.0033M5.5293 9.7666H5.53596M5.5293 11.7666H5.53596"
									stroke="#2759CD"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
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
							<svg
								className="w-[16px] h-[16px]"
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.33333 1.96655V3.96655M10.6667 1.96655V3.96655M2.33333 6.69322H13.6667M14 6.29989V11.9666C14 13.9666 13 15.2999 10.6667 15.2999H5.33333C3 15.2999 2 13.9666 2 11.9666V6.29989C2 4.29989 3 2.96655 5.33333 2.96655H10.6667C13 2.96655 14 4.29989 14 6.29989Z"
									stroke="#2759CD"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10.4633 9.7666H10.4693M10.4633 11.7666H10.4693M7.99663 9.7666H8.0033M7.99663 11.7666H8.0033M5.5293 9.7666H5.53596M5.5293 11.7666H5.53596"
									stroke="#2759CD"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
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
