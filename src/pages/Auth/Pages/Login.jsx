import React, { useState } from "react";
import { DefaultInput } from "../../../components";
import { useNavigate } from "react-router-dom";
import FormContainer from "../Components/FormContainer";

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const [show, setShow] = useState(false);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(false);
		navigate("/dashboard");
	};

	return (
		<>
			<FormContainer
				askButton={"Sign Up"}
				to="register"
				askText={"Don’t have an account please"}
				headerName="Login"
				isForget={true}
				buttonMargin="4"
				mt="4"
				headerPadding="6"
				buttonName="Login"
				handelClick={handleSubmit}
			>
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
								stroke={error ? "#FF2B02" : "#626262"}
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					}
					mb={[2, 4, 6]}
					error={error}
				/>
				<DefaultInput
					isPassword={true}
					name={"password"}
					placeholder={"Password"}
					onChange={handleChange}
					value={data.password}
					show={show}
					setShow={setShow}
					leftIcons={
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.3333 5.56143V4.66663C12.3333 2.73329 11.8666 0.166626 7.83329 0.166626C3.79996 0.166626 3.33329 2.73329 3.33329 4.66663V5.56143C1.31681 5.80654 0.666626 6.82512 0.666626 9.33329V10.6666C0.666626 13.6066 1.55996 14.5 4.49996 14.5H11.1666C14.1066 14.5 15 13.6066 15 10.6666V9.33329C15 6.82512 14.3498 5.80654 12.3333 5.56143ZM4.33329 5.50095C4.3881 5.50029 4.44366 5.49996 4.49996 5.49996H11.1666C11.2229 5.49996 11.2785 5.50029 11.3333 5.50095V4.66663C11.3333 2.56663 10.74 1.16663 7.83329 1.16663C4.92663 1.16663 4.33329 2.56663 4.33329 4.66663V5.50095ZM7.83329 12.1666C6.63996 12.1666 5.66663 11.1933 5.66663 9.99996C5.66663 8.80663 6.63996 7.83329 7.83329 7.83329C9.02663 7.83329 9.99996 8.80663 9.99996 9.99996C9.99996 11.1933 9.02663 12.1666 7.83329 12.1666ZM7.83329 8.83329C7.19329 8.83329 6.66663 9.35996 6.66663 9.99996C6.66663 10.64 7.19329 11.1666 7.83329 11.1666C8.47329 11.1666 8.99996 10.64 8.99996 9.99996C8.99996 9.35996 8.47329 8.83329 7.83329 8.83329ZM1.66663 9.33329C1.66663 6.95329 2.11329 6.49996 4.49996 6.49996H11.1666C13.5533 6.49996 14 6.95329 14 9.33329V10.6666C14 13.0466 13.5533 13.5 11.1666 13.5H4.49996C2.11329 13.5 1.66663 13.0466 1.66663 10.6666V9.33329Z"
								fill={error ? "#FF2B02" : "#626262"}
							/>
						</svg>
					}
					mb="3"
					error={error}
					errorText={"Password is incorrect!"}
				/>
			</FormContainer>
		</>
	);
};

export default Login;
