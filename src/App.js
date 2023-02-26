import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootRoute } from "./routes/RootRoutes";
import { DashRoutes } from "./routes/DashRoutes";

const router = createBrowserRouter([RootRoute, DashRoutes], {
	basename: "/brands",
});

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
