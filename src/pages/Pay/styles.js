import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
	background: #000;
	flex: 1;
`;

export const Header = styled.View`
	margin-left: 14px;
	height: 60px;
	flex-direction: row;
	align-items: center;
`;

export const SearchContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 10px;
	background: #1e222b;
	border-radius: 20px;
`;

export const SearchBar = styled.TextInput.attrs(() => ({
	placeholder: 'Quem você quer pagar?',
	placeholderTextColor: '#fff',
	color: '#fff',
}))`
	flex: 0.9;
	margin: 0 8px;
	height: 40px;
	align-items: center;
`;
