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
				<div className="bg-green-500 text-white p-4 mb-4">
					<h2 className="text-xl mb-2">
						Tu as gagné {win} pâtisserie :{win === 2 && 's'}
					</h2>
					<ul>
						{data && data.map((pastry) => (
							<li key={pastry.id}>- {pastry.name}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default WinPatries;
