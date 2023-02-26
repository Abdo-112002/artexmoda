import { Image, Flex, VStack } from "@chakra-ui/react";

import React from "react";

import { useDispatch } from "react-redux";
import { toggleClass } from "../../../store/ArtexSlices/Toggle";
import { icons } from "../../../assets";
import Account from "../../../components/Account";

const Navigation = ({ value }) => {
	const textColor = `${"var(--txt-white)"}`;
	const borderColor = `${"var(--border-color)"}`;
	const dispatch = useDispatch();

	return (
		<header>
			<VStack
				width="100%"
				height="60px"
				alignItems={"center"}
				backgroundColor={textColor}
				borderBottom={`1px solid ${borderColor}`}
				justifyContent={"space-between"}
				flexDirection="row"
				p="10px 32px"
				gap="31px"
			>
				{/* Toggle Icon */}
				<Flex
					alignItems={"center"}
					justifyContent="center"
					w="60px"
					h={"60px"}
					position="relative"
					cursor={"pointer"}
					display={["flex", "flex", "flex", "flex"]}
					onClick={() => dispatch(toggleClass())}
				>
					<Image src={icons.toggle} />
				</Flex>

				{/* Account Menu */}
				<Flex
					m="0 !important"
					gap="5"
					justifyContent="center"
					alignItems={"center"}
				>
					<Account linkName={"Dashboard"} />
				</Flex>
			</VStack>
		</header>
	);
};

export default Navigation;
