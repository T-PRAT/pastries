//import { useAddPastryMutation } from "../services/pastries"
import { useState } from "react"
const AddPastries = () => {
	const [string, setString] = useState('une nouvelle patisserie')
	const [quantity, setQuantity] = useState(0);
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div className="p-4 bg-gray-600 space-y-4 m-4 flex rounded-lg">
			<div className="flex">
				<form className="flex" onSubmit={handleSubmit}>
					<div className="mr-2"><button>Ajouter</button></div>
					<input className="text-black pl-1 rounded-sm" type="text" required onChange={e => { setString(e.target.value) }} value={string} placeholder='une nouvelle patisserie' />
					<input className="ml-1 w-1/12 text-black pl-1 rounded-sm" type="number" required onChange={e => { setQuantity(e.target.value) }} value={quantity} />
				</form>
			</div >
		</div>
	)
}

export default AddPastries
