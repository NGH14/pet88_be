import { styled } from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const LoadingWrapper = styled.section`
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(241, 241, 241);
	position: relative;
  height: ${(props) => props.height ?? '100vh'}}
`;

export const StyledSpin = styled(Spin)`
	color: #f76a1a;
`;

export const SpinIcon = styled(LoadingOutlined)`
	font-size: ${(props) => props.fontSize ?? '100px !important'};
`;
