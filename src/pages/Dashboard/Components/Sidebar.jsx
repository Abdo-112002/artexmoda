import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import { SidebarLinks } from "../../../common/data";

const Sidebar = () => {
	const textColor = `${"var(--txt-white)"}`;

	const { value } = useSelector((state) => state.toggle);
	const [current, setCurrent] = useState("");

	// get Current path
	const currentPath = window.location.pathname;
	const path = currentPath.split("/").pop();

	useEffect(() => {
		setCurrent(path);
	}, [path]);

	return (
		<>
			<Box
				position={"fixed"}
				w={value ? "56px" : "260px"}
				height={"100%"}
				backgroundColor={textColor}
				transition={"0.4s"}
				overflow="hidden"
				className={value ? "side active" : "side"}
				borderRight={`1px solid #E6E7EE`}
				zIndex="99"
				display={"flex"}
				flexDirection={"column"}
				alignItems="center"
				padding={"16px"}
				gap="32px"
			>
				{/* Logo */}
				<Link
					to="/dashboard"
					onClick={(e) => {
						// get Current Link
						const currentLink = e.currentTarget
							.getAttribute("href")
							.split("/")
							.pop();
						// remove Current Link
						setCurrent(currentLink);
					}}
				>
					<Box height={"31.26px"} w="120px">
						<Box
							position={"absolute"}
							w="27px"
							height={"31.26px"}
							top="16px"
							right={value ? "14.5px" : "163px"}
						>
							<svg
								className="w-[27px] h-[29.31px]"
								width="27"
								height="29.31"
								viewBox="0 0 28 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M14.5438 0.476246C14.185 0.402449 13.8149 0.402449 13.4561 0.476246C13.0413 0.561552 12.6706 0.769196 12.3759 0.934275L12.2956 0.979152L2.30667 6.52854C2.27905 6.54388 2.25059 6.55956 2.22144 6.57562C1.90944 6.74746 1.51716 6.96353 1.2159 7.29043C0.955449 7.57306 0.758343 7.90805 0.637768 8.27298C0.498305 8.69509 0.499937 9.14294 0.501235 9.49912C0.501356 9.53241 0.501474 9.5649 0.501474 9.59649V20.5534C0.501474 20.585 0.501356 20.6174 0.501235 20.6507C0.499937 21.0069 0.498305 21.4548 0.637768 21.8769C0.758344 22.2418 0.95545 22.5768 1.2159 22.8594C1.51716 23.1863 1.90945 23.4024 2.22144 23.5742C2.2506 23.5903 2.27905 23.606 2.30667 23.6213L12.2956 29.1707L12.3759 29.2156C12.6706 29.3807 13.0414 29.5883 13.4561 29.6736C13.8149 29.7474 14.185 29.7474 14.5438 29.6736C14.9586 29.5883 15.3293 29.3807 15.6241 29.2156L15.7044 29.1707L25.6933 23.6213C25.7055 23.6145 25.7179 23.6077 25.7304 23.6008C25.7462 23.592 25.7622 23.5832 25.7785 23.5743C26.0905 23.4024 26.4828 23.1863 26.7841 22.8594C27.0445 22.5768 27.2416 22.2418 27.3622 21.8769C27.5017 21.4548 27.5 21.0069 27.4987 20.6507C27.4986 20.6174 27.4985 20.585 27.4985 20.5534V9.59649C27.4985 9.5649 27.4986 9.53242 27.4987 9.49913C27.5 9.14294 27.5017 8.69509 27.3622 8.27298C27.2416 7.90805 27.0445 7.57306 26.7841 7.29043C26.4828 6.96352 26.0905 6.74745 25.7785 6.57561L25.7774 6.575C25.7486 6.55915 25.7206 6.54368 25.6933 6.52854L15.7044 0.979151L15.6241 0.93427C15.3293 0.769193 14.9586 0.561551 14.5438 0.476246ZM13.6067 3.33911C13.8112 3.22547 13.9156 3.16805 13.9935 3.13048L14 3.12739L14.0064 3.13048C14.0843 3.16805 14.1888 3.22547 14.3933 3.33911L23.3691 8.32564L13.9999 13.5307L4.63085 8.32567L13.6067 3.33911ZM3.20118 10.6198L12.6501 15.8691L12.6501 26.2793L3.61776 21.2614C3.40185 21.1414 3.29161 21.0795 3.21427 21.0303L3.20774 21.0261L3.20725 21.0183C3.20174 20.9268 3.20118 20.8004 3.20118 20.5534V10.6198Z"
									fill="#17181A"
								/>
							</svg>
						</Box>
						{value ? null : (
							<Box
								position={"absolute"}
								w="92.44px"
								h="20.64px"
								top="top: 23.73px;"
								right={"60px"}
							>
								<Text color={`#17181A`} fontSize={["xl"]} fontWeight="700">
									Lightbox
								</Text>
							</Box>
						)}
					</Box>
				</Link>

				{/* Links */}
				<Flex
					alignItems={"flex-start"}
					flexDirection={["column"]}
					width={value ? "100%" : "228px"}
					padding="0"
					gap="10px"
					w={value ? "40px" : "228px"}
				>
					{SidebarLinks.map((link) => (
						<Box
							key={link.id}
							display="flex"
							alignItems={"flex-start"}
							justifyContent="center"
							flexDirection={"column"}
							gap="8px"
							p="0"
							w="100%"
						>
							<Text
								color={`#303030`}
								fontSize={"14px"}
								fontWeight="600"
								lineHeight={"22px"}
							>
								{value ? (link.value ? link.value : link.name) : link.name}
							</Text>
							{link.linksItem.map((item) => (
								<React.Fragment key={item.name}>
									<NavLink
										to={item.link}
										className="linkItem"
										onClick={(e) => {
											// get Current Link
											const currentLink = e.currentTarget
												.getAttribute("href")
												.split("/")
												.pop();
											// remove Current Link
											setCurrent(currentLink);
										}}
										end
									>
										<Flex
											alignItems={value ? "center" : "flex-start"}
											justifyContent="center"
											gap="8px"
											p={value ? "0" : "8px 16px"}
											borderRadius="4px"
											_hover={{
												backgroundColor: `#F6F6F6`,
												color: `#626262 !important`,
												cursor: "pointer",
											}}
											className="sideLinks"
											width="100%"
											h={value ? "35px" : "35px"}
										>
											{current === item.link.split("/").slice(-1).join() ? (
												<svg
													className="w-[17px] h-[17px]"
													width="17"
													height="17"
													viewBox="0 0 16 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													{item.soldIcon}
												</svg>
											) : (
												<svg
													className="w-[17px] h-[17px]"
													width="17"
													height="17"
													viewBox="0 0 16 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													{item.outlineIcon}
												</svg>
											)}

											{value ? null : (
												<Text
													color={"inherit"}
													as="span"
													fontSize={["14px"]}
													fontWeight="400"
													letterSpacing={"1px"}
													w="100%"
												>
													{item.name}
												</Text>
											)}
										</Flex>
									</NavLink>
								</React.Fragment>
							))}
						</Box>
					))}
				</Flex>
			</Box>
		</>
	);
};

export default Sidebar;
