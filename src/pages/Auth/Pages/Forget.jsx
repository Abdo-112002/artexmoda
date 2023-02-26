import { Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultInput } from "../../../components";
import FormContainer from "./../Components/FormContainer";

const Forget = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: "",
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/");
	};

	return (
		<>
			<FormContainer
				to="/"
				headerName="Forgot Your Password?"
				buttonName="Login"
				headerPadding={"3"}
				handelClick={handleSubmit}
				askButton={"login"}
				askText="Return to Login"
				buttonMargin={"2"}
			>
				<Text
					fontWeight={"400"}
					fontSize="13px"
					color={"#5B5B5B"}
					lineHeight="17.7px"
					textAlign="center"
					pb="8"
				>
					Please enter your registered email address we’ll send you instructions
					to help reset your password.
				</Text>
				<DefaultInput
					type={"email"}
					name={"email"}
					placeholder={"Your email"}
					onChange={handleChange}
					value={data.email}
					leftIcons={
						<svg
							width="11"
							height="15"
							viewBox="0 0 11 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.10669 6.7467C5.04002 6.74003 4.96002 6.74003 4.88669 6.7467C4.12149 6.72072 3.39645 6.39792 2.86511 5.84667C2.33377 5.29542 2.03785 4.559 2.04002 3.79337C2.04002 2.16003 3.36002 0.833367 5.00002 0.833367C5.3883 0.826363 5.77415 0.895904 6.13555 1.03802C6.49695 1.18014 6.82682 1.39204 7.10632 1.66164C7.38582 1.93124 7.60949 2.25325 7.76455 2.60929C7.91961 2.96533 8.00302 3.34843 8.01002 3.7367C8.01702 4.12498 7.94748 4.51083 7.80537 4.87223C7.66325 5.23363 7.45135 5.5635 7.18175 5.843C6.91215 6.1225 6.59013 6.34617 6.23409 6.50123C5.87806 6.65628 5.49496 6.7397 5.10669 6.7467ZM1.77335 9.2067C0.160021 10.2867 0.160021 12.0467 1.77335 13.12C3.60669 14.3467 6.61335 14.3467 8.44669 13.12C10.06 12.04 10.06 10.28 8.44669 9.2067C6.62002 7.9867 3.61335 7.9867 1.77335 9.2067Z"
								stroke={"#626262"}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					}
					mb={[2, 4, 6]}
				/>
			</FormContainer>
		</>
	);
};

export default Forget;
