import React from "react";
import { Flex, Text, Checkbox, Select, Input } from "@chakra-ui/react";

const SelectInput = ({
	labelName,
	checkName,
	isSearchable,
	val,
	handelChange,
	options,
	name,
	handelChangeCheck,
	notSelect,
	list,
	handleFixedChange,
}) => {
	return (
		<Flex flexDirection={"column"} alignItems="flex-start" gap="6px" w="100%">
			<Flex
				flexDirection={"row"}
				justifyContent="space-between"
				alignItems={"center"}
				gap="17px"
				w="100%"
			>
				<Text
					fontSize={"14px"}
					fontWeight="400"
					lineHeight={"20px"}
					color="#626262"
				>
					{labelName}
				</Text>
				{notSelect ? null : (
					<Checkbox name={checkName} onChange={handelChangeCheck}>
						<Text
							fontSize={"12px"}
							fontWeight="400"
							lineHeight={"20px"}
							color="#626262"
						>
							Fixed value
						</Text>
					</Checkbox>
				)}
			</Flex>
			{isSearchable ? (
				<>
					<Input
						fontSize={"14px"}
						fontWeight="400"
						lineHeight={"20px"}
						placeholder="Type Here"
						color="#303030"
						list="fixed"
						name={name}
						onChange={handleFixedChange}
					/>
					<datalist id="fixed">
						{list?.map((option, index) => (
							<option key={index} value={option.nome}>
								{option.nome}
							</option>
						))}
					</datalist>
				</>
			) : (
				<Select
					fontSize={"14px"}
					fontWeight="400"
					lineHeight={"20px"}
					color="#303030"
					name={name}
					onChange={handelChange}
				>
					<option>Choose</option>
					{options?.map((op, index) => (
						<option value={index} key={index}>
							{op}
						</option>
					))}
				</Select>
			)}
		</Flex>
	);
};

export default SelectInput;
