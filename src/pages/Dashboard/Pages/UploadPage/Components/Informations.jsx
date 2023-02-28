import React, { useState } from "react";
import { Accordion, Flex } from "@chakra-ui/react";
import { Accordions, SelectInput } from "../../../../../components";

const Informations = () => {
	const [isSearchable, setIsSearchable] = useState(false);
	const [data, setData] = useState({
		brand: "",
		model: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
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
							<Flex
								flexDirection={"row"}
								alignItems="center"
								gap="16px"
								w="100%"
							>
								<SelectInput
									name="brand"
									val={data.brand}
									handelChange={handleChange}
									isSearchable={isSearchable}
									setIsSearchable={setIsSearchable}
									options={options}
									labelName="Brands"
								/>
								<SelectInput
									name="brand"
									val={data.brand}
									handelChange={handleChange}
									isSearchable={isSearchable}
									setIsSearchable={setIsSearchable}
									options={options}
									labelName="Brands"
								/>
							</Flex>
							<Flex
								flexDirection={"row"}
								alignItems="center"
								gap="16px"
								w="100%"
							>
								<SelectInput
									name="brand"
									val={data.brand}
									handelChange={handleChange}
									isSearchable={isSearchable}
									setIsSearchable={setIsSearchable}
									options={options}
									labelName="Brands"
								/>
								<SelectInput
									name="brand"
									val={data.brand}
									handelChange={handleChange}
									isSearchable={isSearchable}
									setIsSearchable={setIsSearchable}
									options={options}
									labelName="Brands"
								/>
							</Flex>
							<Flex
								flexDirection={"row"}
								alignItems="center"
								gap="16px"
								w="100%"
							>
								<SelectInput
									name="brand"
									val={data.brand}
									handelChange={handleChange}
									isSearchable={isSearchable}
									setIsSearchable={setIsSearchable}
									options={options}
									labelName="Brands"
								/>
								<SelectInput
									name="brand"
									val={data.brand}
									handelChange={handleChange}
									isSearchable={isSearchable}
									setIsSearchable={setIsSearchable}
									options={options}
									labelName="Brands"
								/>
							</Flex>
						</>
					}
				/>
				<Accordions
					accName={"Prtoduct information"}
					children={
						<Flex flexDirection={"row"} alignItems="center" gap="16px" w="100%">
							<SelectInput
								name="brand"
								val={data.brand}
								handelChange={handleChange}
								isSearchable={isSearchable}
								setIsSearchable={setIsSearchable}
								options={options}
								labelName="Brands"
							/>
							<SelectInput
								name="brand"
								val={data.brand}
								handelChange={handleChange}
								isSearchable={isSearchable}
								setIsSearchable={setIsSearchable}
								options={options}
								labelName="Brands"
							/>
						</Flex>
					}
				/>
				<Accordions
					accName={"Colors and sizes information"}
					children={
						<Flex flexDirection={"row"} alignItems="center" gap="16px" w="100%">
							<SelectInput
								name="brand"
								val={data.brand}
								handelChange={handleChange}
								isSearchable={isSearchable}
								setIsSearchable={setIsSearchable}
								options={options}
								labelName="Brands"
							/>
							<SelectInput
								name="brand"
								val={data.brand}
								handelChange={handleChange}
								isSearchable={isSearchable}
								setIsSearchable={setIsSearchable}
								options={options}
								labelName="Brands"
							/>
						</Flex>
					}
				/>
				<Accordions
					accName={"Other information"}
					children={
						<Flex flexDirection={"row"} alignItems="center" gap="16px" w="100%">
							<SelectInput
								name="brand"
								val={data.brand}
								handelChange={handleChange}
								isSearchable={isSearchable}
								setIsSearchable={setIsSearchable}
								options={options}
								labelName="Brands"
							/>
							<SelectInput
								name="brand"
								val={data.brand}
								handelChange={handleChange}
								isSearchable={isSearchable}
								setIsSearchable={setIsSearchable}
								options={options}
								labelName="Brands"
							/>
						</Flex>
					}
				/>
			</Accordion>
		</>
	);
};

export default Informations;
