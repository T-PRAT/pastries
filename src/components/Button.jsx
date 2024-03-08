
const Button = ({ children }) => {
	return (
		<button className="font-bold text-xl bg-gray-700 hover:bg-blue-800 me-2 mb-2  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 m-4 rounded-lg">{children}</button>
	)
}

export default Button
