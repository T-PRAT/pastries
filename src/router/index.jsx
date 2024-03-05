import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Sign from "../pages/Login";


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
		path: "/shop",
		element: <Shop />,
	},
]);

export default router;
