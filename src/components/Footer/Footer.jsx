import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	const mainColor = `${"var(--main-color)"}`;
	const borderColor = `${"var(--border-color)"}`;

	return (
		<>
			<Flex
				alignItems={"center"}
				justifyContent={"center"}
				height={"60px"}
				borderTop={`2px solid ${borderColor}`}
				fontSize={["lg", "xl", "2xl"]}
				backgroundColor={`${"var(--main-bg)"}`}
				textAlign="center"
			>
				<Text fontSize={["sm", "md", "lg"]} fontWeight="500">
					All Right Reserved &copy; {new Date().getFullYear()}{" "}
					<Text
						as="span"
						color={mainColor}
						fontWeight="700"
						letterSpacing={"1px"}
					>
						Lightbox
					</Text>{" "}
				</Text>
			</Flex>
		</>
	);
};

export default Footer;
