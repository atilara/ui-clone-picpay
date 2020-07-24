import React from 'react';

import {
	Wrapper,
	Header,
	Container,
	Title,
	Centered,
	Settings,
	SettingsLabel,
	Notification,
	Details,
	Content,
	Date,
} from './styles';

const items = [
	{
		key: String(Math.random()),
		content:
			'Pague um amigo pela primeira vez com PicPay hoje e ganheR$20 de volta! Toque para saber mais.',
		date: 'Hoje às 10:19',
	},
	{
		key: String(Math.random()),
		content:
			'Que tal R$20 de volta para começar a usar o PicPay? Toque aqui e saiba mais.',
		date: '22 de jul às 20:16',
	},
	{
		key: String(Math.random()),
		content:
			'Vai receber seu Auxílio Emergencial? Transfira-o para o PicPay e utilize para pagar o que quiser com o celular. Toque e saiba mais!',
		date: '18 de jul às 19:12',
	},
	{
		key: String(Math.random()),
		content:
			'Pague um amigo pela primeira vez com PicPay hoje e ganheR$20 de volta! Toque para saber mais.',
		date: 'Hoje às 10:19',
	},
	{
		key: String(Math.random()),
		content:
			'Que tal R$20 de volta para começar a usar o PicPay? Toque aqui e saiba mais.',
		date: '22 de jul às 20:16',
	},
	{
		key: String(Math.random()),
		content:
			'Vai receber seu Auxílio Emergencial? Transfira-o para o PicPay e utilize para pagar o que quiser com o celular. Toque e saiba mais!',
		date: '18 de jul às 19:12',
	},
	{
		key: String(Math.random()),
		content:
			'Pague um amigo pela primeira vez com PicPay hoje e ganheR$20 de volta! Toque para saber mais.',
		date: 'Hoje às 10:19',
	},
	{
		key: String(Math.random()),
		content:
			'Que tal R$20 de volta para começar a usar o PicPay? Toque aqui e saiba mais.',
		date: '22 de jul às 20:16',
	},
	{
		key: String(Math.random()),
		content:
			'Vai receber seu Auxílio Emergencial? Transfira-o para o PicPay e utilize para pagar o que quiser com o celular. Toque e saiba mais!',
		date: '18 de jul às 19:12',
	},
];

export default function Notifications() {
	return (
		<Wrapper>
			<Header>
				<Title>Notificações</Title>
			</Header>

			<Container>
				{items.map((item) => (
					<Notification key={item.key}>
						<Content>{item.content}</Content>
						<Date>{item.date}</Date>
					</Notification>
				))}
			</Container>
		</Wrapper>
	);
}
