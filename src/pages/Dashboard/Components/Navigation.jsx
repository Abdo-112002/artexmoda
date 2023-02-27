import { Flex, VStack } from "@chakra-ui/react";

import React from "react";

import { useDispatch } from "react-redux";
import { toggleClass } from "../../../store/ArtexSlices/Toggle";
import Account from "../../../components/Account";

const Navigation = () => {
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
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 13.2666V2.73325C7 1.73325 6.57333 1.33325 5.51333 1.33325H2.81999C1.75999 1.33325 1.33333 1.73325 1.33333 2.73325V13.2666C1.33333 14.2666 1.75999 14.6666 2.81999 14.6666H5.51333C6.57333 14.6666 7 14.2666 7 13.2666ZM14.6667 5.67992V2.65325C14.6667 1.71325 14.24 1.33325 13.18 1.33325H10.4867C9.42666 1.33325 9 1.71325 9 2.65325V5.67325C9 6.61992 9.42666 6.99325 10.4867 6.99325H13.18C14.24 6.99992 14.6667 6.61992 14.6667 5.67992ZM14.6667 13.1799V10.4866C14.6667 9.42659 14.24 8.99992 13.18 8.99992H10.4867C9.42666 8.99992 9 9.42659 9 10.4866V13.1799C9 14.2399 9.42666 14.6666 10.4867 14.6666H13.18C14.24 14.6666 14.6667 14.2399 14.6667 13.1799Z"
							stroke="#303030"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
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
