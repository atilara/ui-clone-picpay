import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
	Wrapper,
	Container,
	ListContainer,
	HeaderContainer,
	Header,
	SeeAll,
	Label,
	Highlights,
	Card,
	Phone,
	Content,
	Title,
	Description,
} from './styles';

import List from '../../components/List';

export default function Main() {
	return (
		<Wrapper>
			<Container>
				<Highlights>Destaques</Highlights>
				<Card>
					<Phone>📱</Phone>
					<Content>
						<Title>R$10 de volta</Title>
						<Description>
							Usando um cartão de crédito na sua primeira recarga
							de celular, você ganha R$10 de volta.
						</Description>
					</Content>
				</Card>
				<ListContainer>
					<HeaderContainer>
						<Header>Central de Doações</Header>
						<SeeAll>
							<Label>Ver todos</Label>
							<MaterialCommunityIcons
								name="greater-than"
								size={12}
								color="#10c86e"
							/>
						</SeeAll>
					</HeaderContainer>
					<List />
					<List />
				</ListContainer>
				<ListContainer>
					<HeaderContainer>
						<Header>Lojas</Header>
					</HeaderContainer>
					<List />
				</ListContainer>
				<ListContainer>
					<HeaderContainer>
						<Header>TVs</Header>
					</HeaderContainer>
					<List />
				</ListContainer>
			</Container>
		</Wrapper>
	);
}
