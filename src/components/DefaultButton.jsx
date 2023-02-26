import { Button } from "@chakra-ui/react";
import React from "react";

const DefaultButton = ({
	buttonMargin,
	bgColor,
	handelClick,
	buttonName,
	size,
	width,
	mt,
	rounded,
}) => {
	return (
		<Button
			mt={mt}
			mb={buttonMargin}
			w={width}
			fontSize={["14px"]}
			rounded={rounded}
			bg={bgColor}
			fontWeight="400"
			lineHeight={"22px"}
			colorScheme={"blue"}
			letterSpacing="1px"
			size={size}
			onClick={handelClick}
		>
			{buttonName}
		</Button>
	);
};

export default DefaultButton;
