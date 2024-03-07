import { NavLink } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
	return (
		<>
			<nav className="bg-gray-800 text-white w-full py-4">
				<div className="container mx-auto flex items-center px-4 text-2xl pl-12 justify-between">
					<div className="flex space-x-8 ">
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400"].join(" ")} to={"/"}>
							Home
						</NavLink>
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400"].join(" ")} to={"/yams"}>
							Yams
						</NavLink>
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400"].join(" ")} to={"/total"}>
							Total
						</NavLink>
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400"].join(" ")} to={"/shop"}>
							Shop
						</NavLink>
					</div>
					<div className="flex">
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400", "text-lg"].join(" ")} to={"/sign"}>
							Login
						</NavLink>
						<button></button>

					</div>
				</div>
			</nav>
			<main className="">{children}</main>
			<ToastContainer />
		</>
	);
};

export default Layout;
