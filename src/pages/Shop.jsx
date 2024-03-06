import Layout from "../layouts/Layout"
import { useGetPastriesQuery } from "../services/pastries"

const Shop = () => {
	const { data, error, isLoading } = useGetPastriesQuery()

	return (
		<Layout>
			<div className="mx-auto max-w-2xl p-8">
				<h1 className="text-3xl font-bold mb-6">Pastries</h1>
				{error && <div className="text-red-500 mb-4">Something went wrong</div>}
				{isLoading ? (
					<div className="text-gray-500">Loading...</div>
				) : (
					<ul className="divide-y divide-gray-300">
						{data && data.map((pastry) => (
							<li key={pastry.id} className="py-2">{pastry.name}</li>
						))}
					</ul>
				)}
			</div>
		</Layout>
	)
}

export default Shop;
