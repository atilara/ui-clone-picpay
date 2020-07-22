import React from 'react';
import {
	Feather,
	MaterialCommunityIcons,
	FontAwesome,
	AntDesign,
} from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
	Wrapper,
	Header,
	HeaderContainer,
	Title,
	BalanceContainer,
	Value,
	Bold,
	EyeButton,
	Info,
	Actions,
	Action,
	ActionLabel,
	UseBalance,
	UseBalanceTitle,
	PaymentMethods,
	PaymentMethodsTitle,
	Card,
	CardBody,
	CardDetails,
	CardTitle,
	CardInfo,
	Img,
	AddButton,
	AddLabel,
	UseTicketContainer,
	UseTicketButton,
	UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
	return (
		<Wrapper>
			<Header colors={['#52E78C', '#1AB563']}>
				<HeaderContainer>
					<Title>Saldo PicPay</Title>
					<BalanceContainer>
						<Value>
							R$ <Bold>81,00</Bold>
						</Value>
						<EyeButton>
							<Feather name="eye" size={28} color="#fff" />
						</EyeButton>
					</BalanceContainer>
					<Info>Seu saldo está rendendo 100% do CDI</Info>
					<Actions>
						<Action>
							<MaterialCommunityIcons
								name="cash"
								size={28}
								color="#fff"
							/>
							<ActionLabel>Adicionar</ActionLabel>
						</Action>
						<Action>
							<FontAwesome name="bank" size={20} color="#fff" />
							<ActionLabel>Retirar</ActionLabel>
						</Action>
					</Actions>
				</HeaderContainer>
			</Header>

			<UseBalance>
				<UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
				<Switch />
			</UseBalance>

			<PaymentMethods>
				<PaymentMethodsTitle>Formas de Pagamento</PaymentMethodsTitle>
				<Card>
					<CardBody>
						<CardDetails>
							<CardTitle>
								Cadastre seu cartão de crédito
							</CardTitle>
							<CardInfo>
								Cadastre um cartão para poder fazer pagamentos
								mesmo quando não tiver saldo no seu PicPay.
							</CardInfo>
						</CardDetails>
						{/* Comportamento de resize igual ao da web */}
						<Img source={creditCard} resizeMode="contain" />
					</CardBody>

					<AddButton>
						<AntDesign
							name="pluscircleo"
							size={30}
							color="#0db060"
						/>
						<AddLabel>Adicionar cartão de crédito</AddLabel>
					</AddButton>
				</Card>
				<UseTicketContainer>
					<UseTicketButton>
						<MaterialCommunityIcons
							name="ticket-outline"
							size={20}
							color="#0db060"
						/>
						<UseTicketLabel>Usar código promocional</UseTicketLabel>
					</UseTicketButton>
				</UseTicketContainer>
			</PaymentMethods>
		</Wrapper>
	);
}
