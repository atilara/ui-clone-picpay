import styled from 'styled-components/native';

export const Container = styled.View`
	margin-top: 25px;
	padding: 0 16px;
	flex-direction: row;
	justify-content: space-between;
`;

export const Header = styled.View``;

export const SelectionWrapper = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const SelectionOption = styled.TouchableOpacity``;

export const Underline = styled.View`
	border-bottom-color: #00fc6c;
	border-bottom-width: 1px;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
`;

export const Selected = styled.Text`
	color: #00fc6c;
`;

export const SelectionLabel = styled.Text`
	color: #fff;
	margin-left: 8px;
`;

export const Title = styled.Text`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
`;

export const Card = styled.View`
	background-color: #1e222b;
	border-radius: 8px;
	margin-top: 20px;
	padding: 15px;
`;

export const CardHeader = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
	color: #fff;
	font-size: 16px;
	margin-left: 15px;
`;

export const Bold = styled.Text`
	font-weight: bold;
`;

export const CardBody = styled.View`
	margin-top: 20px;
`;

export const UserName = styled.Text`
	color: #fff;
	font-size: 20px;
`;

export const CardFooter = styled.View`
	margin-top: 15px;
	flex-direction: row;
	justify-content: space-between;
`;

export const Details = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Value = styled.Text`
	color: #f75175;
	font-size: 14px;
	font-weight: bold;
`;

export const Divider = styled.View`
	width: 2px;
	height: 13px;
	background: rgba(255, 255, 255, 0.6);
	margin: 0 10px;
`;

export const Date = styled.Text`
	color: #fff;
	margin-left: 5px;
`;

export const Actions = styled.View`
	flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
	margin-left: 15px;
	flex-direction: row;
`;

export const OptionLabel = styled.Text`
	color: #fff;
	font-size: 14px;
	margin-left: 5px;
`;
