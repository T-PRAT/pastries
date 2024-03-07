import { useState } from "react";
//import { useNavigate } from "react-router-dom";

const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const apiEndpoint = "http://localhost:3001/login";
	//const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const email = data.get("email");
		const password = data.get("password");
		const body = JSON.stringify({ email, password });

		fetch(apiEndpoint, {
			method: "POST",
			body,
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((res) => {
				if (res.status === 200) {
					setIsLoggedIn(true);
					setUserEmail(email);
				} else if (res.status === 400) {
					console.log("Erreur d'authentification");
				} else {
					console.error("Erreur inconnue");
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	if (isLoggedIn) {
		return (
			<div className="flex justify-center items-center p-4">
				<div className="shadow-xl rounded-lg overflow-hidden">
					<div className="p-1 bg-gradient-to-r from-green-400 to-blue-500">
						<div className="bg-gray-700 rounded-lg p-8 max-w-lg m-2">
							<h1 className="text-2xl font-bold text-white mb-4">Bonjour, {userEmail}</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<form className="flex flex-col max-w-lg space-y-4 p-12 bg-gray-600 rounded-xl mx-auto m-12" onSubmit={handleSubmit}>
			<input name="email" className="bg-gray-200 rounded-lg p-2" type="text" placeholder="Email" />
			<input name="password" className="bg-gray-200 rounded-lg p-2" type="password" placeholder="Password" />
			<button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" type="submit">Login</button>
		</form>
	);
};

export default Login;
