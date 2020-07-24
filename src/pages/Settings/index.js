import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
	Wrapper,
	Header,
	Title,
	Container,
	User,
	Img,
	UserName,
	Name,
	MyProfile,
	MyProfileLabel,
	Section,
	SectionHeader,
	SectionOptions,
	SectionOption,
	OptionLabel,
	OptionIcon,
} from './styles';

import user from '../../images/user.png';

const myAccount = [
	{
		key: String(Math.random()),
		label: 'Meu PicPay',
	},
	{
		key: String(Math.random()),
		label: 'Meu número',
	},
	{
		key: String(Math.random()),
		label: 'Meu e-mail',
	},
	{
		key: String(Math.random()),
		label: 'Dados pessoais',
	},
	{
		key: String(Math.random()),
		label: 'Conta bancária',
	},
	{
		key: String(Math.random()),
		label: 'Taxas e limites',
	},
	{
		key: String(Math.random()),
		label: 'Meus endereços',
	},
	{
		key: String(Math.random()),
		label: 'Meus Favoritos',
	},
];

const promotion = [
	{
		key: String(Math.random()),
		label: 'Usar código promocional',
	},
	{
		key: String(Math.random()),
		label: 'Convide seus amigos',
	},
];

export default function Settings() {
	return (
		<>
			<Header>
				<Title>Ajustes</Title>
			</Header>
			<Wrapper>
				<Container>
					<User>
						<Img source={user} />
						<UserName>@atilara</UserName>
						<Name>Átila Rodrigues</Name>
						<MyProfile>
							<MyProfileLabel>Ver meu perfil</MyProfileLabel>
							<MaterialCommunityIcons
								name="greater-than"
								size={16}
								color="#1ab563"
							/>
						</MyProfile>
					</User>
					<Section>
						<SectionHeader>Minha conta</SectionHeader>
						<SectionOptions>
							{myAccount.map((myAccount) => (
								<SectionOption key={myAccount.key}>
									<OptionLabel>{myAccount.label}</OptionLabel>
									<OptionIcon>
										<MaterialCommunityIcons
											name="greater-than"
											size={16}
											color="rgba(255, 255, 255, 0.6)"
										/>
									</OptionIcon>
								</SectionOption>
							))}
						</SectionOptions>
					</Section>
					<Section>
						<SectionHeader>Promoções</SectionHeader>
						<SectionOptions>
							{promotion.map((promotion) => (
								<SectionOption key={promotion.key}>
									<OptionLabel>{promotion.label}</OptionLabel>
									<OptionIcon>
										<MaterialCommunityIcons
											name="greater-than"
											size={16}
											color="rgba(255, 255, 255, 0.6)"
										/>
									</OptionIcon>
								</SectionOption>
							))}
						</SectionOptions>
					</Section>
				</Container>
			</Wrapper>
		</>
	);
}
