import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { icons } from "../../../../../assets";

const FileUpload = ({ select, size, setSelectFile, functionSelect, error }) => {
	const mainColor = `${"var(--main-color)"}`;
	const whiteColoe = `${"var(--txt-white)"}`;

	return (
		<>
			{select === "" ? (
				<Box width="100%" height="56px">
					<Box
						as="label"
						display={"flex"}
						alignItems="center"
						justifyContent={"center"}
						gap="16px"
						flexDirection={"row"}
						width="100%"
						height="56px"
						backgroundColor={error ? "#FF9E9E" : "#F6F6F6"}
						rounded="8px"
						cursor={"pointer"}
						border={error ? `2px dashed #FF0000` : `2px dashed #626262`}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 17V11M9 11L7 13M9 11L11 13"
								stroke={error ? "#fff" : "#626262"}
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
								stroke={error ? "#fff" : "black"}
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
								stroke={error ? "#fff" : "black"}
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<Text
							fontSize={"14px"}
							fontWeight="400"
							color={error ? "#FFF" : "#98A1B3"}
						>
							Drop your file here
						</Text>
						<Input
							type="file"
							hidden
							name="images"
							onChange={functionSelect}
							// Accept excel ext
							accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
						/>
					</Box>
					<br />
					<Input type="file" hidden />
				</Box>
			) : (
				<Box
					width="100%"
					height="63px"
					backgroundColor={mainColor}
					rounded="8px"
					position={"relative"}
					display="flex"
					alignItems={"center"}
					justifyContent="space-between"
					flexDirection={"row"}
					gap="16px"
					px="16px"
				>
					<svg
						width="21"
						height="25"
						viewBox="0 0 21 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M21 7.25V21.5C21 22.2956 20.6839 23.0587 20.1213 23.6213C19.5587 24.1839 18.7956 24.5 18 24.5V23C18.3978 23 18.7794 22.842 19.0607 22.5607C19.342 22.2794 19.5 21.8978 19.5 21.5V7.25H16.5C15.9033 7.25 15.331 7.01295 14.909 6.59099C14.4871 6.16903 14.25 5.59674 14.25 5V2H6C5.60218 2 5.22064 2.15804 4.93934 2.43934C4.65804 2.72064 4.5 3.10218 4.5 3.5V17H3V3.5C3 2.70435 3.31607 1.94129 3.87868 1.37868C4.44129 0.816071 5.20435 0.5 6 0.5L14.25 0.5L21 7.25ZM5.2905 18.275H3.951L2.7165 20.4335H2.6625L1.4145 18.275H0.018L1.8585 21.2495L0 24.275H1.2915L2.571 22.1525H2.6235L3.8985 24.275H5.2605L3.3795 21.287L5.2905 18.275ZM6.7215 24.2735V20.2835H6.7785L8.2065 23.522H8.9805L10.3995 20.282H10.4565V24.2735H11.529V18.275H10.329L8.619 22.169H8.5815L6.87 18.275H5.661V24.2735H6.7215ZM13.7865 23.2625H16.3305V24.2735H12.6V18.275H13.7865V23.2625Z"
							fill="white"
						/>
					</svg>

					<Flex alignItems={"flex-start"} flexDirection="column" gap="1px">
						<Text fontSize={"14px"} fontWeight="600" color={whiteColoe}>
							{select.name}
						</Text>
						<Text fontSize={"8px"} fontWeight="400" color={whiteColoe}>
							{`${size.toFixed(3)} MB - XML file`}
						</Text>
					</Flex>

					<Image
						src={icons.removeFile}
						width="16px"
						height="16px"
						cursor={"pointer"}
						onClick={() => setSelectFile("")}
					/>
				</Box>
			)}
		</>
	);
};

export default FileUpload;
