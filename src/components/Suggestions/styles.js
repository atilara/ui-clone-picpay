import styled from 'styled-components/native';

// attrs serve para passar paramêtros (que também podem ser passados no
// componente dentro de index.js) direto pelo styled components
export const Container = styled.ScrollView.attrs(() => ({
	horizontal: true,
	contentContainerStyle: {
		alignItems: 'center',
		paddingLeft: 16,
	},
}))`
	background: #1e222b;
	height: 130px;
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
