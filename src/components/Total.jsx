//import React from "react";

const Total = () => {
	// const pastriesFromStorage = JSON.parse(localStorage.getItem('pastries')) || [];
	const total = localStorage.getItem('total');
	console.log(total);
	return (
		<section className="mx-auto w-3/4 bg-green-500 rounded-lg p-8 text-center mt-8">
			<div>
				<h1 className="text-3xl font-semibold">Total des pâtisseries gagnées :</h1>
				{/* {total} */}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{/* {pastriesFromStorage.map((pastries, index) => ( */}
				<div key={index} className="p-2">
					<div className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
						<div className="bg-green-500 rounded-lg p-4 shadow-lg">
							<h2 className="text-xl font-bold mb-2">{pastries.name}</h2>
							<div>
								<img src={`http://placehold.it/32x32?text=${pastries.name}`} alt="" />
							</div>
							<hr className="my-2" />
							<p>Gagné {pastries.quantity} fois</p>
						</div>
					</div>
				</div>
				{/* ))} */}
			</div>
		</section>
	);
};

export default Total;
