import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GiCupcake } from "react-icons/gi";
//import { logoutFunction } from "../components/Logout";

const Layout = ({ children }) => {
	return (
		<>
			<nav className="bg-gray-800 text-white w-full py-8 fixed top-0 shadow-lg">
				<div className="container mx-auto flex px-4 text-2xl pl-12 justify-between">
					<div className="flex space-x-8 items-stretch ">
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400", "flex space-x-4"].join(" ")} to={"/"}>
							<GiCupcake size={28} />
							<span>Yams Pastries</span>
						</NavLink>
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400"].join(" ")} to={"/yams"}>
							Jeu
						</NavLink>
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400"].join(" ")} to={"/total"}>
							Total
						</NavLink>
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400"].join(" ")} to={"/shop"}>
							Gestion
						</NavLink>
					</div>
					<div className="flex">
						<NavLink className={({ isActive }) => [isActive ? "text-gray-100" : "text-gray-400", "text-lg"].join(" ")} to={"/sign"}>
							Login
						</NavLink>
					</div>
				</div>
			</nav>
			<main className="pt-32">{children}</main>
			<Toaster position="bottom-center" />
		</>
	);
};

export default Layout;
