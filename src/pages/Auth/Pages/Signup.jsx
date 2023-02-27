import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultInput } from "../../../components";
import { SelectedInput } from "../../../components/DefaultInput";

import FormContainer from "./../Components/FormContainer";

const Signup = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: "",
		password: "",
		company: "",
		vat: "",
		country: "",
		business: "",
	});

	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(false);
		navigate("/");
	};

	const countryOptions = [
		{ value: "Afghanistan", label: "Afghanistan" },
		{ value: "Albania", label: "Albania" },
		{ value: "Algeria", label: "Algeria" },
		{ value: "American Samoa", label: "American Samoa" },
		{ value: "Andorra", label: "Andorra" },
		{ value: "Angola", label: "Angola" },
		{ value: "Anguilla", label: "Anguilla" },
	];

	const businessOptions = [
		{ value: "Africa", label: "Africa" },
		{ value: "Asia", label: "Asia" },
		{ value: "Europe", label: "Europe" },
		{ value: "North America", label: "North America" },
		{ value: "South America", label: "South America" },
	];

	return (
		<FormContainer
			askButton={"Login"}
			to="/"
			askText={"Have an account please"}
			headerName="Sign Up"
			buttonMargin="4"
			headerPadding="6"
			buttonName="Send request"
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
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				mb={[2, 4, 6]}
				error={error}
			/>
			<SelectedInput
				name={"country"}
				placeholder={"Country"}
				onChange={handleChange}
				value={data.business}
				leftIcons={
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.99992 8.95334C8.27307 8.95334 8.54355 8.89953 8.7959 8.795C9.04826 8.69047 9.27756 8.53726 9.4707 8.34412C9.66385 8.15097 9.81706 7.92167 9.92159 7.66932C10.0261 7.41696 10.0799 7.14648 10.0799 6.87334C10.0799 6.60019 10.0261 6.32971 9.92159 6.07735C9.81706 5.825 9.66385 5.5957 9.4707 5.40255C9.27756 5.20941 9.04826 5.0562 8.7959 4.95167C8.54355 4.84714 8.27307 4.79333 7.99992 4.79333C7.44827 4.79333 6.91922 5.01248 6.52914 5.40255C6.13906 5.79263 5.91992 6.32168 5.91992 6.87334C5.91992 7.42499 6.13906 7.95404 6.52914 8.34412C6.91922 8.73419 7.44827 8.95334 7.99992 8.95334Z"
							stroke="#626262"
						/>
						<path
							d="M2.4133 5.66004C3.72664 -0.113291 12.28 -0.106624 13.5866 5.66671C14.3533 9.05338 12.2466 11.92 10.4 13.6934C9.75469 14.3157 8.89314 14.6635 7.99664 14.6635C7.10013 14.6635 6.23859 14.3157 5.5933 13.6934C3.7533 11.92 1.64664 9.04671 2.4133 5.66004Z"
							stroke="#626262"
						/>
					</svg>
				}
				mb={[2, 4, 6]}
				options={countryOptions}
			/>
			<SelectedInput
				name={"business"}
				placeholder={"Business"}
				onChange={handleChange}
				value={data.business}
				leftIcons={
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.33338 4.00004V3.46671C5.33338 2.28671 5.33338 1.33337 7.46671 1.33337H8.53338C10.6667 1.33337 10.6667 2.28671 10.6667 3.46671V4.00004M5.33338 14.6667H10.6667C13.3467 14.6667 13.8267 13.5934 13.9667 12.2867L14.4667 6.95337C14.6467 5.32671 14.18 4.00004 11.3334 4.00004H4.66671C1.82005 4.00004 1.35338 5.32671 1.53338 6.95337L2.03338 12.2867C2.17338 13.5934 2.65338 14.6667 5.33338 14.6667Z"
							stroke="#626262"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.33325 9.34671V8.66671C9.33325 8.00004 9.33325 8.00004 8.66658 8.00004H7.33325C6.66658 8.00004 6.66658 8.00004 6.66658 8.66671V9.35337M9.33325 9.34671C9.33325 10.0734 9.32658 10.6667 7.99992 10.6667C6.67992 10.6667 6.66658 10.08 6.66658 9.35337M9.33325 9.34671C11.1761 9.11729 12.9307 8.42462 14.4332 7.33337M6.66658 9.35337C4.93992 9.16004 3.24658 8.54004 1.74658 7.51337"
							stroke="#626262"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				mb={[2, 4, 6]}
				options={businessOptions}
			/>
			<DefaultInput
				type={"text"}
				name={"company"}
				placeholder={"Company Name"}
				onChange={handleChange}
				value={data.company}
				leftIcons={
					<svg
						width="16"
						height="14"
						viewBox="0 0 16 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.666748 13.1667H15.3334M13.1867 13.1734V10.2M1.40008 13.1667V2.52005C1.40008 1.18005 2.06675 0.506714 3.39341 0.506714H7.54675C8.87341 0.506714 9.53342 1.18005 9.53342 2.52005V13.1667M3.86675 4.00005H7.16675M3.86675 6.50005H7.16675M5.50008 13.1667V10.6667M13.2001 5.76005C12.3867 5.76005 11.7334 6.41338 11.7334 7.22671V8.74005C11.7334 9.55338 12.3867 10.2067 13.2001 10.2067C14.0134 10.2067 14.6667 9.55338 14.6667 8.74005V7.22671C14.6667 6.41338 14.0134 5.76005 13.2001 5.76005Z"
							stroke="#626262"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				mb={[2, 4, 6]}
			/>
			<DefaultInput
				type={"number"}
				name={"vat"}
				placeholder={"Vat Number"}
				onChange={handleChange}
				value={data.vat}
				leftIcons={
					<svg
						width="16"
						height="17"
						viewBox="0 0 16 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.99992 9.16658L9.99992 5.16659M4.48659 13.6333C5.03325 13.0466 5.86659 13.0933 6.34659 13.7333L7.01992 14.6333C7.55992 15.3466 8.43325 15.3466 8.97325 14.6333L9.64659 13.7333C10.1266 13.0933 10.9599 13.0466 11.5066 13.6333C12.6933 14.8999 13.6599 14.4799 13.6599 12.7066V5.19325C13.6666 2.50659 13.0399 1.83325 10.5199 1.83325H5.47992C2.95992 1.83325 2.33325 2.50659 2.33325 5.19325V12.6999C2.33325 14.4799 3.30659 14.8933 4.48659 13.6333Z"
							stroke="#626262"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.99658 9.16667H10.0026M5.99658 5.5H6.00192"
							stroke="#626262"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				}
				mb={[2, 4, 6]}
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
							fillRule="evenodd"
							clipRule="evenodd"
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
	);
};

export default Signup;
