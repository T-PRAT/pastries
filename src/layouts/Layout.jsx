import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<>
			<nav className="bg-gray-800 text-white w-full py-4">
				<div className="container mx-auto inline-flex items-center px-4 space-x-4 text-2xl pl-12">
					<NavLink className={({ isActive }) =>
						[isActive ? "text-gray-100" : "text-gray-400"].join(" ")
					} to={"/sign"}>Signin</NavLink>
					<NavLink
						className={({ isActive }) =>
							[isActive ? "text-gray-100" : "text-gray-400",].join(" ")
						}
						to={"/"}
					>
						Yams
					</NavLink>
					<NavLink className={({ isActive }) =>
						[isActive ? "text-gray-100" : "text-gray-400"].join(" ")
					} to={"/shop"}>Shop</NavLink>
				</div>
			</nav>
			<main className="">{children}</main>
		</>
	);
};

export default Layout;
