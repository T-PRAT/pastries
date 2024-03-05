import { useContext, useEffect } from 'react';
import { GameContext } from '../pages/Home';
import { useGetRandomPastriesQuery } from "../services/pastries"

const WinPatries = () => {
	const { win } = useContext(GameContext);

	const { data, error, isLoading, refetch } = useGetRandomPastriesQuery(win);


	useEffect(() => {
		refetch();
	}, [win, refetch]);

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
