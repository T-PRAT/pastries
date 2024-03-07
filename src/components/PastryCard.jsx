import { useDeletePastryMutation } from "../services/pastries";
import { FaTrash } from "react-icons/fa";

const PastryCard = ({ pastry, refetch }) => {
	const [deletePastry] = useDeletePastryMutation();

	const handleDelete = async () => {
		await deletePastry(pastry.id);
		refetch();
	}

	return (
		<div key={pastry.id} className="p-4 bg-gray-600 space-y-4 m-4 flex rounded-lg justify-between items-center shadow-md">
			<div className="flex p-4 text-xl font-bold">
				<p className="pr-4">{pastry.quantity}</p>
				<h2 className="">{pastry.name}</h2>
			</div>
			<button className=" p-4 bg-red-500 rounded-lg" onClick={() => handleDelete()}>
				<FaTrash />
			</button>
		</div >
	);
};

export default PastryCard;
