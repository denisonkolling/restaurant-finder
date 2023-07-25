import React from 'react';
import {
	Container,
	Search,
	Logo,
	Button,
	Wrapper,
	Map,
	CarouselTitle,
} from './style';
import logo from '../../assets/logo.svg';
import { TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import restaurante from '../../assets/restaurante-fake.png';
import Slider from 'react-slick';

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
						<Slider {...settings}>
							<div>
								<img src={restaurante} width="50" alt="restaurante" />
							</div>
							<div>
								<img src={restaurante} width="50" alt="restaurante" />
							</div>
							<div>
								<img src={restaurante} width="50" alt="restaurante" />
							</div>
							<div>
								<img src={restaurante} width="50" alt="restaurante" />
							</div>
							<div>
								<img src={restaurante} width="50" alt="restaurante" />
							</div>
							<div>
								<img src={restaurante} width="50" alt="restaurante" />
							</div>
						</Slider>
					</div>
				</Search>
			</Container>
			<Map />
		</Wrapper>
	);
};

export default Home;
