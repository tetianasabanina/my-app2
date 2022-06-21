import React from 'react';
import propTypes from 'prop-types';
import Button from '@mui/material/Button';

const PokemonRow = ({ pokemon, onSelect }) => (
	<tr>
		<td>{pokemon.name.english}</td>
		<td>{pokemon.type.join(', ')}</td>
		<td>
			<Button variant='contained' onClick={() => onSelect(pokemon)}>
				More information
			</Button>
		</td>
	</tr>
);

PokemonRow.propTypes = {
	pokemon: propTypes.shape({
		name: propTypes.shape({
			english: propTypes.string.isRequired,
		}),
		type: propTypes.arrayOf(propTypes.string).isRequired,
	}),
	onSelect: propTypes.func,
};

export default PokemonRow;
