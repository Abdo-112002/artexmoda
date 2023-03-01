import React, { useState } from "react";
import { Accordion, Flex } from "@chakra-ui/react";
import { Accordions, SelectInput } from "../../../../../components";

export const FlexBox = ({ children }) => {
	// const [isOpen, setIsOpen] = useState(false);
	// const [isOpen2, setIsOpen2] = useState(false);
	// const [isOpen3, setIsOpen3] = useState(false);
	// const [isOpen4, setIsOpen4] = useState(false);
	// const [isOpen5, setIsOpen5] = useState(false);
	// const [isOpen6, setIsOpen6] = useState(false);
	// const [isOpen7, setIsOpen7] = useState(false);
	// const [isOpen8, setIsOpen8] = useState(false);
	// const [isOpen9, setIsOpen9] = useState(false);
	// const [isOpen10, setIsOpen10] = useState(false);
	// const [isOpen11, setIsOpen11] = useState(false);
	// const [isOpen12, setIsOpen12] = useState(false);
	// const [isOpen13, setIsOpen13] = useState(false);
	// const [isOpen14, setIsOpen14] = useState(false);
	// const [isOpen15, setIsOpen15] = useState(false);
	// const [isOpen16, setIsOpen16] = useState(false);
	// const [isOpen17, setIsOpen17] = useState(false);
	// const [isOpen18, setIsOpen18] = useState(false);
	// const [isOpen19, setIsOpen19] = useState(false);
	// const [isOpen20, setIsOpen20] = useState(false);
	// const [isOpen21, setIsOpen21] = useState(false);
	// const [isOpen22, setIsOpen22] = useState(false);
	// const [isOpen23, setIsOpen23] = useState(false);
	// const [isOpen24, setIsOpen24] = useState(false);
	// const [isOpen25, setIsOpen25] = useState(false);
	// const [isOpen26, setIsOpen26] = useState(false);
	// const [isOpen27, setIsOpen27] = useState(false);
	// const [isOpen28, setIsOpen28] = useState(false);
	// const [isOpen29, setIsOpen29] = useState(false);
	// const [isOpen30, setIsOpen30] = useState(false);

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

const Informations = () => {
	const [data, setData] = useState({
		// Main Information
		Brand: "",
		Year: "",
		Season: "",
		SubSeason: "",
		SeasonCode: "",
		Collection: "",
		Department: "",
		DepartmentCode: "",
		Category: "",
		// Product Information
		ProductType: "",
		ProductDescribtion: "",
		ModelCode: "",
		PartCode: "",
		// Color Information
		ColorPicture: "",
		ColorCode: "",
		Color: "",
		ColorTheme: "",
		Fabric: "",
		FabricCode: "",
		MadeIn: "",
		ArticleCode: "",
		Describtion: "",
		Producer: "",
		SizeChart: "",
		// Other Information
		Cost: "",
		SaleCost1: "",
		SaleCost2: "",
		SaleCost3: "",
		StockCost: "",
		HocCost: "",
		RwtPrice: "",
		Pictures: "",
	});

	const [check, setCheck] = useState({
		check1: false,
		check2: false,
		check3: false,
		check4: false,
		check5: false,
		check6: false,
		check7: false,
		check8: false,
		check9: false,
		check10: false,
		check11: false,
		check12: false,
		check13: false,
		check14: false,
		check15: false,
		check16: false,
		check17: false,
		check18: false,
		check19: false,
		check20: false,
		check21: false,
		check22: false,
		check23: false,
		check24: false,
		check25: false,
		check26: false,
		check27: false,
		check28: false,
		check29: false,
		check30: false,
		check31: false,
		check32: false,
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeCheck = (e) => {
		setCheck({
			...check,
			[e.target.name]: e.target.checked,
		});
	};

	const options = [
		{ value: "1", label: "Choose" },
		{ value: "2", label: "Option 2" },
		{ value: "3", label: "Option 3" },
		{ value: "4", label: "Option 4" },
		{ value: "5", label: "Option 5" },
	];

	return (
		<>
			<Accordion allowToggle defaultIndex={[0]} w={"100%"}>
				<Accordions
					accName={"Main information"}
					children={
						<>
							<FlexBox>
								<SelectInput
									name="Brand"
									val={data.Brand}
									handelChange={handleChange}
									isSearchable={check.check1}
									handelChangeCheck={handleChangeCheck}
									checkName="check1"
									options={options}
									labelName="Brand"
								/>
								<SelectInput
									name="Year"
									val={data.Year}
									handelChange={handleChange}
									isSearchable={check.check2}
									handelChangeCheck={handleChangeCheck}
									checkName="check2"
									options={options}
									labelName="Year"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="Season"
									val={data.Season}
									handelChange={handleChange}
									isSearchable={check.check3}
									handelChangeCheck={handleChangeCheck}
									checkName="check3"
									options={options}
									labelName="Season"
								/>
								<SelectInput
									name="SubSeason"
									val={data.SubSeason}
									handelChange={handleChange}
									isSearchable={check.check4}
									handelChangeCheck={handleChangeCheck}
									checkName="check4"
									options={options}
									labelName="Sub Season"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="SeasonCode"
									val={data.SeasonCode}
									handelChange={handleChange}
									isSearchable={check.check5}
									handelChangeCheck={handleChangeCheck}
									checkName="check5"
									options={options}
									labelName="Season Code"
								/>
								<SelectInput
									name="Collection"
									val={data.Collection}
									handelChange={handleChange}
									isSearchable={check.check6}
									handelChangeCheck={handleChangeCheck}
									checkName="check6"
									options={options}
									labelName="Collection"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="Department"
									val={data.Department}
									handelChange={handleChange}
									isSearchable={check.check7}
									handelChangeCheck={handleChangeCheck}
									checkName="check7"
									options={options}
									labelName="Department"
								/>
								<SelectInput
									name="DepartmentCode"
									val={data.DepartmentCode}
									handelChange={handleChange}
									isSearchable={check.check8}
									handelChangeCheck={handleChangeCheck}
									checkName="check8"
									options={options}
									labelName="Department Code"
								/>
							</FlexBox>
							<SelectInput
								name="Category"
								val={data.Category}
								handelChange={handleChange}
								isSearchable={check.check9}
								handelChangeCheck={handleChangeCheck}
								checkName="check9"
								options={options}
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
									name="ProductType"
									val={data.ProductType}
									handelChange={handleChange}
									isSearchable={check.check10}
									handelChangeCheck={handleChangeCheck}
									checkName="check10"
									options={options}
									labelName="Product Type"
								/>
								<SelectInput
									name="ProductDescribtion"
									val={data.ProductDescribtion}
									handelChange={handleChange}
									isSearchable={check.check11}
									handelChangeCheck={handleChangeCheck}
									checkName="check11"
									options={options}
									labelName="Product Describtion"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="ModelCode"
									val={data.ModelCode}
									handelChange={handleChange}
									isSearchable={check.check12}
									handelChangeCheck={handleChangeCheck}
									checkName="check12"
									options={options}
									labelName="Model Code"
								/>
								<SelectInput
									name="PartCode"
									val={data.PartCode}
									handelChange={handleChange}
									isSearchable={check.check13}
									handelChangeCheck={handleChangeCheck}
									checkName="check13"
									options={options}
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
									name="ColorPicture"
									val={data.ColorPicture}
									handelChange={handleChange}
									isSearchable={check.check14}
									handelChangeCheck={handleChangeCheck}
									checkName="check14"
									options={options}
									labelName="Color Picture"
								/>
								<SelectInput
									name="ColorCode"
									val={data.ColorCode}
									handelChange={handleChange}
									isSearchable={check.check15}
									handelChangeCheck={handleChangeCheck}
									checkName="check15"
									options={options}
									labelName="Color Code"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="Color"
									val={data.Color}
									handelChange={handleChange}
									isSearchable={check.check16}
									handelChangeCheck={handleChangeCheck}
									checkName="check16"
									options={options}
									labelName="Color"
								/>
								<SelectInput
									name="ColorTheme"
									val={data.ColorTheme}
									handelChange={handleChange}
									isSearchable={check.check17}
									handelChangeCheck={handleChangeCheck}
									checkName="check17"
									options={options}
									labelName="Color Theme"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="Fabric"
									val={data.Fabric}
									handelChange={handleChange}
									isSearchable={check.check18}
									handelChangeCheck={handleChangeCheck}
									checkName="check18"
									options={options}
									labelName="Fabric"
								/>
								<SelectInput
									name="FabricCode"
									val={data.FabricCode}
									handelChange={handleChange}
									isSearchable={check.check19}
									handelChangeCheck={handleChangeCheck}
									checkName="check19"
									options={options}
									labelName="Fabric Code"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="MadeIn"
									val={data.MadeIn}
									handelChange={handleChange}
									isSearchable={check.check20}
									handelChangeCheck={handleChangeCheck}
									checkName="check20"
									options={options}
									labelName="Made In"
								/>
								<SelectInput
									name="ArticleCode"
									val={data.ArticleCode}
									handelChange={handleChange}
									isSearchable={check.check21}
									handelChangeCheck={handleChangeCheck}
									checkName="check21"
									options={options}
									labelName="Article Code"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="Describtion"
									val={data.Describtion}
									handelChange={handleChange}
									isSearchable={check.check22}
									handelChangeCheck={handleChangeCheck}
									checkName="check22"
									options={options}
									labelName="Describtion"
								/>
								<SelectInput
									name="Producer"
									val={data.Producer}
									handelChange={handleChange}
									isSearchable={check.check23}
									handelChangeCheck={handleChangeCheck}
									checkName="check23"
									options={options}
									labelName="Producer"
								/>
							</FlexBox>
							<SelectInput
								name="SizeChart"
								val={data.SizeChart}
								handelChange={handleChange}
								isSearchable={check.check24}
								handelChangeCheck={handleChangeCheck}
								checkName="check24"
								options={options}
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
									name="Cost"
									val={data.Cost}
									handelChange={handleChange}
									isSearchable={check.check25}
									handelChangeCheck={handleChangeCheck}
									checkName="check25"
									options={options}
									labelName="Cost"
								/>
								<SelectInput
									name="SaleCost1"
									val={data.SaleCost1}
									handelChange={handleChange}
									isSearchable={check.check26}
									handelChangeCheck={handleChangeCheck}
									checkName="check26"
									options={options}
									labelName="Sale Cost 1"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="SaleCost2"
									val={data.SaleCost2}
									handelChange={handleChange}
									isSearchable={check.check27}
									handelChangeCheck={handleChangeCheck}
									checkName="check27"
									options={options}
									labelName="Sale Cost 2"
								/>
								<SelectInput
									name="SaleCost3"
									val={data.SaleCost3}
									handelChange={handleChange}
									isSearchable={check.check28}
									handelChangeCheck={handleChangeCheck}
									checkName="check28"
									options={options}
									labelName="Sale Cost 3"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="StockCost"
									val={data.StockCost}
									handelChange={handleChange}
									isSearchable={check.check29}
									handelChangeCheck={handleChangeCheck}
									checkName="check29"
									options={options}
									labelName="Stock Cost"
								/>
								<SelectInput
									name="HocCost"
									val={data.HocCost}
									handelChange={handleChange}
									isSearchable={check.check30}
									handelChangeCheck={handleChangeCheck}
									checkName="check30"
									options={options}
									labelName="Hoc Cost"
								/>
							</FlexBox>
							<FlexBox>
								<SelectInput
									name="RwtPrice"
									val={data.RwtPrice}
									handelChange={handleChange}
									isSearchable={check.check31}
									handelChangeCheck={handleChangeCheck}
									checkName="check31"
									options={options}
									labelName="RWT Price"
								/>
								<SelectInput
									name="Pictures"
									val={data.Pictures}
									handelChange={handleChange}
									isSearchable={check.check32}
									handelChangeCheck={handleChangeCheck}
									checkName="check32"
									options={options}
									labelName="Pictures"
								/>
							</FlexBox>
						</>
					}
				/>
			</Accordion>
		</>
	);
};

export default Informations;
