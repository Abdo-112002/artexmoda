import React from "react";
import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Select,
	Text,
} from "@chakra-ui/react";

export const SelectedInput = ({
	error,
	errorText,
	name,
	placeholder,
	onChange,
	leftIcons,
	mb,
	options,
}) => {
	return (
		<FormControl mb={mb}>
			<InputGroup>
				<InputLeftElement children={leftIcons} />
				<Select
					rounded="4"
					required
					placeholder={placeholder}
					border={error ? "1px solid red" : "1px solid #E5E5E5"}
					name={name}
					fontSize="14px"
					fontWeight={400}
					lineHeight="20px"
					onChange={onChange}
					_placeholder={error ? { color: "red.400" } : { color: "#A3A3A3" }}
					_hover={error ? { borderColor: "red" } : { borderColor: "#E5E5E5" }}
					_focus={error ? { borderColor: "red" } : { borderColor: "blue.400" }}
					_focusVisible={error ? { borderColor: "red" } : {}}
					outline={"none"}
				>
					{options?.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</Select>
			</InputGroup>
			{error && (
				<Text
					pt="2"
					color={"red.400"}
					fontSize="14px"
					fontWeight={400}
					lineHeight="20px"
				>
					{errorText}
				</Text>
			)}
		</FormControl>
	);
};

const DefaultInput = ({
	show,
	setShow,
	isPassword,
	error,
	errorText,
	type,
	name,
	placeholder,
	onChange,
	value,
	leftIcons,
	mb,
}) => {
	return (
		<>
			<FormControl mb={mb}>
				<InputGroup>
					<InputLeftElement children={leftIcons} />
					<Input
						type={isPassword ? (show ? "text" : "password") : type}
						rounded="4"
						placeholder={placeholder}
						border={error ? "1px solid red" : "1px solid #E5E5E5"}
						name={name}
						fontSize="14px"
						fontWeight={400}
						lineHeight="20px"
						onChange={onChange}
						_placeholder={error ? { color: "red.400" } : { color: "#A3A3A3" }}
						_hover={error ? { borderColor: "red" } : { borderColor: "#E5E5E5" }}
						_focus={
							error ? { borderColor: "red" } : { borderColor: "blue.400" }
						}
						_focusVisible={error ? { borderColor: "red" } : {}}
						value={value}
						outline={"none"}
					/>
					{isPassword && (
						<InputRightElement
							children={
								show ? (
									<svg
										className="cursor-pointer icon_hover"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										onClick={() => setShow(false)}
									>
										<g clipPath="url(#clip0_802_1545)">
											<path
												d="M9.68666 6.31339L6.31333 9.68672C5.86599 9.23939 5.61469 8.63268 5.61469 8.00005C5.61469 7.68681 5.67638 7.37663 5.79626 7.08724C5.91613 6.79784 6.09183 6.53488 6.31333 6.31339C6.53482 6.09189 6.79778 5.91619 7.08717 5.79632C7.37657 5.67644 7.68675 5.61475 7.99999 5.61475C8.63261 5.61475 9.23933 5.86605 9.68666 6.31339Z"
												stroke={error ? "#FF2B02" : "#626262"}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M11.88 3.84669C10.7133 2.96669 9.37999 2.48669 7.99999 2.48669C5.64665 2.48669 3.45332 3.87336 1.92665 6.27336C1.32665 7.21336 1.32665 8.79336 1.92665 9.73336C2.45332 10.56 3.06665 11.2734 3.73332 11.8467M5.61332 13.02C6.37332 13.34 7.17999 13.5134 7.99999 13.5134C10.3533 13.5134 12.5467 12.1267 14.0733 9.72669C14.6733 8.78669 14.6733 7.20669 14.0733 6.26669C13.8533 5.92003 13.6133 5.59336 13.3667 5.28669"
												stroke={error ? "#FF2B02" : "#626262"}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M10.34 8.46671C10.2497 8.93175 10.0225 9.3592 9.68749 9.69418C9.35251 10.0292 8.92506 10.2564 8.46001 10.3467M6.31334 9.68671L1.33334 14.6667M14.6667 1.33337L9.68668 6.31337"
												stroke={error ? "#FF2B02" : "#626262"}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</g>
										<defs>
											<clipPath id="clip0_802_1545">
												<rect width="16" height="16" fill="white" />
											</clipPath>
										</defs>
									</svg>
								) : (
									<svg
										className="cursor-pointer icon_hover"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										onClick={() => setShow(true)}
									>
										<path
											d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z"
											stroke={error ? "#FF2B02" : "#626262"}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8.00002 13.5133C10.3534 13.5133 12.5467 12.1266 14.0734 9.72665C14.6734 8.78665 14.6734 7.20665 14.0734 6.26665C12.5467 3.86665 10.3534 2.47998 8.00002 2.47998C5.64668 2.47998 3.45335 3.86665 1.92668 6.26665C1.32668 7.20665 1.32668 8.78665 1.92668 9.72665C3.45335 12.1266 5.64668 13.5133 8.00002 13.5133Z"
											stroke={error ? "#FF2B02" : "#626262"}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)
							}
						/>
					)}
				</InputGroup>
				{error && errorText && (
					<Text
						pt="2"
						color={"red.400"}
						fontSize="14px"
						fontWeight={400}
						lineHeight="20px"
					>
						{errorText}
					</Text>
				)}
			</FormControl>
		</>
	);
};

export default DefaultInput;
