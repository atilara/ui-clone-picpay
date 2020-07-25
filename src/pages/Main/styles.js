import styled from 'styled-components/native';

export const Wrapper = styled.View`
	flex: 1;
	background: #000;
`;

export const Container = styled.ScrollView``;

export const Services = styled.View``;

export const Header = styled.Text`
	color: #fff;
	font-size: 18px;
	text-transform: uppercase;
	margin: 0 12px;
`;

export const Item = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin: 12px 0;
`;

export const Img = styled.Image`
	margin: 0 12px;
`;

export const Details = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Content = styled.View`
	flex: 0.86;
`;

export const Title = styled.Text`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 4px;
`;

export const Description = styled.Text`
	color: #fff;
`;

export const Options = styled.TouchableOpacity`
	margin: 0 12px;
`;
