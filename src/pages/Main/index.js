import React from 'react';

import Suggestions from '../../components/Suggestions';

import { Wrapper, Container } from './styles';

export default function Main() {
	return (
		<Wrapper>
			<Container>
				<Suggestions black />
			</Container>
		</Wrapper>
	);
}
