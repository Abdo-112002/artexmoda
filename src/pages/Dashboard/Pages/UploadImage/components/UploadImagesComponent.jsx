import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedInput } from "../../../../../components/DefaultInput";
import PopUp from "../../../../../components/PopUp";
import {
	addDraggableImages,
	addSelectedImages,
	removeImages,
} from "../../../../../store/ArtexSlices/UploadImagesSlice";
import UploadMultiImg from "./UploadMultiImg";

function UploadImagesComponent() {
	const dispatch = useDispatch();
	const { selectedImages } = useSelector((state) => state.uploadImages);
	// Colors
	const blackColor = `${"var(--black-color)"}`;
	const mainColor = `${"var(--main-color)"}`;
	const options = [
		{ value: "1", label: "Choose" },
		{ value: "2", label: "Option 2" },
		{ value: "3", label: "Option 3" },
		{ value: "4", label: "Option 4" },
		{ value: "5", label: "Option 5" },
	];

	// popUp state
	const [popUp, setPopUp] = useState(false);
	const [loading, setLoading] = useState(false);

	// Functions
	const onSelectImage = useCallback(
		(event) => {
			dispatch(addSelectedImages(event));
			// FOR BUG IN CHROME
			event.target.value = "";
		},
		[dispatch]
	);

	const onDropImages = useCallback(
		(event) => {
			event.preventDefault();
			dispatch(addDraggableImages(event));
		},
		[dispatch]
	);

	const removeImgSelected = useCallback(
		(imgIndex) => {
			dispatch(removeImages(imgIndex));
		},
		[dispatch]
	);

	return (
		<>
			<Box
				border={"1px solid #E6E7EE"}
				rounded="4"
				w={["90%", "90%", "360px"]}
				h="auto"
				p="32px"
				display={"flex"}
				alignItems="center"
				flexDirection={"column"}
				gap="20px"
				m={"auto"}
			>
				{/* title of the box */}
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
						Upload Images
					</Text>
				</Flex>

				<Box w="full">
					<Text
						fontSize={"14px"}
						fontWeight="400"
						lineHeight={"20px"}
						color="#626262"
						mb={"10px"}
					>
						Catalogue
					</Text>

					{/* select  Catalogue*/}
					<SelectedInput
						leftIcons={false}
						options={options}
						labelName="Catalogue"
						placeholder="SR23 - BOSS Black Menswear"
						name="selectCatalogue"
					/>
				</Box>

				<UploadMultiImg
					deleteImg={removeImgSelected}
					onDropImages={onDropImages}
					selected={selectedImages}
					functionSelect={onSelectImage}
					name={"uploadSpreadsheetImage"}
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
					onClick={() => selectedImages?.length > 0 && setPopUp(true)}
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
			</Box>
			<PopUp
				UploadNumber={selectedImages?.length}
				show={popUp}
				setShow={setPopUp}
				navigationPath={"upload-image/view-products"}
			/>
		</>
	);
}

export default UploadImagesComponent;
