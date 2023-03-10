import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultInput } from "../../../components";
import FormContainer from "./../Components/FormContainer";

const Reset = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [data, setData] = useState({
		new: "",
		confirm: "",
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
				headerName="Reset your password"
				buttonName="Reset password"
				headerPadding={"8"}
				handelClick={handleSubmit}
				buttonMargin={"2"}
			>
				<DefaultInput
					isPassword={true}
					name={"new"}
					placeholder={"New Password"}
					onChange={handleChange}
					value={data.new}
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
								fill={"#626262"}
							/>
						</svg>
					}
					mb="24px"
				/>
				<DefaultInput
					isPassword={true}
					name={"confirm"}
					placeholder={"Confirm Password"}
					onChange={handleChange}
					value={data.confirm}
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
								fill={"#626262"}
							/>
						</svg>
					}
					mb="24px"
				/>
			</FormContainer>
		</>
	);
};

export default Reset;
