import {
	Box,
	Container,
	Flex,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function ImagesViewProducts() {
	const animatedComponents = makeAnimated();
	// select options

	const [options, SetOptions] = useState([
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	]);

	const [selectOption, SetSelectOption] = useState([
		{ value: "chocolate", label: "Chocolate" },
	]);

	const addOption = (items) => {
		SetSelectOption([...items]);
	};
	const removeSelectOption = (indexToRemove) => {
		SetSelectOption([
			...selectOption.filter((_, index) => index !== indexToRemove),
		]);
	};

	return (
		<Container mt={"-20px"} px={"45px"} maxW={"full"}>
			<Box
				w={"full"}
				py={"8px"}
				px={"16px"}
				border={"1px solid #E6E7EE"}
				borderRadius={"4px"}
				display={"flex"}
				justifyContent={"flex-start"}
				alignItems={"center"}
				flexDirection={["column", "column", "column", "row"]}
				gap={"10px"}
			>
				<Box w={["100%", "100%", "100%", "266px"]}>
					<Flex alignItems={"center"} gap={"10px"}>
						<Flex alignItems={"center"} gap={"10px"}>
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.6667 15.6668C12.3934 15.6668 12.1667 15.4402 12.1667 15.1668V7.8335C12.1667 7.56016 12.3934 7.3335 12.6667 7.3335C12.94 7.3335 13.1667 7.56016 13.1667 7.8335V15.1668C13.1667 15.4402 12.94 15.6668 12.6667 15.6668ZM12.6667 5.66683C12.3934 5.66683 12.1667 5.44016 12.1667 5.16683V1.8335C12.1667 1.56016 12.3934 1.3335 12.6667 1.3335C12.94 1.3335 13.1667 1.56016 13.1667 1.8335V5.16683C13.1667 5.44016 12.94 5.66683 12.6667 5.66683ZM8.00004 15.6668C7.72671 15.6668 7.50004 15.4402 7.50004 15.1668V11.8335C7.50004 11.5602 7.72671 11.3335 8.00004 11.3335C8.27337 11.3335 8.50004 11.5602 8.50004 11.8335V15.1668C8.50004 15.4402 8.27337 15.6668 8.00004 15.6668ZM8.00004 9.66683C7.72671 9.66683 7.50004 9.44016 7.50004 9.16683V1.8335C7.50004 1.56016 7.72671 1.3335 8.00004 1.3335C8.27337 1.3335 8.50004 1.56016 8.50004 1.8335V9.16683C8.50004 9.44016 8.27337 9.66683 8.00004 9.66683ZM3.33337 15.6668C3.06004 15.6668 2.83337 15.4402 2.83337 15.1668V7.8335C2.83337 7.56016 3.06004 7.3335 3.33337 7.3335C3.60671 7.3335 3.83337 7.56016 3.83337 7.8335V15.1668C3.83337 15.4402 3.60671 15.6668 3.33337 15.6668ZM3.33337 5.66683C3.06004 5.66683 2.83337 5.44016 2.83337 5.16683V1.8335C2.83337 1.56016 3.06004 1.3335 3.33337 1.3335C3.60671 1.3335 3.83337 1.56016 3.83337 1.8335V5.16683C3.83337 5.44016 3.60671 5.66683 3.33337 5.66683Z"
									fill="#303030"
								/>
								<path
									d="M4.66667 8.3335H2C1.72667 8.3335 1.5 8.10683 1.5 7.8335C1.5 7.56016 1.72667 7.3335 2 7.3335H4.66667C4.94 7.3335 5.16667 7.56016 5.16667 7.8335C5.16667 8.10683 4.94 8.3335 4.66667 8.3335ZM14 8.3335H11.3333C11.06 8.3335 10.8333 8.10683 10.8333 7.8335C10.8333 7.56016 11.06 7.3335 11.3333 7.3335H14C14.2733 7.3335 14.5 7.56016 14.5 7.8335C14.5 8.10683 14.2733 8.3335 14 8.3335ZM9.33333 9.66683H6.66667C6.39333 9.66683 6.16667 9.44016 6.16667 9.16683C6.16667 8.8935 6.39333 8.66683 6.66667 8.66683H9.33333C9.60667 8.66683 9.83333 8.8935 9.83333 9.16683C9.83333 9.44016 9.60667 9.66683 9.33333 9.66683Z"
									fill="#303030"
								/>
							</svg>
							<Text fontSize={"14px"}>Filters</Text>
						</Flex>
						<Box w={"full"}>
							<Select placeholder={"brand"} options={options} />
						</Box>
					</Flex>
				</Box>
				<Box w={["100%", "100%", "100%", "272px"]}>
					<Select
						components={animatedComponents}
						isMulti
						closeMenuOnSelect={false}
						options={options}
						value={selectOption}
						onChange={(items) => addOption(items)}
					/>
				</Box>
				<Box
					flex={"1"}
					w={"full"}
					bg={"#F6F6F6"}
					p={"10px"}
					borderRadius={"8px"}
					position={"relative"}
				>
					<UnorderedList display={"flex"} gap={"8px"} m={"0px"} flexWrap="wrap">
						{selectOption.map((option, index) => (
							<ListItem
								key={index}
								display={"flex"}
								alignItems="center"
								justifyContent={"center"}
								gap={"5px"}
								h={"19px"}
								p={"10px"}
								bg={"#E6E7EE"}
								border={"1px solid #626262"}
								borderRadius={"10px"}
								fontSize={"14px"}
							>
								<Text
									cursor={"pointer"}
									onClick={() => removeSelectOption(index)}
								>
									<svg
										width="10"
										height="11"
										viewBox="0 0 10 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											y="0.5"
											width="10"
											height="10"
											rx="5"
											fill="#FF2B02"
										/>
										<path
											d="M3.125 3.625L6.875 7.375M3.125 7.375L6.875 3.625"
											stroke="white"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Text>
								<Text className="tag-title">{option.value}</Text>
							</ListItem>
						))}
					</UnorderedList>
					{selectOption.length > 0 && (
						<Text
							position={"absolute"}
							top="50%"
							right={"20px"}
							transform={"translateY(-50%)"}
							cursor={"pointer"}
							onClick={() => SetSelectOption([])}
						>
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect y="0.5" width="16" height="16" rx="8" fill="#E6E7EE" />
								<path
									d="M5 5.5L11 11.5M5 11.5L11 5.5"
									stroke="#FF2B02"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Text>
					)}
				</Box>
			</Box>
		</Container>
	);
}

export default ImagesViewProducts;
