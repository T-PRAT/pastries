import PastryCard from "../components/PastryCard";
import AddPastries from "../components/AddPastries";
import { useGetPastriesQuery } from "../services/pastries"

const Shop = () => {
	const { data: pastries, error, isLoading, refetch } = useGetPastriesQuery()

	return (
		<div className="mx-auto max-w-2xl p-8 text-white">
			<h1 className="text-3xl font-bold mb-6">Pastries</h1>
			<AddPastries refetch={refetch} />
			<hr className="my-6" />
			{error && <div className="text-red-500 mb-4">Something went wrong</div>}
			{isLoading ? (
				<div className="text-gray-500">Loading...</div>
			) : (
				<div className="flex flex-col">
					{pastries && pastries.map((pastry) => (
						<PastryCard key={pastry.id} pastry={pastry} refetch={refetch} />
					))}
				</div>
			)}
		</div>
	)
}

export default Shop;
