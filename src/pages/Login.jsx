
const Login = () => {
	const apiEndpoint = "http://localhost:3001/login";

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
					return res.json();
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
			<input name="email" className="" type="text" />
			<input name="password" type="password" />
			<button className="" type="submit">Login</button>
		</form >
	);
}

export default Login;
