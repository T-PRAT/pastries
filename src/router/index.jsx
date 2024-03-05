import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
]);

export default router;
