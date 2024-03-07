import { useAddPastryMutation } from "../services/pastries"
import { useState } from "react"
const AddPastries = ({ refetch }) => {
	const [string, setString] = useState('une nouvelle patisserie')
	const [quantity, setQuantity] = useState(1)
	const [addPastry] = useAddPastryMutation()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const pastry = { name: string || 'patisseire sans nom', quantity: quantity || 1 }
		await addPastry(pastry)
		refetch()
		setString('')
		setQuantity(1)
	}

	return (
		<form className="p-4 bg-gray-600 m-4 flex rounded-lg justify-between" onSubmit={handleSubmit}>
			<div className="flex space-x-2 w-1/2">
				<input className="text-black p-1 rounded-lg w-full" type="text" required onChange={e => { setString(e.target.value) }} value={string} placeholder='une nouvelle patisserie' />
				<input className="ml-1 w-12  text-black pl-1 rounded-lg" type="number" required onChange={e => { setQuantity(e.target.value) }} value={quantity} />
			</div>
			<button className="bg-green-400 p-4 rounded-xl font-bold">Ajouter</button>
		</form>
	)
}

export default AddPastries;
