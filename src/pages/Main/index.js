import React from 'react';

import Suggestions from '../../components/Suggestions';
import List from '../../components/List';

import {
	Wrapper,
	Container,
	Services,
	Header,
	Item,
	Img,
	Details,
	Content,
	Title,
	Description,
	Options,
	Contacts,
	ContactsContainer,
	Emoji,
	Button,
	ButtonLabel,
} from './styles';

export default function Main() {
	return (
		<Wrapper>
			<Container>
				<Suggestions black />
				<Services>
					<Header>Serviços</Header>
					<List />
				</Services>
				<Contacts>
					<Header>Contatos</Header>
					<ContactsContainer>
						<Emoji>🙂</Emoji>
						<Title>Encontre seus amigos</Title>
						<Description>
							Libere acesso a sua agenda para saber quem já está
							no PicPay. Junte-se aos seus amigos apara pagar e
							receber dinheiro mais rápido!
						</Description>
						<Button>
							<ButtonLabel>Autorizar agenda</ButtonLabel>
						</Button>
					</ContactsContainer>
				</Contacts>
			</Container>
		</Wrapper>
	);
}
