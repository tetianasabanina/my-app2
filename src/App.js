import React from 'react';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

import './App.css';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

const Title = styled.h1`
	text-align: center;
`;
const TwoColumnLayout = styled.div`
	display: grid;
	grid-template-columns: 80% 20%;
	grid-column-gap: 1rem;
`;
const Container = styled.div`
	margin: auto;
	width: 800px;
	padding-top: 1em;
`;

function App() {
	return (
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
	);
}

export default App;
