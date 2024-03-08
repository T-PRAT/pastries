import { useEffect } from 'react';
import { useGetRandomPastriesQuery } from "../services/game"

const WinPatries = ({ win }) => {
	const { data, error, isLoading } = useGetRandomPastriesQuery(win);

	const addTotal = () => {
		const total = localStorage.getItem('total');
		if (total == null) {
			localStorage.setItem('total', win);
		}
		else {
			localStorage.setItem('total', (parseInt(total) + win));
		}
	}

	useEffect(() => {
		if (data && data.length > 0) {
			addTotal();
		}
	}), [data];

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	if (data) return (
		<div className="text-center">
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
		</div>
	);
}
export default WinPatries;
