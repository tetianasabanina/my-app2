import React from 'react';
import propTypes from 'prop-types';
import './App.css';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const PokemonRow = ({ pokemon, onSelect }) => (
	<tr>
		<td>{pokemon.name.english}</td>
		<td>{pokemon.type.join(', ')}</td>
		<td>
			<Button variant='contained' onClick={() => onSelect(pokemon)}>
				Select!
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

const PokemonInfo = ({ name, base }) => (
	<div>
		<h1>{name.english}</h1>
		<table>
			<tbody>
				{Object.keys(base).map((key) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{base[key]}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

PokemonInfo.propTypes = {
	name: propTypes.shape({
		english: propTypes.string.isRequired,
		base: propTypes.shape({
			HP: propTypes.number.isRequired,
			Attack: propTypes.number.isRequired,
			Defense: propTypes.number.isRequired,
			'Sp.Attack': propTypes.number.isRequired,
			'Sp.Defense': propTypes.number.isRequired,
			Speed: propTypes.number.isRequired,
		}),
	}),
};

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
const Input = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0.2rem;
`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: '',
			pokemon: [],
			selectedItem: null,
		};
	}

	componentDidMount() {
		fetch('http://localhost:3000/my-app2/pokemon.json')
			.then((resp) => resp.json())
			.then((data) => this.setState({ ...this.state, pokemon: data }));
	}

	render() {
		return (
			<Container>
				<Title>Pokemon Search</Title>

				<TwoColumnLayout>
					<div>
						<Input
							value={this.state.filter}
							onChange={(event) =>
								this.setState({ ...this.state, filter: event.target.value })
							}
						/>
						<table width='100%'>
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
								</tr>
							</thead>
							<tbody>
								{this.state.pokemon
									.filter((pokemon) =>
										pokemon.name.english
											.toLowerCase()
											.includes(this.state.filter.toLowerCase())
									)
									.slice(0, 20)
									.map((pokemon) => (
										<PokemonRow
											pokemon={pokemon}
											key={pokemon.id}
											onSelect={(pokemon) =>
												this.setState({ ...this.state, selectedItem: pokemon })
											}
										/>
									))}
							</tbody>
						</table>
					</div>
					{this.state.selectedItem && (
						<PokemonInfo {...this.state.selectedItem} />
					)}
				</TwoColumnLayout>
			</Container>
		);
	}
}

export default App;
