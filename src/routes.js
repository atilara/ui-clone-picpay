import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from './pages/Home';
import WalletScreen from './pages/Wallet';
import PayScreen from './pages/Pay';

const Tab = createBottomTabNavigator();

const icons = {
	Home: {
		lib: AntDesign,
		name: 'home',
	},
	Wallet: {
		lib: AntDesign,
		name: 'creditcard',
	},
	Pay: {
		lib: AntDesign,
		name: 'shoppingcart',
	},
	Notifications: {
		lib: Ionicons,
		name: 'ios-notifications-outline',
	},
	Settings: {
		lib: AntDesign,
		name: 'setting',
	},
};

export default function Navigation() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				// Desestruturação, dos paramêtros retornados pela função
				// apenas o route será acessado
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						const { lib: Icon, name } = icons[route.name];
						return <Icon name={name} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					style: {
						backgroundColor: '#131418',
						borderTopColor: 'rgba(255, 255, 255, 0.2)',
					},
					activeTintColor: '#fff',
					inactiveTintColor: '#92929c',
				}}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: 'Ínicio',
					}}
				/>
				<Tab.Screen
					name="Wallet"
					component={WalletScreen}
					options={{
						title: 'Carteira',
					}}
				/>
				<Tab.Screen
					name="Pay"
					component={PayScreen}
					options={{
						title: 'Pagar',
					}}
				/>
				{/* Renderizam a tela pagar pois não serão feitas agora */}
				<Tab.Screen
					name="Notifications"
					component={PayScreen}
					options={{
						title: 'Notificações',
					}}
				/>
				<Tab.Screen
					name="Settings"
					component={PayScreen}
					options={{
						title: 'Ajustes',
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
