import React from 'react';
import {
	Container,
	Search,
	Logo,
	Button,
	Wrapper,
	Map,
	CarouselTitle,
	Carousel
} from './style';
import logo from '../../assets/logo.svg';
import { TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import restaurante from '../../assets/restaurante-fake.png';
import Slider from 'react-slick';
import { Card } from '../../components';

const Home = () => {
	const [input, setInput] = useState('');

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptativeHeight: true,
	};

	return (
		<Wrapper>
			<Container>
				<Search>
					<Logo src={logo} alt="logo restaurante" />
					<div>
						<TextField
							label="Pesquisar"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<Button>
							<SearchIcon />
						</Button>
						<CarouselTitle>Na sua Área</CarouselTitle>
						<Carousel {...settings}>
							<Card photo={restaurante} title='Nome'/>
							<Card photo={restaurante} title='Nome'/>
							<Card photo={restaurante} title='Nome'/>
							<Card photo={restaurante} title='Nome'/>
							<Card photo={restaurante} title='Nome'/>
							<Card photo={restaurante} title='Nome'/>
						</Carousel>
					</div>
				</Search>
			</Container>
			<Map />
		</Wrapper>
	);
};

export default Home;
