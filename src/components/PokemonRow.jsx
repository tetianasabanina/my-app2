import React from 'react';
import Button from '@mui/material/Button';
import PokemonType from '../PokemonType';

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
	pokemon: PokemonType,
};

export default PokemonRow;
