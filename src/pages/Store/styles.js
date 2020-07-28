import styled from 'styled-components/native';

export const Wrapper = styled.View`
	background: #000;
	flex: 1;
`;

export const Container = styled.ScrollView``;

export const ListContainer = styled.View`
	border-bottom-color: #1e222b;
	border-bottom-width: 1px;
`;

export const SeeAll = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

export const Label = styled.Text`
	color: #10c86e;
	font-size: 16px;
`;

export const HeaderContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 12px 12px;
`;

export const Header = styled.Text`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	text-transform: uppercase;
`;
