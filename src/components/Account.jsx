import {
	Flex,
	Image,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import React from "react";
import { icons } from "../assets";
import { useNavigate } from "react-router-dom";

const Account = ({ linkName }) => {
	const navigate = useNavigate();

	return (
		<>
			<Menu>
				<MenuButton rounded="md">
					<Flex alignItems={"center"} justifyContent={"center"} gap="2">
						<Image src={icons.avatar} />
						<Image src={icons.chevlonDown} />
					</Flex>
				</MenuButton>

				<MenuList p="0">
					<MenuItem display={"flex"} alignItems="center" gap="2">
						{linkName}
					</MenuItem>

					<MenuDivider m="0" />

					<MenuItem
						display={"flex"}
						onClick={() => {
							localStorage.clear();
							navigate("/");
						}}
						alignItems="center"
						gap="2"
					>
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};

export default Account;
