// All imports
import { DashLayout, NotFound } from "../containers";
import {
	Clients,
	Dashboard,
	Users,
	Upload,
	UploadImage,
	Catalogues,
	Products,
	PriceList,
	Variations,
	Preorders,
	AdminPreorder,
	ViewMore,
} from "./../pages";

export const DashRoutes = {
	path: "/dashboard",
	element: <DashLayout />,
	errorElement: <NotFound />,
	children: [
		{
			index: true,
			element: <Dashboard />,
		},
		{
			path: "users",
			element: <Users />,
		},
		{
			path: "clients",
			element: <Clients />,
		},
		{
			path: "upload",
			element: <Upload />,
		},
		{
			path: "upload/view",
			element: <ViewMore />,
		},
		{
			path: "upload-image",
			element: <UploadImage />,
		},
		{
			path: "catalogues",
			element: <Catalogues />,
		},
		{
			path: "products",
			element: <Products />,
		},
		{
			path: "price-list",
			element: <PriceList />,
		},
		{
			path: "variations",
			element: <Variations />,
		},
		{
			path: "preorders",
			element: <Preorders />,
		},
		{
			path: "admin-preorders",
			element: <AdminPreorder />,
		},
	],
};
