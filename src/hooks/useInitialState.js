import { useState } from "react";

const initialState = {
	cart: [''],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const [stateTable, setStateTable] = useState('');

	const finderTable = (Nametable) => {
		setStateTable(Nametable);
	};

	return {
		state,
		addToCart,
		stateTable,
		finderTable
	}
}

export default useInitialState;