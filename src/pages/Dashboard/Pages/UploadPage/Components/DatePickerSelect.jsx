import React from "react";
import DatePicker from "react-datepicker";
import { Flex, Input } from "@chakra-ui/react";

const DatePickerSelect = ({
	date,
	setDate,
	setFouces,
	fouces,
	holder,
	leftIcon,
	pl,
}) => {
	return (
		<Flex
			position="relative"
			justifyContent="center"
			alignItems={"center"}
			w="100%"
		>
			{leftIcon}
			{/* Datepicker open when click svg icon */}
			<DatePicker
				selected={date}
				onChange={(date) => setDate(date)}
				onSelect={() => setFouces(false)}
				placeholderText={holder}
				customInput={<Input pl={pl} onSelect={() => setFouces(true)} />}
			/>
			{fouces ? (
				<svg
					width="12"
					height="15"
					viewBox="0 0 12 15"
					fill="none"
					className="w-[16px] h-[16px] absolute right-[16px]"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.16667 2.37325V1.33325C9.16667 1.05992 8.94 0.833252 8.66667 0.833252C8.39333 0.833252 8.16667 1.05992 8.16667 1.33325V2.33325H3.83333V1.33325C3.83333 1.05992 3.60667 0.833252 3.33333 0.833252C3.06 0.833252 2.83333 1.05992 2.83333 1.33325V2.37325C1.03333 2.53992 0.16 3.61325 0.0266666 5.20658C0.0133333 5.39992 0.173333 5.55992 0.36 5.55992H11.64C11.8333 5.55992 11.9933 5.39325 11.9733 5.20658C11.84 3.61325 10.9667 2.53992 9.16667 2.37325ZM11.3333 6.55992H0.666667C0.3 6.55992 0 6.85992 0 7.22659V11.3333C0 13.3333 1 14.6666 3.33333 14.6666H8.66667C11 14.6666 12 13.3333 12 11.3333V7.22659C12 6.85992 11.7 6.55992 11.3333 6.55992ZM4.14 12.1399C4.10667 12.1666 4.07333 12.1999 4.04 12.2199C4 12.2466 3.96 12.2666 3.92 12.2799C3.88 12.2999 3.84 12.3133 3.8 12.3199C3.75333 12.3266 3.71333 12.3333 3.66667 12.3333C3.58 12.3333 3.49333 12.3133 3.41333 12.2799C3.32667 12.2466 3.26 12.1999 3.19333 12.1399C3.07333 12.0133 3 11.8399 3 11.6666C3 11.4933 3.07333 11.3199 3.19333 11.1933C3.26 11.1333 3.32667 11.0866 3.41333 11.0533C3.53333 10.9999 3.66667 10.9866 3.8 11.0133C3.84 11.0199 3.88 11.0333 3.92 11.0533C3.96 11.0666 4 11.0866 4.04 11.1133L4.14 11.1933C4.26 11.3199 4.33333 11.4933 4.33333 11.6666C4.33333 11.8399 4.26 12.0133 4.14 12.1399ZM4.14 9.80658C4.01333 9.92658 3.84 9.99992 3.66667 9.99992C3.49333 9.99992 3.32 9.92658 3.19333 9.80658C3.07333 9.67992 3 9.50658 3 9.33325C3 9.15992 3.07333 8.98658 3.19333 8.85992C3.38 8.67325 3.67333 8.61325 3.92 8.71992C4.00667 8.75325 4.08 8.79992 4.14 8.85992C4.26 8.98658 4.33333 9.15992 4.33333 9.33325C4.33333 9.50658 4.26 9.67992 4.14 9.80658ZM6.47333 12.1399C6.34667 12.2599 6.17333 12.3333 6 12.3333C5.82667 12.3333 5.65333 12.2599 5.52667 12.1399C5.40667 12.0133 5.33333 11.8399 5.33333 11.6666C5.33333 11.4933 5.40667 11.3199 5.52667 11.1933C5.77333 10.9466 6.22667 10.9466 6.47333 11.1933C6.59333 11.3199 6.66667 11.4933 6.66667 11.6666C6.66667 11.8399 6.59333 12.0133 6.47333 12.1399ZM6.47333 9.80658L6.37333 9.88658C6.33333 9.91325 6.29333 9.93325 6.25333 9.94658C6.21333 9.96658 6.17333 9.97992 6.13333 9.98658C6.08667 9.99325 6.04667 9.99992 6 9.99992C5.82667 9.99992 5.65333 9.92658 5.52667 9.80658C5.40667 9.67992 5.33333 9.50658 5.33333 9.33325C5.33333 9.15992 5.40667 8.98658 5.52667 8.85992C5.58667 8.79992 5.66 8.75325 5.74667 8.71992C5.99333 8.61325 6.28667 8.67325 6.47333 8.85992C6.59333 8.98658 6.66667 9.15992 6.66667 9.33325C6.66667 9.50658 6.59333 9.67992 6.47333 9.80658ZM8.80667 12.1399C8.68 12.2599 8.50667 12.3333 8.33333 12.3333C8.16 12.3333 7.98667 12.2599 7.86 12.1399C7.74 12.0133 7.66667 11.8399 7.66667 11.6666C7.66667 11.4933 7.74 11.3199 7.86 11.1933C8.10667 10.9466 8.56 10.9466 8.80667 11.1933C8.92667 11.3199 9 11.4933 9 11.6666C9 11.8399 8.92667 12.0133 8.80667 12.1399ZM8.80667 9.80658L8.70667 9.88658C8.66667 9.91325 8.62667 9.93325 8.58667 9.94658C8.54667 9.96658 8.50667 9.97992 8.46667 9.98658C8.42 9.99325 8.37333 9.99992 8.33333 9.99992C8.16 9.99992 7.98667 9.92658 7.86 9.80658C7.74 9.67992 7.66667 9.50658 7.66667 9.33325C7.66667 9.15992 7.74 8.98658 7.86 8.85992C7.92667 8.79992 7.99333 8.75325 8.08 8.71992C8.2 8.66658 8.33333 8.65325 8.46667 8.67992C8.50667 8.68659 8.54667 8.69992 8.58667 8.71992C8.62667 8.73325 8.66667 8.75325 8.70667 8.77992L8.80667 8.85992C8.92667 8.98658 9 9.15992 9 9.33325C9 9.50658 8.92667 9.67992 8.80667 9.80658Z"
						fill="#2759CD"
					/>
				</svg>
			) : (
				<svg
					className="w-[16px] h-[16px] absolute right-[16px]"
					width="16"
					height="17"
					viewBox="0 0 16 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.33333 1.83325V3.83325M10.6667 1.83325V3.83325M2.33333 6.55992H13.6667M14 6.16659V11.8333C14 13.8333 13 15.1666 10.6667 15.1666H5.33333C3 15.1666 2 13.8333 2 11.8333V6.16659C2 4.16659 3 2.83325 5.33333 2.83325H10.6667C13 2.83325 14 4.16659 14 6.16659Z"
						stroke="#2759CD"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M10.4634 9.6333H10.4694M10.4634 11.6333H10.4694M7.99669 9.6333H8.00336M7.99669 11.6333H8.00336M5.52936 9.6333H5.53602M5.52936 11.6333H5.53602"
						stroke="#2759CD"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</Flex>
	);
};

export default DatePickerSelect;
