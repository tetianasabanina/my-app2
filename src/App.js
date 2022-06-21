import React, { useState, useEffect } from 'react';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

import './App.css';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

const Title = styled.h1`
	text-align: center;
`;
const TwoColumnLayout = styled.div`
	display: 'grid';
	grid-template-columns: 70% 30%;
	grid-column-gap: 1rem;
`;
const Container = styled.div`
	margin: 'auto';
	width: 800px;
	padding-top: 1rem;
`;

function App() {
	const [filter, setFilter] = useState('');
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/my-app2/pokemon.json')
			.then((resp) => resp.json())
			.then((data) => setPokemon(data));
	}, []);

	if (!pokemon) {
		return <div>Loading data</div>;
	}

	return (
		<PokemonContext.Provider
			value={{
				filter,
				pokemon,
				selectedPokemon,
				setFilter,
				setPokemon,
				setSelectedPokemon,
			}}
		>
			<Container>
				<CssBaseline />
				<Title>Pokemon Search</Title>
				<TwoColumnLayout>
					<div>
						<PokemonFilter />
						<PokemonTable />
					</div>
					<PokemonInfo />
				</TwoColumnLayout>
			</Container>
		</PokemonContext.Provider>
	);
}

export default App;
