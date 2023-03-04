// All imports
import { DashLayout, NotFound } from "../containers";
import {
	AdminPreorder,
	Catalogues,
	Clients,
	Dashboard,
	ImagesViewProducts,
	Preorders,
	PriceList,
	Products,
	Upload,
	UploadImage,
	UploadImagesComponent,
	Users,
	Variations,
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
			children: [
				{
					index: true,
					element: <UploadImagesComponent />,
				},
				{
					path: "view-products",
					element: <ImagesViewProducts />,
				},
			],
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
