import { useNavigate } from "react-router-dom";
//import Layout from "../layouts/Layout";

const Login = () => {
	const apiEndpoint = "http://localhost:3001/login";
	const navigate = useNavigate();

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
					console.log("Authentification réussie");
					navigate("/total");
				} else if (res.status === 400) {
					console.log("Erreur d'authentification");
				} else {
					console.error("Erreur inconnue");
				}
			}
			)
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<form className="flex flex-col max-w-lg space-y-4 p-12 bg-gray-600 rounded-xl mx-auto m-12" onSubmit={(e) => handleSubmit(e)}  >
			<input name="email" className="bg-gray-200 rounded-lg p-2" type="text" />
			<input name="password" className="bg-gray-200 rounded-lg p-2" type="password" />
			<button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" type="submit">Login</button>
		</form >
	);
}

export default Login;
