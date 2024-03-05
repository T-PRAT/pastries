import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="bg-gray-800 text-white w-full py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<h1 className="text-2xl">Yams</h1>
				<Link to={'/shop'}>shop</Link>
			</div>
		</nav >
	)
}

export default Header;
