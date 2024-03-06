import { useEffect, useCallback } from 'react';
import { useGetRandomPastriesQuery } from "../services/game"

const WinPatries = ({ win }) => {
	const { data, error, isLoading } = useGetRandomPastriesQuery(win);

	const addTotal = useCallback(() => {
		console.log("addTotal");
		if (localStorage.getItem('total')) {
			const newTotal = parseInt(localStorage.getItem('total')) + win;
			localStorage.setItem('total', newTotal);
		}
		else {
			localStorage.setItem('total', win);
		}
	}, [win]);

	useEffect(() => {
		console.log("neaw");
		if (data) {
			addTotal();
		}
	}, [data, addTotal]);
	/* useEffect(() => {
		if (!error) {
			const newTotal = total + 1;
			setTotal(newTotal);
			localStorage.setItem('total', newTotal);
			console.log("totalAcc", localStorage.getItem('total'));
		}
	}, [error, total]); */
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<div className="text-center">
			{win && (
				<div className="bg-green-500 max-w-xl text-xl font-bold text-white p-6 mb-4 mx-auto rounded-lg h-full">
					<h2 className="text-xl mb-2">
						{(data.length === 0) ? "Tu as gagné mais il n'y a plus de pâtisseries" : `Tu as gagné ${win} pâtisserie${win === 2 ? 's' : ''} !`}
					</h2>
					<ul>
						{data.map((pastry) => (
							<li key={pastry.id}>- {pastry.name}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
export default WinPatries;
