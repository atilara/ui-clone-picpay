import styled from 'styled-components/native';

// attrs serve para passar paramêtros (que também podem ser passados no
// componente dentro de index.js) direto pelo styled components
export const Container = styled.ScrollView.attrs(() => ({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	contentContainerStyle: {
		alignItems: 'center',
		paddingLeft: 16,
	},
}))`
	background: ${(props) => (props.black ? '#000' : '#1e222b')};
	height: 120px;
`;

export const Title = styled.Text`
	color: #fff;
	text-transform: uppercase;
	font-size: 18px;
	font-weight: bold;
	margin: 12px 8px;
`;

export const Option = styled.TouchableOpacity`
	width: 80px;
	margin-right: 16px;
	align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
	color: #fff;
	font-weight: bold;
	margin-top: 8px;
	font-size: 14px;
`;
