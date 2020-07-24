import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
	background: #000;
	flex: 1;
`;

export const Header = styled.View`
	height: 50px;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.ScrollView``;

export const Title = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 18px;
`;

export const Notification = styled.TouchableOpacity`
	padding: 10px 12px;
	height: 95px;
	background-color: #1e222b;
	border-bottom-color: rgba(255, 255, 255, 0.1);
	border-bottom-width: 1px;
	justify-content: center;
`;

export const Content = styled.Text`
	color: #fff;
	font-size: 18px;
`;

export const Date = styled.Text`
	margin-top: 8px;
	color: rgba(255, 255, 255, 0.6);
`;
