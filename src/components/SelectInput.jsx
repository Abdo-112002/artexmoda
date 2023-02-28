import React from "react";
import { Flex, Text, Checkbox, Select, Input } from "@chakra-ui/react";

const SelectInput = ({
	labelName,
	setIsSearchable,
	isSearchable,
	val,
	handelChange,
	options,
	name,
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
				<Checkbox
					onChange={() => {
						setIsSearchable(!isSearchable);
					}}
				>
					<Text
						fontSize={"12px"}
						fontWeight="400"
						lineHeight={"20px"}
						color="#626262"
					>
						Fixed value
					</Text>
				</Checkbox>
			</Flex>
			{isSearchable ? (
				<Input
					fontSize={"14px"}
					fontWeight="400"
					lineHeight={"20px"}
					placeholder="Type Here"
					color="#303030"
					name={name}
					value={val}
					onChange={handelChange}
				/>
			) : (
				<Select
					fontSize={"14px"}
					fontWeight="400"
					lineHeight={"20px"}
					color="#303030"
					name={name}
					onChange={handelChange}
				>
					{options.map((op) => (
						<option value={op.value}>{op.label}</option>
					))}
				</Select>
			)}
		</Flex>
	);
};

export default SelectInput;
