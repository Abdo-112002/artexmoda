import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

import React, { memo, useRef } from "react";

function UploadMultiImg({
	selected,
	functionSelect,
	name,
	deleteImg,
	onDropImages,
}) {
	const inputElement = useRef(null);
	const addMoreImg = () => {
		inputElement.current.click();
	};

	return (
		<>
			{!selected.length ? (
				<>
					<Box
						as="label"
						w="full"
						h="236px"
						rounded="8px"
						display="flex"
						alignItems="center"
						justifyContent="center"
						backgroundColor={"#F6F6F6"}
						border={`2px dashed #626262`}
						gap="10px"
						cursor="pointer"
						onDragOver={(evt) => evt.preventDefault()}
						onDragEnter={(evt) => evt.preventDefault()}
						onDrop={onDropImages}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.0593 17.0167L22.0599 17.018C22.5235 18.0939 22.4177 19.3232 21.7553 20.2993L21.7553 20.2993L21.7519 20.3045C21.1047 21.284 20.0116 21.8701 18.839 21.8701H6.07904C4.86265 21.8701 3.75333 21.2501 3.11425 20.217C2.4768 19.1866 2.42253 17.9207 2.96651 16.8232C2.96666 16.8229 2.96682 16.8226 2.96697 16.8223L4.69537 13.3755C4.69548 13.3752 4.6956 13.375 4.69571 13.3748C5.15386 12.4679 5.79796 11.9957 6.47879 11.9276C7.16751 11.8587 7.89381 12.1774 8.52703 12.9705C8.52741 12.9709 8.52779 12.9714 8.52818 12.9719L8.74567 13.2487C8.74574 13.2488 8.74581 13.2489 8.74588 13.249C9.32268 13.984 10.1021 14.4377 10.9529 14.3582C11.7899 14.2892 12.4845 13.7156 12.9359 12.9033C12.936 12.9032 12.936 12.903 12.9361 12.9029L14.8358 9.49346L14.8363 9.49262C15.5051 8.28694 16.2907 7.81388 16.973 7.84942L16.9733 7.84943C17.6663 7.88515 18.3928 8.43532 18.9289 9.69581L18.9293 9.69667L22.0593 17.0167ZM9.50651 7.03756C8.9664 7.57767 8.23386 7.88109 7.47004 7.88109C6.70622 7.88109 5.97368 7.57767 5.43357 7.03756C4.89347 6.49746 4.59004 5.76492 4.59004 5.00109C4.59004 4.23727 4.89347 3.50473 5.43357 2.96463C5.97368 2.42452 6.70622 2.12109 7.47004 2.12109C8.23386 2.12109 8.9664 2.42452 9.50651 2.96463C10.0466 3.50473 10.35 4.23727 10.35 5.00109C10.35 5.76492 10.0466 6.49746 9.50651 7.03756Z"
								fill="black"
								stroke="#303030"
							/>
						</svg>
						<Input
							type="file"
							multiple
							id={name}
							hidden
							onChange={functionSelect}
							// Accept Images
							accept="image/png,image/jpeg,image/webp,image/jpg,.svg"
						/>
						<Text fontSize={"14px"} fontWeight="400" color={"#98A1B3"}>
							Drop your images here
						</Text>
					</Box>
				</>
			) : (
				<Flex flexDirection={"column"} w={"full"} gap={"15px"}>
					<Box
						w="full"
						h="auto"
						maxH={"236px"}
						rounded="8px"
						py="8px"
						px="12px"
						border={`1px solid #626262`}
						display="flex"
						alignItems={"flex-start"}
						flexDirection={"column"}
						gap="7px"
						cursor="pointer"
					>
						<Text
							color="#626262"
							fontSize="12px"
							lineHeight={"16px"}
							fontWeight={"400"}
							textTransform={"capitalize"}
						>
							You selected {selected.length} files
						</Text>
						<Box
							w="full"
							h="100%"
							overflow={"auto"}
							pr="10px"
							display={"flex"}
							flexDirection={"column"}
							gap="7px"
							className="scrollbar"
						>
							{/* all items selected */}
							{selected?.map((item, index) => (
								<Box
									key={item.url}
									w={"full"}
									display={"flex"}
									alignItems="center"
									userSelect={"none"}
									justifyContent={"start"}
									gap="15px"
								>
									<Box
										w={"24px"}
										h={"24px"}
										bg={"#F6F6F6"}
										display={"flex"}
										alignItems={"center"}
										justifyContent={"center"}
										rounded={"4px"}
									>
										<Image
											src={item.url}
											w={"60%"}
											h={"60%"}
											alt={"uploaded img item"}
											objectFit={"contain"}
											objectPosition={"center"}
										/>
									</Box>
									<Text color={"#000"} fontSize="12px">
										{item.name}
									</Text>
									<svg
										onClick={() => deleteImg(index)}
										className="ml-auto"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="16" height="16" rx="8" fill="#F6F6F6" />
										<path
											d="M5 5L11 11M5 11L11 5"
											stroke="#FF2B02"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Box>
							))}
						</Box>
					</Box>
					<Button
						onClick={addMoreImg}
						w="full"
						fontSize={["14px"]}
						rounded="8"
						fontWeight="400"
						colorScheme={"blue"}
						variant={"outline"}
						letterSpacing="1px"
						size={["sm", "md", "md"]}
						display="flex"
						gap="8px"
						alignItems="center"
						justifyContent="center"
					>
						<svg
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.5 8H12.5M8.5 12V4"
								stroke="#2759CD"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>

						<Text>Add More</Text>
					</Button>
					<Input
						ref={inputElement}
						type="file"
						multiple
						id={name}
						hidden
						onChange={functionSelect}
						// Accept Images
						accept="image/png,image/jpeg,image/webp,image/jpg,.svg"
					/>
				</Flex>
			)}
		</>
	);
}

export default memo(UploadMultiImg);
