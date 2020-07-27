import React from 'react';

import { Entypo } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';

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

import img1 from '../../images/01.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const services = [
	{
		key: String(Math.random()),
		img: img1,
		title: 'Recarga de Celular',
		description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Serco...',
	},
	{
		key: String(Math.random()),
		img: img6,
		title: 'Pagar Conta',
		description: 'Pague sua conta de luz, água, boletos bancários etc.',
	},
	{
		key: String(Math.random()),
		img: img7,
		title: 'Cobrar',
		description: 'Cobre um amigo',
	},
];

export default function Main() {
	return (
		<Wrapper>
			<Container>
				<Suggestions black />
				<Services>
					<Header>Serviços</Header>
					{services.map((service) => (
						<Item key={service.key}>
							<Img source={service.img} />
							<Details>
								<Content>
									<Title>{service.title}</Title>
									<Description>
										{service.description}
									</Description>
								</Content>
								<Options>
									<Entypo
										name="dots-three-horizontal"
										size={20}
										color="rgba(255, 255, 255, 0.6)"
									/>
								</Options>
							</Details>
						</Item>
					))}
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
