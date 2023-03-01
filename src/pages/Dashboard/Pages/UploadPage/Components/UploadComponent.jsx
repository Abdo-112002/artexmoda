import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { DefaultInput } from "../../../../../components";

import { Error } from "../../../../../components";
import { useNavigate } from "react-router-dom";

import ImageSelected from "./ImageSelected";
import FileUpload from "./FileUpload";
import DatePickerSelect from "./DatePickerSelect";
import SendWithToken from "../../../../../common/SendWithToken";
import { API_URL_UPLOAD_PRODUCTS } from "../../../../../common/Apis";

const UploadComponent = () => {
	// Custon Navigate
	const navigate = useNavigate();
	const { http2 } = SendWithToken();

	// Colors
	const blackColor = `${"var(--black-color)"}`;
	const mainColor = `${"var(--main-color)"}`;
	const whiteColoe = `${"var(--txt-white)"}`;

	// Error State
	const [error, setError] = useState(false);
	const [acceptTrue, setAcceptTrue] = useState(false);
	const [acceptImage, setAcceptImage] = useState(false);
	const [nameIsExist, setNameIsExist] = useState(false);
	const [fileIsExist, setFileIsExist] = useState(false);
	const [messageExist, setMessageExist] = useState("");

	// Selected View State
	const [selectedImages, setSelectedImages] = useState("");
	const [selectFile, setSelectFile] = useState("");
	const [size, setSized] = useState(0);

	// Foucs Icon State
	const [loading, setLoading] = useState(false);
	const [startFouces, setStartFouces] = useState(false);
	const [endFouces, setEndFouces] = useState(false);
	const [estFouces, setEstFouces] = useState(false);

	// Data Send State
	const [dataSend, setDataSend] = useState({
		uploadSpreadsheetName: "",
	});
	const [uploadSpreadsheetFile, setUploadSpreadsheetFile] = useState([]);
	const [uploadSpreadsheetImage, setUploadSpreadsheetImage] = useState([]);
	const [preorderStartDate, setPreorderStartDate] = useState("");
	const [preorderEndDate, setPreorderEndDate] = useState("");
	const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");

	// Functions
	const onSelectImage = (event) => {
		const selectedFiles = event.target.files[0];
		setUploadSpreadsheetImage(selectedFiles);
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
		setUploadSpreadsheetFile(selectedFiles);
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

	// handelOnChange
	const handelOnChange = (event) => {
		const { name, value } = event.target;
		setDataSend({
			...dataSend,
			[name]: value,
		});
	};

	// Handel Submit Function
	const handleSubmit = () => {
		setLoading(true);
		// Check data is Empty or no
		if (
			dataSend.uploadSpreadsheetName === "" &&
			uploadSpreadsheetFile.length === 0 &&
			uploadSpreadsheetImage.length === 0
		) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 3000);
		}
		// Send Form Data using axios
		http2
			.post(`${API_URL_UPLOAD_PRODUCTS}`, {
				uploadSpreadsheetName: dataSend.uploadSpreadsheetName,
				uploadSpreadsheetFile: uploadSpreadsheetFile,
				uploadSpreadsheetImage: uploadSpreadsheetImage,
				preorderStartDate: preorderStartDate,
				preorderEndDate: preorderEndDate,
				expectedDeliveryDate: expectedDeliveryDate,
			})
			.then((res) => {
				setLoading(false);
				if (res.data.status === 200) {
					localStorage.setItem("fileId", res.data.spreadsheetId);
					navigate("view");
				}
			})
			.catch((err) => {
				setLoading(false);
				if (err.response.data.uploadFormErrors.catalougueNameError) {
					setSelectFile("");
					setFileIsExist(true);
					setMessageExist(
						err.response.data.uploadFormErrors.catalougueNameError
					);
					setTimeout(() => {
						setFileIsExist(false);
					}, 3000);
				}
			});
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
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
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
						name={"uploadSpreadsheetImage"}
					/>

					<DefaultInput
						placeholder="Catalougue name"
						type="text"
						error={error || nameIsExist}
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
									stroke={error ? "#FF0000" : "#626262"}
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10.6667 2.67993C12.8867 2.79993 14 3.61993 14 6.6666V10.6666C14 13.3333 13.3333 14.6666 10 14.6666H6C2.66667 14.6666 2 13.3333 2 10.6666V6.6666C2 3.6266 3.11333 2.79993 5.33333 2.67993"
									stroke={error ? "#FF0000" : "#626262"}
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						}
						name={"uploadSpreadsheetName"}
						value={dataSend.uploadSpreadsheetName}
						onChange={handelOnChange}
						isPassword={false}
					/>

					{/* File Selected Component */}
					<FileUpload
						functionSelect={onSelectFile}
						select={selectFile}
						setSelectFile={setSelectFile}
						size={size}
						error={error || acceptTrue || fileIsExist}
						name={"uploadSpreadsheetFile"}
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
							w="100%"
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
							<DatePickerSelect
								holder={"From"}
								date={preorderStartDate}
								name={"preorderStartDate"}
								setDate={setPreorderStartDate}
								fouces={startFouces}
								setFouces={setStartFouces}
							/>
						</Flex>
						<DatePickerSelect
							holder={"To"}
							date={preorderEndDate}
							setDate={setPreorderEndDate}
							fouces={endFouces}
							setFouces={setEndFouces}
							name={"preorderEndDate"}
						/>
					</Flex>

					<DatePickerSelect
						holder={"Estimated delivery"}
						date={expectedDeliveryDate}
						setDate={setExpectedDeliveryDate}
						fouces={estFouces}
						setFouces={setEstFouces}
						name={"expectedDeliveryDate"}
						pl="40px !important"
						leftIcon={
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								className="w-[16px] h-[16px] absolute left-[16px]"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_817_776)">
									<path
										d="M8.00001 9.33325H8.66667C9.40001 9.33325 10 8.73325 10 7.99992V1.33325H4.00001C3.00001 1.33325 2.12667 1.88659 1.67334 2.69992"
										stroke="#626262"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M1.33334 11.3333C1.33334 12.4399 2.22668 13.3333 3.33334 13.3333H4.00001C4.00001 12.5999 4.60001 11.9999 5.33334 11.9999C6.06668 11.9999 6.66668 12.5999 6.66668 13.3333H9.33334C9.33334 12.5999 9.93334 11.9999 10.6667 11.9999C11.4 11.9999 12 12.5999 12 13.3333H12.6667C13.7733 13.3333 14.6667 12.4399 14.6667 11.3333V9.33325H12.6667C12.3 9.33325 12 9.03325 12 8.66659V6.66659C12 6.29992 12.3 5.99992 12.6667 5.99992H13.5267L12.3867 4.00659C12.2692 3.8026 12.1002 3.63304 11.8967 3.51487C11.6931 3.39671 11.4621 3.33408 11.2267 3.33325H10V7.99992C10 8.73325 9.40001 9.33325 8.66668 9.33325H8.00001"
										stroke="#626262"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M1.33334 5.33325H5.33334M1.33334 7.33325H4.00001M1.33334 9.33325H2.66668M5.33334 14.6666C5.68697 14.6666 6.0261 14.5261 6.27615 14.2761C6.5262 14.026 6.66668 13.6869 6.66668 13.3333C6.66668 12.9796 6.5262 12.6405 6.27615 12.3904C6.0261 12.1404 5.68697 11.9999 5.33334 11.9999C4.97972 11.9999 4.64058 12.1404 4.39053 12.3904C4.14049 12.6405 4.00001 12.9796 4.00001 13.3333C4.00001 13.6869 4.14049 14.026 4.39053 14.2761C4.64058 14.5261 4.97972 14.6666 5.33334 14.6666ZM10.6667 14.6666C11.0203 14.6666 11.3594 14.5261 11.6095 14.2761C11.8595 14.026 12 13.6869 12 13.3333C12 12.9796 11.8595 12.6405 11.6095 12.3904C11.3594 12.1404 11.0203 11.9999 10.6667 11.9999C10.3131 11.9999 9.97392 12.1404 9.72387 12.3904C9.47382 12.6405 9.33334 12.9796 9.33334 13.3333C9.33334 13.6869 9.47382 14.026 9.72387 14.2761C9.97392 14.5261 10.3131 14.6666 10.6667 14.6666ZM14.6667 7.99992V9.33325H12.6667C12.3 9.33325 12 9.03325 12 8.66659V6.66659C12 6.29992 12.3 5.99992 12.6667 5.99992H13.5267L14.6667 7.99992Z"
										stroke="#626262"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_817_776">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
						}
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
						onClick={handleSubmit}
					>
						{loading ? (
							<div
								className="spinner-border spinner-border-sm text-white"
								role="status"
							>
								<span className="visually-hidden">Loading...</span>
							</div>
						) : (
							<>
								<Text>Next</Text>
								<svg
									width="13"
									height="10"
									viewBox="0 0 13 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.12001 0.953369L12.1667 5.00004L8.12001 9.0467M0.833344 5.00004H12.0533"
										stroke="white"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</>
						)}
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
			{fileIsExist && (
				<Error
					active={fileIsExist}
					setActive={setFileIsExist}
					whiteColoe={whiteColoe}
					text={"Oh!"}
					message={messageExist}
				/>
			)}
			{nameIsExist && (
				<Error
					active={nameIsExist}
					setActive={setNameIsExist}
					whiteColoe={whiteColoe}
					text={"Oh!"}
					message={messageExist}
				/>
			)}
		</>
	);
};

export default UploadComponent;
