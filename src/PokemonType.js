import propTypes from 'prop-types';

const PokemonType = propTypes.shape({
	id: propTypes.number.isRequired,
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
});

export default PokemonType;
