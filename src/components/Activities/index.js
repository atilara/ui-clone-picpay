import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
	Container,
	Header,
	SelectionWrapper,
	SelectionOption,
	Underline,
	Selected,
	SelectionLabel,
	Title,
	Card,
	CardHeader,
	Avatar,
	Description,
	Bold,
	CardBody,
	UserName,
	CardFooter,
	Details,
	Value,
	Divider,
	Date,
	Actions,
	Option,
	OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
	return (
		<>
			<Container>
				<Header>
					<Title>Atividades</Title>
				</Header>
				<SelectionWrapper>
					<SelectionOption>
						<Underline editable={false}>
							<Selected>Todas</Selected>
						</Underline>
					</SelectionOption>
					<SelectionOption>
						<SelectionLabel>Minhas</SelectionLabel>
					</SelectionOption>
				</SelectionWrapper>
			</Container>

			<Card>
				<CardHeader>
					<Avatar source={avatar} />
					<Description>
						<Bold>Você</Bold> pagou a <Bold>@atilara</Bold>
					</Description>
				</CardHeader>

				<CardBody>
					<UserName>Átila Rodrigues</UserName>
				</CardBody>

				<CardFooter>
					<Details>
						<Value>R$ 21,00</Value>

						<Divider />

						<Feather name="lock" color="#fff" size={14} />
						<Date>há 23 dias</Date>
					</Details>
					<Actions>
						<Option>
							<MaterialCommunityIcons
								name="comment-outline"
								color="#fff"
								size={14}
							/>
							<OptionLabel>0</OptionLabel>
						</Option>

						<Option>
							<AntDesign name="hearto" color="#fff" size={14} />
							<OptionLabel>0</OptionLabel>
						</Option>
					</Actions>
				</CardFooter>
			</Card>
		</>
	);
}
