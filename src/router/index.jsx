import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Sign from "../pages/Login";
import Total from "../pages/Total";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/sign",
		element: <Sign />
	},
	{
		path: "/total",
		element: <Total />
	},
	{
		path: "/shop",
		element: <Shop />,
	},
]);

export default router;
