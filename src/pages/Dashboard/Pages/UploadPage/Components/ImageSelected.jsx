import React from "react";
import { Box, Image, Input, Text } from "@chakra-ui/react";

const ImageSelected = ({ selected, functionSelect, setSelected }) => {
	return (
		<>
			{selected === "" ? (
				<Box width="126px" height="80px">
					<Box
						as="label"
						display={"flex"}
						alignItems="center"
						justifyContent={"center"}
						gap="8px"
						flexDirection={"column"}
						width="100%"
						height="100%"
						backgroundColor={"#F6F6F6"}
						rounded="8px"
						cursor={"pointer"}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
								stroke={"black"}
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14.8699 15H18.1299M16.4999 16.63V13.37M18.5699 22H13.9999C11.7099 22 10.5699 20.86 10.5699 18.57V11.43C10.5699 9.14 11.7099 8 13.9999 8H18.5699C20.8599 8 21.9999 9.14 21.9999 11.43V18.57C21.9999 20.86 20.8599 22 18.5699 22Z"
								stroke={"black"}
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>

						<Text
							fontSize={"12px"}
							fontWeight="400"
							lineHeight={"16px"}
							color={"#98A1B3"}
						>
							Add cover image
						</Text>
						<Input
							type="file"
							hidden
							name="images"
							onChange={functionSelect}
							// Accept Images
							accept="image/png,image/jpeg,image/webp,image/jpg"
						/>
					</Box>
					<Input type="file" hidden />
				</Box>
			) : (
				<Box
					width="126px"
					height="80px"
					backgroundColor={"#F6F6F6"}
					rounded="8px"
					position={"relative"}
				>
					<Image
						src={selected}
						rounded="8px"
						w={"100%"}
						h="100%"
						objectFit="cover"
					/>
					<svg
						className="cursor-pointer absolute top-[4px] right-[4px]"
						onClick={() => setSelected("")}
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="16" height="16" rx="8" fill="#FF2B02" />
						<path
							d="M5 5L11 11M5 11L11 5"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Box>
			)}
		</>
	);
};

export default ImageSelected;
