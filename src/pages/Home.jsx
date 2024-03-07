//import React from "react";
//import Layout from "../layouts/Layout";
//import image from public

const Home = () => {
	return (
		<div className={`min-h-screen flex justify-center items-center p-4`}>
			<div className="shadow-xl rounded-lg overflow-hidden"
				style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} >
				{/* <img src={img} alt="" /> */}
				<div className="p-1 bg-gradient-to-r from-green-400 to-blue-500">
					<div className="bg-white border border-gray-200 rounded-lg p-8 max-w-lg m-2">
						<h1 className="text-2xl font-bold text-gray-900 mb-4">Jeu de Dés en Ligne</h1>
						<h2 className="text-xl text-gray-700 mb-4">S'amuser avec les dés</h2>
						<p className="text-gray-600 mb-3">
							Bienvenue dans notre jeu de dés en ligne, un endroit où l'amusement et la chance se rencontrent. Profitez d'une expérience immersive et
							interactive directement depuis votre navigateur.
						</p>
						<p className="text-gray-600">
							Lancez les dés, testez votre chance, et participez à des compétitions captivantes contre d'autres joueurs ou contre l'ordinateur. Que le
							meilleur gagne!
						</p>
						<div className="text-center mt-8">
							<a
								href="/yams"
								className="font-bold text-xl bg-gray-700 hover:bg-blue-800 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded-lg w-full"
							>
								Commencer à jouer
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
