import { useGetPastriesListQuery } from "../services/pastries"

export default function Pastries() {
	const { data, error, isLoading } = useGetPastriesListQuery()

	return (
		<>
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
		</>
	)
}
