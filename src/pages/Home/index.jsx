import React from 'react';
import {
	Container,
	Search,
	Logo,
	Button,
	Wrapper,
	CarouselTitle,
	Carousel
} from './style';
import logo from '../../assets/logo.svg';
import { TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import image from '../../assets/restaurante-fake.png';
import Slider from 'react-slick';
import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
	const [input, setInput] = useState('');
	const [modalOpened, setModalOpened] = useState(false)

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
							<Card photo={image} title='Nome'/>
							<Card photo={image} title='Nome'/>
							<Card photo={image} title='Nome'/>
							<Card photo={image} title='Nome'/>
							<Card photo={image} title='Nome'/>
							<Card photo={image} title='Nome'/>
						</Carousel>
						<button onClick={()=> setModalOpened(true)}>Abrir Modal</button>
					</div>
				</Search>
				<RestaurantCard />
			</Container>
			<Map />
			<Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}/>
		</Wrapper>
	);
};

export default Home;
