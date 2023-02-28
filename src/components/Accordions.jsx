import React from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";

const Accordions = ({ children, accName }) => {
	return (
		<AccordionItem border={`1px solid #E6E7EE`} rounded="4px" mb="24px">
			<h2 className="w-full">
				<AccordionButton border={"none"} py="18px" w="100%">
					<Box
						as="span"
						flex="1"
						textAlign="left"
						fontSize={"14px"}
						fontWeight="400"
						lineHeight={"22px"}
						color="#303030"
					>
						{accName}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel
				display={"flex"}
				flexDirection="column"
				alignItems={"flex-start"}
				gap="16px"
			>
				{children}
			</AccordionPanel>
		</AccordionItem>
	);
};

export default Accordions;
