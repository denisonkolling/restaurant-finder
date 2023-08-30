import styled from 'styled-components';
import Slider from 'react-slick';
import SearchIcon from '@mui/icons-material/Search';

export const Wrapper = styled.div`
	display: flex;
	/* flex-direction: row; */
`;

export const Container = styled.aside`
	background-color: ${(props) => props.theme.colors.background};
	width: 380px;
	height: 100vh;
	overflow-y: scroll;
`;

export const Search = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #ffffff;
	padding: 16px;
`;

export const Logo = styled.img`
	margin-bottom: 15px;
	width: 50%;
	align-items: center;
	margin-left: 65px;
`;
export const Button = styled.button`
	height: 100%;
	margin-left: 5px;
`;

export const Map = styled.div`
	background-color: grey;
	width: 75%;
	border: 1px solid purple;
`;

export const Carousel = styled(Slider)`
	.slick-slide {
		margin-right: 30px;
		height: 100%;
		width: 360px;
	}

	.slick-track {
		height: 100%;
		width: 360px;
		/* border: solid 1px red; */
	}
`;

export const CarouselTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.text};
	font-size: 24px;
	font-weight: bold;
	line-height: 29px;
	margin: 16px 0px 16px;
`;

export const ModalTitle = styled.p`
	margin-bottom: 10px;
	letter-spacing: 0.11px;
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.text};
	line-height: 29px;
	font-size: 24px;
	font-weight: bold;
`;

export const ModalContent = styled.p`
	margin-bottom: 10px;
	letter-spacing: 0.11px;
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.text};
	font-weight: normal;
	line-height: 19px;
	font-size: 16px;
`;
export const Title = styled(Text)`
	margin: 16px 0;
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 50%;
	margin-inline: 25%;
`;

export const Input = styled.input`
	outline: none;
	padding: 16px 20px;
	width: 250px;
	border-radius: 5px;
	font-size: 16px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	background-color: #f0f2f5;
	border: none;
	margin-left: -55px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
	color: #757575;
	position: absolute;
	right: -45px;
	bottom: 13px;
	cursor: pointer;
`;
