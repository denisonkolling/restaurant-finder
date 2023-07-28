import React from 'react';
import { 	Container,	Search,	Logo,	Button,	Wrapper,	CarouselTitle,	Carousel,} from './style';
import logo from '../../assets/logo.svg';
import { TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import image from '../../assets/restaurante-fake.png';
import Slider from 'react-slick';
import { Card, RestaurantCard, Modal, Map } from '../../components';
import { Input } from '@material/react-text-field';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const [value, setValue] = useState('');
	const [query, setQuery] = useState(null);
	const [modalOpened, setModalOpened] = useState(false);
	const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
	const [placeId, setPlaceId] = useState(null);

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptativeHeight: true,
	};

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			setQuery(value);
		}
	}

	function handleClickSearch() {
		setQuery(value);
	}

	function handleOpenModal(placeId) {
		setPlaceId(placeId);
		setModalOpened(true);
	}

	return (
		<Wrapper>
			<Container>
				<Search>
					<Logo src={logo} alt="logo restaurante" />
					<div>
						<Input
							type="text"
							value={value}
							onKeyDown={handleKeyDown}
							onChange={(e) => setValue(e.target.value)}
						/>
						<Button>
							<SearchIcon onClick={handleClickSearch} />
						</Button>
						<CarouselTitle>Na sua Área</CarouselTitle>
						<Carousel {...settings}>
							{restaurants.map((restaurant) => (
								<Card
									key={restaurant.place_id}
									photo={
										restaurant.photos ? restaurant.photos[0].getUrl() : image
									}
									title={restaurant.name}
								/>
							))}
						</Carousel>
						<button onClick={() => setModalOpened(true)}>Abrir Modal</button>
					</div>
				</Search>
				{restaurants.map((restaurant) => (
					<RestaurantCard onClick={()=>handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
				))}
			</Container>
			<Map query={query} placeId={placeId} />
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
				<p>{restaurantSelected?.name}</p>
				<p>{restaurantSelected?.formatted_phone_number}</p>
				<p>{restaurantSelected?.formatted_address}</p>
			</Modal>
		</Wrapper>
	);
};

export default Home;
