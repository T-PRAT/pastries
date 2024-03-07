import { useDeletePastryMutation } from "../services/pastries";

const PastryCard = ({ pastry }) => {
	const [deletePastry] = useDeletePastryMutation();
	return (
		<div key={pastry.id} className="p-4 bg-gray-600 space-y-4 m-4 flex rounded-lg">
			<div className="flex">
				<img className="rounded-full" src={pastry.image} alt={pastry.name} />
				<h2 className="text-xl font-bold mb-2">{pastry.name}</h2>
				<p>{pastry.quantity}</p>
			</div>
			<button className="py-2 px-4 bg-red-500 rounded-lg" onClick={() => deletePastry(pastry.id)}>
				Supprimer
			</button>
		</div>
	);
};

export default PastryCard;
