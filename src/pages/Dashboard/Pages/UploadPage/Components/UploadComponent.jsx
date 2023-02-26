import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { icons } from "./../../../../../assets";

import { DefaultInput } from "../../../../../components";

import { Error } from "../../../../../components";
import { useNavigate } from "react-router-dom";

import ImageSelected from "./ImageSelected";
import FileUpload from "./FileUpload";

const UploadComponent = () => {
	// Custon Navigate
	const navigate = useNavigate();

	// Colors
	const borderColor = `${"var(--border-color)"}`;
	const blackColor = `${"var(--black-color)"}`;
	const mainColor = `${"var(--main-color)"}`;
	const whiteColoe = `${"var(--txt-white)"}`;

	// States
	const [error, setError] = useState(false);
	const [acceptTrue, setAcceptTrue] = useState(false);
	const [acceptImage, setAcceptImage] = useState(false);
	const [selectedImages, setSelectedImages] = useState("");
	const [selectFile, setSelectFile] = useState("");
	const [size, setSized] = useState(0);
	const [data, setData] = useState({
		name: "",
		date: "",
		startDate: "",
		endDate: "",
	});

	const onSelectImage = (event) => {
		const selectedFiles = event.target.files[0];
		// get accept and validate he is include selectFile or no
		const accept = event.target.accept;
		const acceptArray = accept.split(",");
		const acceptTrue = acceptArray.includes(selectedFiles.type);
		if (acceptTrue) {
			setAcceptImage(false);
			const selectedFilesArray = URL.createObjectURL(selectedFiles);
			setSelectedImages(selectedFilesArray);
		} else {
			setAcceptImage(true);
		}
		// FOR BUG IN CHROME
		event.target.value = "";
	};

	const onSelectFile = (event) => {
		const selectedFiles = event.target.files[0];
		// get accept and validate he is include selectFile or no
		const accept = event.target.accept;
		const acceptArray = accept.split(",");
		const acceptTrue = acceptArray.includes(selectedFiles.type);
		if (acceptTrue) {
			setAcceptTrue(false);
			const bytesToMegaBytes = (bytes) => bytes / 1024 ** 2;
			const fileSize = bytesToMegaBytes(selectedFiles.size);
			setSized(fileSize);
			setSelectFile(selectedFiles);
		} else {
			setAcceptTrue(true);
		}

		// FOR BUG IN CHROME
		event.target.value = "";
	};

	// Handel Change Function
	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	};

	// Handel Next Function And Validate
	const handleNext = () => {
		// Check is All Data not empty
		if (data.name && selectedImages && selectFile) {
			console.log(data);
			navigate("view");
		} else {
			// Get Current empty data and return error
			console.log("Empty Data");
			setError(true);
		}
	};

	return (
		<>
			<Box
				border={"1px solid #E6E7EE"}
				rounded="4"
				w="360px"
				h="552px"
				p="32px"
				display={"flex"}
				alignItems="center"
				flexDirection={"column"}
				gap="32px"
			>
				<Flex w="184px" alignItems="flex-end" gap="10px" he="25px">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 17V11M9 11L7 13M9 11L11 13"
							stroke="#303030"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<Text fontSize={"18px"} fontWeight="400" w="150px" color={blackColor}>
						Upload Catalogue
					</Text>
				</Flex>

				<Flex
					display={"flex"}
					alignItems="center"
					flexDirection={"column"}
					gap="24px"
					w="300px"
					height={"431px"}
					p="0"
				>
					{/* Image Selected Component */}
					<ImageSelected
						functionSelect={onSelectImage}
						selected={selectedImages}
						setSelected={setSelectedImages}
						// error or
						error={error || acceptImage}
					/>

					<DefaultInput
						placeholder="Catalougue name"
						type="text"
						error={error}
						leftIcons={
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.33325 8.13325H9.99992M5.33325 10.7999H8.25325M6.66659 3.99992H9.33325C10.6666 3.99992 10.6666 3.33325 10.6666 2.66659C10.6666 1.33325 9.99992 1.33325 9.33325 1.33325H6.66659C5.99992 1.33325 5.33325 1.33325 5.33325 2.66659C5.33325 3.99992 5.99992 3.99992 6.66659 3.99992Z"
									stroke="#626262"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10.6667 2.67993C12.8867 2.79993 14 3.61993 14 6.6666V10.6666C14 13.3333 13.3333 14.6666 10 14.6666H6C2.66667 14.6666 2 13.3333 2 10.6666V6.6666C2 3.6266 3.11333 2.79993 5.33333 2.67993"
									stroke="#626262"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						}
						name={"name"}
						value={data.name}
						onChange={handleChange}
						isPassword={false}
						errorIcon={
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.33325 8.13325H9.99992M5.33325 10.7999H8.25325M6.66659 3.99992H9.33325C10.6666 3.99992 10.6666 3.33325 10.6666 2.66659C10.6666 1.33325 9.99992 1.33325 9.33325 1.33325H6.66659C5.99992 1.33325 5.33325 1.33325 5.33325 2.66659C5.33325 3.99992 5.99992 3.99992 6.66659 3.99992Z"
									stroke={error ? "#FF0000" : "#626262"}
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10.6667 2.67993C12.8867 2.79993 14 3.61993 14 6.6666V10.6666C14 13.3333 13.3333 14.6666 10 14.6666H6C2.66667 14.6666 2 13.3333 2 10.6666V6.6666C2 3.6266 3.11333 2.79993 5.33333 2.67993"
									stroke={error ? "#FF0000" : "#626262"}
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						}
					/>

					{/* File Selected Component */}
					<FileUpload
						functionSelect={onSelectFile}
						select={selectFile}
						setSelectFile={setSelectFile}
						size={size}
						error={error || acceptTrue}
					/>

					<Flex
						flexDirection={"row"}
						justifyContent="center"
						alignItems={"flex-end"}
						gap="16px"
						w="100%"
						h="63px"
					>
						<Flex
							flexDirection={"column"}
							alignItems={"flex-start"}
							justifyContent="space-between"
							gap="8px"
							w="142px"
							h="100%"
						>
							<Text
								fontSize={"14px"}
								fontWeight="400"
								lineHeight={"20px"}
								color={"#626262"}
							>
								Preorder period
							</Text>
							<Input
								type="date"
								border={`1px solid ${borderColor}`}
								rounded="4px"
								p="8px 16px"
								w="100%"
								h="36px"
								fontSize={"14px"}
								fontWeight="400"
								lineHeight={"20px"}
								name="endDate"
								value={data.endDate}
								onChange={handleChange}
							/>
						</Flex>
						<Input
							type="date"
							border={`1px solid ${borderColor}`}
							rounded="4px"
							p="8px 16px"
							w="100%"
							h="36px"
							fontSize={"14px"}
							fontWeight="400"
							lineHeight={"20px"}
							name="startDate"
							value={data.startDate}
							onChange={handleChange}
						/>
					</Flex>

					<DefaultInput
						placeholder="Estimated delivery"
						type="date"
						error={false}
						leftIcons={<Image src={icons.Delivry} />}
						name={"date"}
						value={data.date}
						onChange={handleChange}
						isPassword={false}
					/>

					<Button
						w="100%"
						fontSize={["14px"]}
						rounded="8"
						bg={mainColor}
						fontWeight="400"
						colorScheme={"blue"}
						letterSpacing="1px"
						size={["sm", "md", "md"]}
						display="flex"
						gap="8px"
						alignItems="center"
						justifyContent="center"
						onClick={handleNext}
					>
						<Text>Next</Text>
						<Image src={icons.arrowRight} />
					</Button>
				</Flex>
			</Box>
			{/* Errors */}
			{error && (
				<Error
					active={error}
					setActive={setError}
					whiteColoe={whiteColoe}
					text={"Oh!"}
					message={"Please fill all data"}
				/>
			)}
			{acceptTrue && (
				<Error
					active={acceptTrue}
					setActive={setAcceptTrue}
					whiteColoe={whiteColoe}
					text={"it’s not a valid file!"}
					message={"Please try to upload another file"}
				/>
			)}
			{acceptImage && (
				<Error
					active={acceptImage}
					setActive={setAcceptImage}
					whiteColoe={whiteColoe}
					text={"it’s not a valid image!"}
					message={"Please try to upload another image"}
				/>
			)}
		</>
	);
};

export default UploadComponent;
