import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PopUp = ({ UploadNumber, show, setShow, navigationPath }) => {
	const navigate = useNavigate();

	const handelNavigate = () => {
		navigate(`/dashboard/${navigationPath}`);
	};

	// onClick out modal close
	const closeModal = () => {
		setShow(false);
	};

	return (
		<>
			{show && (
				<>
					<Box
						position={"fixed"}
						w="100%"
						h="100%"
						left={0}
						top="0"
						backgroundColor={"#D9D9D9"}
						onClick={() => closeModal()}
						opacity="0.8"
						backdropFilter={`${"blur(4px)"}`}
						zIndex={99}
					></Box>
					<Box
						display={"flex"}
						alignItems="center"
						flexDirection={"column"}
						padding="32px"
						gap="12px"
						position="fixed"
						left="40%"
						id="modal"
						top="108px"
						translateX={"-50%"}
						backgroundColor={"#FFFFFF"}
						opacity="1"
						borderRadius="8px"
						boxShadow={"1px solid #D9D9D9"}
						w="351px"
						h="289px"
						zIndex={999}
					>
						<Box
							w="45px"
							h="45px"
							backgroundColor={"#2759CD"}
							rounded="full"
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
						>
							<svg
								width="22"
								height="18"
								viewBox="0 0 22 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M20.4097 1.23609C21.2894 1.91254 21.4574 3.17254 20.7857 4.05583L10.7858 17.2055C10.4334 17.6689 9.89917 17.9569 9.32023 17.9956C8.7413 18.0342 8.17394 17.8197 7.76367 17.4072L1.41535 11.0235C0.632405 10.2361 0.632405 8.96428 1.41535 8.17697C2.20448 7.38344 3.48858 7.38344 4.27771 8.17697L8.98457 12.9101L17.5748 1.61408C18.2516 0.724051 19.5233 0.554494 20.4097 1.23609Z"
									fill="white"
								/>
							</svg>
						</Box>
						<Flex
							flexDirection={"column"}
							alignItems="center"
							gap="24px"
							w="287px"
							h="164px"
						>
							<Flex
								flexDirection={"column"}
								alignItems="center"
								gap="16px"
								w="261px"
								h="102px"
							>
								<Text
									fontSize={"18px"}
									fontWeight="400"
									lineHeight={"25px"}
									textAlign="center"
									textTransform={"capitalize"}
									color="#000000"
								>
									{UploadNumber}
								</Text>
								<Text
									fontSize={"13px"}
									fontWeight="400"
									lineHeight={"18px"}
									textAlign="center"
									color="#5B5B5B"
								>
									Catalogue is created, Want to upload images?
								</Text>
							</Flex>
						</Flex>
						<Button
							w="100%"
							fontSize={["14px"]}
							p="8px 16px"
							rounded="8"
							bg={`${"var(--main-color)"}`}
							fontWeight="400"
							colorScheme={"blue"}
							onClick={() => handelNavigate()}
						>
							Upload Images
						</Button>
					</Box>
				</>
			)}
		</>
	);
};

export default PopUp;
