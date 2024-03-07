import { useState } from "react";
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from "react-icons/bs";

const Game = ({ setWin }) => {
	const [dice, setDice] = useState([1, 2, 3, 4, 5]);
	const [party, setParty] = useState(5);
	const handleReset = () => {
		setDice([1, 2, 3, 4, 5])
		setWin(null)
		setParty(5)
	}
	const checkWin = (diceArray) => {
		diceArray.sort((a, b) => a - b);
		let count = 1;
		for (let i = 0; i < 4; i++) {
			if (diceArray[i] === diceArray[i + 1]) {
				count++;
				if (count === 3 && i === 2 && diceArray[4] === diceArray[3]) {
					setParty(0);
					return (2);
				}
				else if (count === 3) {
					setParty(0);
					return (1);
				}
			} else {
				count = 1;
			}
		}
		return null;
	};

	const roll = () => {
		setWin(null);
		const newDice = [...dice.map(() => Math.floor(Math.random() * 6) + 1)];
		setDice([...newDice]);
		setParty(party - 1);
		setWin(checkWin(newDice));
	};

	return (
		<div className="flex flex-col justify-center items-center">
			{<ul className={`${party === 5 ? 'invisible' : 'visible'} flex flex-row items-center h-36`}>
				{dice.map((die, i) => (
					<li key={i} className="text-7xl w-24 h-24 flex justify-center items-center bg-gray-200 rounded-full mr-6">
						{die === 1 && <span role="img" aria-label="dice-1"><BsDice1 className="text-gray-800 p-2" /></span>}
						{die === 2 && <span role="img" aria-label="dice-2"><BsDice2 className="text-gray-800 p-2" /></span>}
						{die === 3 && <span role="img" aria-label="dice-3"><BsDice3 className="text-gray-800 p-2" /></span>}
						{die === 4 && <span role="img" aria-label="dice-4"><BsDice4 className="text-gray-800 p-2" /></span>}
						{die === 5 && <span role="img" aria-label="dice-5"><BsDice5 className="text-gray-800 p-2" /></span>}
						{die === 6 && <span role="img" aria-label="dice-6"><BsDice6 className="text-gray-800 p-2" /></span>}
					</li>
				))}
			</ul>}
			<div className="">
				<div className=" rounded-3xl p-12">
					<button className="font-bold text-xl bg-gray-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-800 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" onClick={() => {
						party <= 0 ? handleReset() : roll();
					}}>
						{party !== 0 ? "Jouer" : "Rejouer"}
					</button>
					<div className="text-white py-1 px-2 rounded-lg">
						Coups restants : <b>{party}</b>
						{/*(party == 0) ? ((checkWin(newDice) > 0) ? 'Bravo !' : 'Perdu ...') : (
							`Coup${party > 1 ? 's' : ''} restant${party > 1 ? 's' : ''}: `)
						<b>{party}</b>*/}
					</div>
				</div></div>
		</div >
	);
}

export default Game;
