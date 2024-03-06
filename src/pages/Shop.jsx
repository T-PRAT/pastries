import Layout from "../layouts/Layout"
import { useGetPastriesQuery } from "../services/pastries"

const Shop = () => {
	const { data, error, isLoading } = useGetPastriesQuery()

	return (
		<Layout>
			<div>
				<h1>Pastries</h1>
				{error && <div>Something went wrong</div>}
				{
					isLoading ? (
						<div>Loading...</div>
					) : (
						<ul>
							{data && data.map((pastry) => (
								<li key={pastry.id}>{pastry.name}</li>
							))}
						</ul>
					)
				}
			</div>
		</Layout>
	)
}

export default Shop
