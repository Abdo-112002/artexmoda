import { NotFound, AuthLayout } from "./../containers";
import { Login, Signup, Forget, Reset } from "../pages";

export const RootRoute = {
	path: "/",
	element: <AuthLayout />,
	errorElement: <NotFound />,
	children: [
		{
			index: true,
			element: <Login />,
		},
		{
			path: "register",
			element: <Signup />,
		},
		{
			path: "forget-password",
			element: <Forget />,
		},
		{
			path: "reset-password",
			element: <Reset />,
		},
	],
};
