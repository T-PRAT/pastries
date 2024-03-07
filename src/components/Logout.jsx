import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn, setUserEmail }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		fetch('http://localhost:3001/logout', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					setIsLoggedIn(false);
					setUserEmail('');
					navigate('/login');
				} else {
					console.error('Échec de la déconnexion');
				}
			})
			.catch((error) => {
				console.error('Erreur lors de la tentative de déconnexion:', error);
			});
	};

	return (
		<button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">
			Déconnexion
		</button>
	);
};

export default Logout;
