import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
	background: #000;
	flex: 1;
`;

export const Header = styled.View`
	height: 70px;
	background: #1e222b;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	margin-top: 20px;
	color: #fff;
	font-weight: bold;
	font-size: 18px;
`;

export const Container = styled.ScrollView``;

export const User = styled.View`
	padding: 30px 0;
	align-items: center;
`;

export const Img = styled.Image``;

export const UserName = styled.Text`
	color: #fff;
	font-size: 28px;
	font-weight: bold;
	margin: 8px 0;
`;

export const Name = styled.Text`
	color: rgba(255, 255, 255, 0.6);
	font-size: 18px;
`;

export const MyProfile = styled.TouchableOpacity`
	margin-top: 8px;
	flex-direction: row;
	align-items: center;
`;

export const MyProfileLabel = styled.Text`
	color: #1ab563;
	font-size: 16px;
`;

export const Section = styled.View``;

export const SectionHeader = styled.Text`
	color: rgba(255, 255, 255, 0.6);
	margin-top: 20px;
	margin-left: 10px;
	font-size: 14px;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export const SectionOptions = styled.View`
	background: #1e222b;
`;

export const SectionOption = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	border-bottom-color: rgba(255, 255, 255, 0.1);
	border-bottom-width: 1px;
`;

export const OptionLabel = styled.Text`
	color: #fff;
	margin-left: 10px;
	font-size: 18px;
`;

export const OptionIcon = styled.Text`
	margin-right: 10px;
`;
