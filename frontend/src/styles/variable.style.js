import * as styled from 'styled-components';

export const color = styled.css`
	--primary-color: #f76a1a;
	--gold-color: #ebb512;
	--black-700: #171111;
	--dark-gray: #333333;
	--gray-100: #f5f5f5;
	--gray-300: #d3d3d3;
	--gray-500: #a9a9a9;
	--gray-700: #7f7f7f;
	--green-100: #88e788;
	--green-300: #00b300;
	--green-500: #008000;
	--green-700: #004c00;
	--white-300: #fafafa;
	--white-700: #ffffff;
	--light-white: #f7f6f1;
	--color-white: #e5e5e5;
`;

export const variable = styled.css`
	:root {
		${color}
	}
`;
