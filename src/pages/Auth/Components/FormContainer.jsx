import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "../../../components";

const FormContainer = ({
	children,
	headerName,
	isForget,
	buttonName,
	askText,
	askButton,
	to,
	mt,
	buttonMargin,
	headerPadding,
	handelClick,
}) => {
	const borderColor = `${"var(--border-color)"}`;
	const blackColor = `${"var(--black-color)"}`;
	const mainColor = `${"var(--main-color)"}`;

	return (
		<>
			<Flex
				alignItems={"center"}
				justifyContent="flex-start"
				mt="60px"
				flexDirection={"column"}
				minHeight={`${"calc(100vh - 64px)"}`}
				w="100%"
			>
				<Box
					border={`1px solid ${borderColor}`}
					w={["100%", "100%", "384px"]}
					height="auto"
					rounded={"md"}
					alignItems={"center"}
					justifyContent="center"
					display={"flex"}
					py="32px"
				>
					<Box w={["100%", "100%", "300px"]}>
						<Text
							fontSize={["18px"]}
							fontWeight="400"
							color={blackColor}
							textAlign="center"
							pb={headerPadding}
							letterSpacing={"2px"}
						>
							{headerName}
						</Text>
						{/* Inputs */}
						{children}
						{isForget && (
							<Flex alignItems={"center"} justifyContent="flex-end">
								<Link to="forget-password">
									<Text
										textAlign={"right"}
										textDecoration="underline"
										fontSize={["sm", "md", "md"]}
										cursor={"pointer"}
										_hover={{
											color: mainColor,
										}}
									>
										Forget your password?
									</Text>
								</Link>
							</Flex>
						)}
						<DefaultButton
							buttonMargin={buttonMargin}
							handelClick={handelClick}
							buttonName={buttonName}
							bgColor={mainColor}
							mt={mt}
							rounded="8px"
							width={["100%", "100%", "100%"]}
							size={["md"]}
						/>
						<Flex alignItems={"center"} justifyContent="center" gap="2">
							<Text fontSize={["sm", "md", "md"]}>{askText}</Text>
							<Link to={to}>
								<Text
									textDecoration="underline"
									fontSize={["sm", "md", "md"]}
									cursor={"pointer"}
									color={mainColor}
								>
									{askButton}
								</Text>
							</Link>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default FormContainer;
