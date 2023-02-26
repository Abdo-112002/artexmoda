import { useNavigate, useRouteError } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Error = () => {
	const error = useRouteError();

	const navigate = useNavigate();

	const handelBack = () => {
		navigate("/", { replace: true });
	};
	return (
		<>
			<Box className="container">
				<Box className="row">
					<Box className="col">
						<Box
							className="mt-5 text-center"
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
							height="100vh"
							flexDirection={"column"}
							gap="3"
						>
							<h1 className="fs-1 fw-bold">Oops!</h1>
							<p className="fs-4 fw-light">
								Sorry, an unexpected error has occurred.
							</p>
							<p className="fs-3 fw-bold">
								<i>{error.statusText || error.message}</i>
							</p>
							<Button
								variant="solid"
								colorScheme={"teal"}
								onClick={() => {
									handelBack();
								}}
							>
								Back
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Error;
