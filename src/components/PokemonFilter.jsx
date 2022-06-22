import React from 'react';
import store from '../store';
import { observer } from 'mobx-react'

import styled from '@emotion/styled';

const Input = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0.2rem;
`;

const PokemonFilter = () => (
    <Input
      type='text'
      value={store.filter}
      onChange={(event) => store.setFilter(event.target.value)}
    />
);

export default observer(PokemonFilter);
