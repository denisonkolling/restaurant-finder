import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import ReactStars from 'react-rating-stars-component'
import image from '../../assets/restaurante-fake.png';

const RestaurantCard = () => {
	return (
		<Restaurant>
			<RestaurantInfo>
				<Title>Papa John's</Title>
				<ReactStars count={5} value={4.5} isHalf activeColor='#e7711c'/>
				<Address>Rua Santa Catarina, 654</Address>
			</RestaurantInfo>
        <RestaurantPhoto src={image} alt='foto do restaurante' />
		</Restaurant>
	);
};

export default RestaurantCard;
