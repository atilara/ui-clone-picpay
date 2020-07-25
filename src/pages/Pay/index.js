import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, SearchContainer, SearchBar } from './styles';

import MainScreen from '../Main';
import PlacesScreen from '../Places';
import StoreScreen from '../Store';

const Tab = createMaterialTopTabNavigator();

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
			<Tab.Navigator
				tabBarOptions={{
					style: {
						backgroundColor: '#000',
					},
					indicatorStyle: {
						backgroundColor: '#10c86e',
					},
					activeTintColor: '#fff',
					inactiveTintColor: '#92929c',
				}}
			>
				<Tab.Screen
					name="Main"
					component={MainScreen}
					options={{
						title: 'Principal',
					}}
				/>
				<Tab.Screen
					name="Places"
					component={PlacesScreen}
					options={{
						title: 'Locais',
					}}
				/>
				<Tab.Screen
					name="Store"
					component={StoreScreen}
					options={{
						title: 'Store',
					}}
				/>
			</Tab.Navigator>
		</Wrapper>
	);
}
