import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Wrapper = styled.View`
	background: #000;
	flex: 1;
`;

export const Container = styled.ScrollView``;

export const Map = styled(MapView).attrs(() => ({
	initialRegion: {
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	},
	dark: true,
}))`
	height: 200px;
`;
