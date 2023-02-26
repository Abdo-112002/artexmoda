import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";

const Informations = () => {
	return (
		<>
			<Accordion allowToggle w={"100%"}>
				<AccordionItem
					border={`2px solid ${"var(--border-color)"}`}
					rounded="8px"
				>
					<h2>
						<AccordionButton border={"none"} py="18px">
							<Box
								as="span"
								flex="1"
								textAlign="left"
								fontSize={"14px"}
								fontWeight="400"
								color="#303030"
							>
								Main information
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default Informations;
