import React, { useState } from "react";
import { Accordion, Button, Flex } from "@chakra-ui/react";
import { Accordions, PopUp, SelectInput } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import SendWithToken from "./../../../../../common/SendWithToken";
import {
	API_URL_GET_FIXED,
	API_URL_UPLOAD_PRODUCTS2,
} from "./../../../../../common/Apis";

export const FlexBox = ({ children }) => {
	return (
		<>
			<Flex
				flexDirection={["column", "column", "row", "row"]}
				alignItems="center"
				gap="16px"
				w="100%"
			>
				{children}
			</Flex>
		</>
	);
};

const Informations = ({ infoData }) => {
	const { http, http2 } = SendWithToken();
	const [fixedValue, setfixedValue] = useState();

	const [data, setData] = useState({
		// Main Information
		brand: 99,
		year: 99,
		season: 99,
		subSeason: 99,
		seasonCode: 99,
		collection: 99,
		department: 99,
		departmentCode: 99,
		category: 99,
		// Product Information
		productType: 99,
		productDesc: 99,
		modelCode: 99,
		partCode: 99,
		// Color Information
		colorPicture: 99,
		colorCode: 99,
		color: 99,
		colorTheme: 99,
		fabric: 99,
		fabricCode: 99,
		madeIn: 99,
		articleCode: 99,
		description: 99,
		producer: 99,
		sizeChart: 99,
		// Other Information
		cost: 99,
		saleCost1: 99,
		saleCost2: 99,
		saleCost3: 99,
		stockCost: 99,
		adHocCost: 99,
		RWTprice: 99,
		picture: 99,
	});

	const [check, setCheck] = useState({
		// Main Information
		brand: false,
		year: false,
		season: false,
		subSeason: false,
		seasonCode: false,
		collection: false,
		department: false,
		departmentCode: false,
		category: false,
		// Product Information
		productType: false,
		productDesc: false,
		modelCode: false,
		partCode: false,
		// Color Information
		colorPicture: false,
		colorCode: false,
		color: false,
		colorTheme: false,
		fabric: false,
		fabricCode: false,
		madeIn: false,
		articleCode: false,
		description: false,
		producer: false,
		sizeChart: false,
		// Other Information
		cost: false,
		saleCost1: false,
		saleCost2: false,
		saleCost3: false,
		stockCost: false,
		adHocCost: false,
		RWTprice: false,
		picture: false,
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: parseInt(e.target.value),
		});
	};

	const handleFixedChange = (e) => {
		setData({
			...data,
			[e.target.name]: [e.target.name, e.target.value],
		});
	};

	const handleChangeCheck = (e) => {
		setCheck({
			...check,
			[e.target.name]: e.target.checked,
		});
		// get currend checked and get name
		let name = e.target.name;
		let checked = e.target.checked;
		if (checked) {
			http2
				.get(API_URL_GET_FIXED, {
					params: {
						fixedValueSelect: name,
					},
				})
				.then((res) => {
					setfixedValue(res.data.fixedValues);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const [showPopup, setShowPopup] = useState(false);
	const [showPopupMessage, setShowPopupMessage] = useState("");
	const navigate = useNavigate();
	const backHandel = () => {
		localStorage.removeItem("fileId");
		navigate("/dashboard/upload");
	};

	const handelSendData = () => {
		http
			.post(API_URL_UPLOAD_PRODUCTS2, {
				spreadsheetId: localStorage.getItem("fileId"),
				selectedColumnVal: data,
			})
			.then((res) => {
				console.log(res);
				setShowPopupMessage(res.data.succesMessage);
				setShowPopup(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Accordion allowToggle defaultIndex={[0]} w={"100%"}>
				<Accordions
					accName={"Main information"}
					children={
						<>
							<FlexBox>
								<SelectInput
									name="brand"
									val={data.brand}
									handelChange={handleChange}
									isSearchable={check.brand}
									handelChangeCheck={handleChangeCheck}
									checkName="brand"
									handleFixedChange={handleFixedChange}
									options={infoData}
									list={fixedValue}
									labelName="Brand"
								/>
								<SelectInput
									name="year"
									val={data.year}
									handelChange={handleChange}
									isSearchable={check.year}
									handelChangeCheck={handleChangeCheck}
									checkName="year"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Year"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="season"
									val={data.season}
									handelChange={handleChange}
									isSearchable={check.season}
									handelChangeCheck={handleChangeCheck}
									checkName="season"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Season"
								/>
								<SelectInput
									name="subSeason"
									val={data.subSeason}
									handelChange={handleChange}
									isSearchable={check.subSeason}
									handelChangeCheck={handleChangeCheck}
									checkName="subSeason"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Sub Season"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="seasonCode"
									val={data.seasonCode}
									handelChange={handleChange}
									isSearchable={check.seasonCode}
									handelChangeCheck={handleChangeCheck}
									checkName="seasonCode"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Season Code"
								/>
								<SelectInput
									name="collection"
									val={data.collection}
									handelChange={handleChange}
									isSearchable={check.collection}
									handelChangeCheck={handleChangeCheck}
									checkName="collection"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Collection"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="department"
									val={data.department}
									handelChange={handleChange}
									isSearchable={check.department}
									handelChangeCheck={handleChangeCheck}
									checkName="department"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Department"
								/>
								<SelectInput
									name="departmentCode"
									val={data.departmentCode}
									handelChange={handleChange}
									isSearchable={check.departmentCode}
									handelChangeCheck={handleChangeCheck}
									checkName="departmentCode"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Department Code"
								/>
							</FlexBox>
							<SelectInput
								name="category"
								val={data.category}
								handelChange={handleChange}
								isSearchable={check.category}
								handelChangeCheck={handleChangeCheck}
								checkName="category"
								handleFixedChange={handleFixedChange}
								options={infoData}
								labelName="Category"
							/>
						</>
					}
				/>
				<Accordions
					accName={"Prtoduct information"}
					children={
						<>
							<FlexBox>
								<SelectInput
									name="productType"
									val={data.productType}
									handelChange={handleChange}
									isSearchable={check.productType}
									handelChangeCheck={handleChangeCheck}
									checkName="productType"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Product Type"
								/>
								<SelectInput
									name="productDesc"
									val={data.productDesc}
									handelChange={handleChange}
									isSearchable={check.productDesc}
									handelChangeCheck={handleChangeCheck}
									checkName="productDesc"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Product Describtion"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="modelCode"
									val={data.modelCode}
									handelChange={handleChange}
									isSearchable={check.modelCode}
									handelChangeCheck={handleChangeCheck}
									checkName="modelCode"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Model Code"
								/>
								<SelectInput
									name="partCode"
									val={data.partCode}
									handelChange={handleChange}
									isSearchable={check.partCode}
									handelChangeCheck={handleChangeCheck}
									checkName="partCode"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Part Code"
								/>
							</FlexBox>
						</>
					}
				/>
				<Accordions
					accName={"Colors and sizes information"}
					children={
						<>
							<FlexBox>
								<SelectInput
									name="colorPicture"
									val={data.colorPicture}
									handelChange={handleChange}
									isSearchable={check.colorPicture}
									handelChangeCheck={handleChangeCheck}
									checkName="colorPicture"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Color Picture"
								/>
								<SelectInput
									name="colorCode"
									val={data.colorCode}
									handelChange={handleChange}
									isSearchable={check.colorCode}
									handelChangeCheck={handleChangeCheck}
									checkName="colorCode"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Color Code"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="color"
									val={data.color}
									handelChange={handleChange}
									isSearchable={check.color}
									handelChangeCheck={handleChangeCheck}
									checkName="color"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Color"
								/>
								<SelectInput
									name="colorTheme"
									val={data.colorTheme}
									handelChange={handleChange}
									isSearchable={check.colorTheme}
									handelChangeCheck={handleChangeCheck}
									checkName="colorTheme"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Color Theme"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="fabric"
									val={data.fabric}
									handelChange={handleChange}
									isSearchable={check.fabric}
									handelChangeCheck={handleChangeCheck}
									checkName="fabric"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Fabric"
								/>
								<SelectInput
									name="fabricCode"
									val={data.fabricCode}
									handelChange={handleChange}
									isSearchable={check.fabricCode}
									handelChangeCheck={handleChangeCheck}
									checkName="fabricCode"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Fabric Code"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="madeIn"
									val={data.madeIn}
									handelChange={handleChange}
									isSearchable={check.madeIn}
									handelChangeCheck={handleChangeCheck}
									checkName="madeIn"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Made In"
								/>
								<SelectInput
									name="articleCode"
									val={data.articleCode}
									handelChange={handleChange}
									isSearchable={check.articleCode}
									handelChangeCheck={handleChangeCheck}
									checkName="articleCode"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Article Code"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="description"
									val={data.description}
									handelChange={handleChange}
									isSearchable={check.description}
									handelChangeCheck={handleChangeCheck}
									checkName="description"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Describtion"
								/>
								<SelectInput
									name="producer"
									val={data.producer}
									handelChange={handleChange}
									isSearchable={check.producer}
									handelChangeCheck={handleChangeCheck}
									checkName="producer"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Producer"
								/>
							</FlexBox>
							<SelectInput
								name="sizeChart"
								val={data.sizeChart}
								handelChange={handleChange}
								isSearchable={check.sizeChart}
								handelChangeCheck={handleChangeCheck}
								checkName="sizeChart"
								options={infoData}
								handleFixedChange={handleFixedChange}
								labelName="Size Chart"
							/>
						</>
					}
				/>
				<Accordions
					accName={"Other information"}
					children={
						<>
							<FlexBox>
								<SelectInput
									name="cost"
									val={data.cost}
									handelChange={handleChange}
									isSearchable={check.cost}
									handelChangeCheck={handleChangeCheck}
									checkName="cost"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Cost"
								/>
								<SelectInput
									name="saleCost1"
									val={data.saleCost1}
									handelChange={handleChange}
									isSearchable={check.saleCost1}
									handelChangeCheck={handleChangeCheck}
									checkName="saleCost1"
									handleFixedChange={handleFixedChange}
									options={infoData}
									labelName="Sale Cost 1"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="saleCost2"
									val={data.saleCost2}
									handelChange={handleChange}
									isSearchable={check.saleCost2}
									handelChangeCheck={handleChangeCheck}
									checkName="saleCost2"
									options={infoData}
									labelName="Sale Cost 2"
									handleFixedChange={handleFixedChange}
								/>
								<SelectInput
									name="saleCost3"
									val={data.saleCost3}
									handelChange={handleChange}
									isSearchable={check.saleCost3}
									handelChangeCheck={handleChangeCheck}
									checkName="saleCost3"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Sale Cost 3"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="stockCost"
									val={data.stockCost}
									handelChange={handleChange}
									isSearchable={check.stockCost}
									handelChangeCheck={handleChangeCheck}
									checkName="stockCost"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Stock Cost"
								/>
								<SelectInput
									name="adHocCost"
									val={data.adHocCost}
									handelChange={handleChange}
									isSearchable={check.adHocCost}
									handelChangeCheck={handleChangeCheck}
									checkName="adHocCost"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="Hoc Cost"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="RWTprice"
									val={data.RWTprice}
									handelChange={handleChange}
									isSearchable={check.RWTprice}
									handelChangeCheck={handleChangeCheck}
									checkName="RWTprice"
									options={infoData}
									labelName="RWT Price"
									handleFixedChange={handleFixedChange}
								/>
								<SelectInput
									name="picture"
									val={data.picture}
									notSelect={true}
									handelChange={handleChange}
									isSearchable={check.picture}
									handelChangeCheck={handleChangeCheck}
									checkName="picture"
									options={infoData}
									handleFixedChange={handleFixedChange}
									labelName="picture"
								/>
							</FlexBox>
						</>
					}
				/>
			</Accordion>
			<Flex
				display={"flex"}
				alignItems="center"
				justifyContent={"flex-end"}
				w="100%"
				gap="16px"
			>
				<Button
					w="122px"
					colorScheme={"red"}
					variant="outline"
					onClick={() => backHandel()}
				>
					Cancel
				</Button>
				<Button
					fontSize={["14px"]}
					w="122px"
					rounded="8"
					bg={`${"var(--main-color)"}`}
					fontWeight="400"
					colorScheme={"blue"}
					letterSpacing="1px"
					onClick={() => handelSendData()}
				>
					Finish
				</Button>
			</Flex>

			<PopUp
				UploadNumber={showPopupMessage}
				show={showPopup}
				setShow={setShowPopup}
			/>
		</>
	);
};

export default Informations;
