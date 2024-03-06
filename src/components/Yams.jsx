import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Yams = ({ setWin }) => {
	const [dice, setDice] = useState([1, 2, 3, 4, 5]);
	const [party, setParty] = useState(5);
	const handleReset = () => {
		setDice([1, 2, 3, 4, 5])
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
		<div className="flex flex-col justify-center items-center h-full">
			{party !== 5 && <ul className="flex flex-row items-center p-12">
				{dice.map((die, i) => (
					<li key={i} className="text-7xl w-24 h-24 flex justify-center items-center bg-gray-200 rounded-full mr-6">
						{die === 1 && <span className="-translate-y-1" role="img" aria-label="dice-1">⚀</span>}
						{die === 2 && <span className="-translate-y-1" role="img" aria-label="dice-2">⚁</span>}
						{die === 3 && <span className="-translate-y-1" role="img" aria-label="dice-3">⚂</span>}
						{die === 4 && <span className="-translate-y-1" role="img" aria-label="dice-4">⚃</span>}
						{die === 5 && <span className="-translate-y-1" role="img" aria-label="dice-5">⚄</span>}
						{die === 6 && <span className="-translate-y-1" role="img" aria-label="dice-6">⚅</span>}
					</li>
				))}
			</ul>}
			<div className="bg-slate-800 rounded-3xl p-5 border-2 border-neutral-200">
				<button className="font-bold text-xl bg-gray-700 hover:bg-blue-800 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded-lg w-full" onClick={() => {
					party <= 0 ? handleReset() : roll();
				}}>
					{party !== 0 ? "Jouer" : "Rejouer"}
				</button>
				<div className="bg-blue-500 text-white py-1 px-2 rounded-lg">
					Coups restants : {party}
				</div>
			</div>
		</div >
	);
}

export default Yams;
