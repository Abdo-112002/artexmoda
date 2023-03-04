// Auth
import Forget from "./Auth/Pages/Forget";
import Login from "./Auth/Pages/Login";
import Reset from "./Auth/Pages/Reset";
import Signup from "./Auth/Pages/Signup";

// Dashboard
import AdminPreorder from "./Dashboard/Pages/AdminPreorder/AdminPreorder";
import Catalogues from "./Dashboard/Pages/Catalogues/Catalogues";
import Clients from "./Dashboard/Pages/Clients/Clients";
import Dashboard from "./Dashboard/Pages/DashboardHome/Dashboard";
import Preorders from "./Dashboard/Pages/Preorders/Preorders";
import PriceList from "./Dashboard/Pages/PriceList/PriceList";
import Products from "./Dashboard/Pages/Products/Products";
import UploadImage from "./Dashboard/Pages/UploadImage/UploadImage";
import Upload from "./Dashboard/Pages/UploadPage/Upload";
import ViewMore from "./Dashboard/Pages/UploadPage/ViewMore";
import Users from "./Dashboard/Pages/Users/Users";
import Variations from "./Dashboard/Pages/Variations/Variations";

// Dashboard Components
import Navigation from "./Dashboard/Components/Navigation";
import Sidebar from "./Dashboard/Components/Sidebar";

import ImagesViewProducts from "./Dashboard/Pages/UploadImage/components/ImagesViewProducts";
import UploadImagesComponent from "./Dashboard/Pages/UploadImage/components/UploadImagesComponent";

export {
	Login,
	Signup,
	Forget,
	Reset,

	// Dashboard Pages
	Dashboard,
	AdminPreorder,
	Catalogues,
	Clients,
	Preorders,
	PriceList,
	Products,
	Upload,
	UploadImage,
	Users,
	Variations,
	ViewMore,

	// Dashboard Components
	Navigation,
	Sidebar,

	// Dashboard UploadImage component
	UploadImagesComponent,
	ImagesViewProducts,
};
