import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
	Wrapper,
	Header,
	SearchContainer,
	SearchBar,
	Container,
} from './styles';


export default function Pay() {
	return (
		<Wrapper>
			<Header>
				<MaterialCommunityIcons
					name="qrcode-scan"
					size={30}
					color="#10c86e"
				/>
				<SearchContainer>
					<AntDesign name="search1" size={18} color="white" />
					<SearchBar />
				</SearchContainer>
			</Header>
			<Container></Container>
		</Wrapper>
	);
}
