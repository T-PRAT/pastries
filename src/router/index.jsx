import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Sign from "../pages/Login";
import Logout from "../components/Logout";
import Total from "../pages/Total";
import Yams from "../pages/Yams";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout><Home /></Layout>
	},
	{
		path: "/yams",
		element: <Layout><Yams /></Layout>
	},
	{
		path: "/sign",
		element: <Layout><Sign /></Layout>
	},
	{
		path: "/logout",
		element: <Layout><Logout /></Layout>
	},
	{
		path: "/total",
		element: <Layout><Total /></Layout>
	},
	{
		path: "/shop",
		element: <Layout><Shop /></Layout>
	},
]);

export default router;
