import React from 'react';

import List from '../../components/List';

import { Wrapper, Container, Map } from './styles.js';

export default function Main() {
	return (
		<Wrapper>
			<Container>
				<Map />
				<List />
				<List />
				<List />
				<List />
				<List />
			</Container>
		</Wrapper>
	);
}
