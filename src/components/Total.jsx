const Total = () => {
	const total = localStorage.getItem("total");

	const resetTotal = () => {
		localStorage.setItem("total", 0);
		window.location.reload();
	};

	return (
		<section className="flex flex-col mx-auto w-3/4 rounded-lg p-8 text-center mt-8 justify-center items-center">
			<div>
				<h1 className="text-2xl text-white font-semibold">Total des pâtisseries gagnées :</h1>
			</div>
			<div className="mx-auto mt-6 w-3/12">
				<div className="p-2">
					<div className="text-white font-bold rounded-lg p-2 bg-gradient-to-r from-green-400 to-blue-500">
						<div className="bg-gray-700 rounded-lg p-4 shadow-lg text-5xl">{//total > 1 ? Math.floor(total / 2) : total
						}{total}</div>
					</div>
				</div>
			</div>
			<button onClick={resetTotal} className="mt-6 font-bold text-xl bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 me-2 mb-2  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
				Réinitialiser
			</button>
		</section>
	);
};

export default Total;
