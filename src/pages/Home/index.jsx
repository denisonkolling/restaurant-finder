import React from 'react';
import {
	Container,
	Search,
	Logo,
	Wrapper,
	CarouselTitle,
	Carousel,
	ModalTitle,
	ModalContent,
	Input,
	InputWrapper,
	StyledSearchIcon,
} from './styles';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import image from '../../assets/restaurante-fake.png';
import {
	Card,
	RestaurantCard,
	Modal,
	Map,
	Loader,
	Skeleton,
} from '../../components';
import { useSelector } from 'react-redux';

const Home = () => {
	const [value, setValue] = useState('');
	const [query, setQuery] = useState(null);
	const [modalOpened, setModalOpened] = useState(false);
	const { restaurants, restaurantSelected } = useSelector(
		(state) => state.restaurants
	);
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
						<InputWrapper>
							<Input
								type="text"
								value={value}
								placeholder="Encontre um restaurante..."
								onKeyDown={handleKeyDown}
								onChange={(e) => setValue(e.target.value)}
							/>
							<StyledSearchIcon onClick={handleClickSearch} />
						</InputWrapper>
						{restaurants.length > 0 ? (
							<>
								<CarouselTitle>Na sua Área</CarouselTitle>
								<Carousel {...settings}>
									{restaurants.map((restaurant) => (
										<Card
											key={restaurant.place_id}
											photo={
												restaurant.photos
													? restaurant.photos[0].getUrl()
													: image
											}
											title={restaurant.name}
										/>
									))}
								</Carousel>
							</>
						) : (
							<Loader />
						)}
					</div>
				</Search>
				{restaurants.map((restaurant) => (
					<RestaurantCard
						onClick={() => handleOpenModal(restaurant.place_id)}
						restaurant={restaurant}
					/>
				))}
			</Container>
			<div style={{	width: '80%', height: '100%', position: 'absolute',	marginLeft: '380px'}}>
				<Map query={query} placeId={placeId} />
			</div>
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
				{restaurantSelected ? (
					<>
						<ModalTitle>{restaurantSelected?.name}</ModalTitle>
						<ModalContent>
							{restaurantSelected?.formatted_phone_number}
						</ModalContent>
						<ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
						<ModalContent>
							{restaurantSelected?.opening_hours?.open_now
								? 'Aberto agora!'
								: 'Fechado no momento!'}
						</ModalContent>
					</>
				) : (
					<>
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
					</>
				)}
			</Modal>
		</Wrapper>
	);
};

export default Home;
