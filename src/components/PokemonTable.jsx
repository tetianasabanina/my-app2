import React from 'react';
import store from '../store';
import { observer } from 'mobx-react';

import PokemonRow from './PokemonRow';

const PokemonTable = () => {
	return (
		<table width='100%'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				{store.filteredPokemon.slice(0, 20).map((pokemon) => (
					<PokemonRow
						pokemon={pokemon}
						key={pokemon.id}
						onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
					/>
				))}
			</tbody>
		</table>
	);
};

export default observer(PokemonTable);
