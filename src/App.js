import React from 'react';
import propTypes from 'prop-types';
import './App.css';
import pokemon from './pokemon.json';

const PokemonRow = ({ pokemon }) => (
	<tr>
		<td>{pokemon.name.english}</td>
		<td>{pokemon.type.join(', ')}</td>
	</tr>
);

PokemonRow.propTypes = {
	pokemon: propTypes.shape({
		name: propTypes.shape({
			english: propTypes.string,
		}),
		type: propTypes.arrayOf(propTypes.string),
	}),
};

function App() {
	return (
		<div style={{ margin: 'auto', width: 800, paddingTop: '1rem' }}>
			<h1 className='title'>Pokemon Search</h1>
			<table width='100%'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{pokemon.slice(0, 20).map((pokemon) => (
						<PokemonRow pokemon={pokemon} key={pokemon.id} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
