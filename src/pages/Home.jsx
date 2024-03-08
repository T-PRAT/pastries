import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className={`flex justify-center items-center p-4`}>
			<div className="shadow-xl rounded-lg overflow-hidden">
				<div className="p-1 bg-gradient-to-r from-green-400 to-blue-500">
					<div className="bg-gray-700 rounded-lg p-8 max-w-lg m-2">
						<h1 className="text-2xl font-bold text-white mb-4">Jeu de Dés en Ligne</h1>
						<h2 className="text-xl text-white mb-4">S'amuser avec les dés</h2>
						<p className="text-white mb-3">
							Bienvenue dans notre jeu de dés en ligne, un endroit où l'amusement et la chance se rencontrent. Profitez d'une expérience immersive et
							interactive directement depuis votre navigateur.
						</p>
						<p className="text-white">
							Lancez les dés, testez votre chance, et participez à des compétitions captivantes contre d'autres joueurs ou contre l'ordinateur. Que le
							meilleur gagne!
						</p>
						<div className="text-center pt-8">
							<Link
								to="/yams"
								className="font-bold text-xl bg-gray-700 hover:bg-blue-800 me-2 mb-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded-lg w-full"
							>
								Commencer à jouer
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
