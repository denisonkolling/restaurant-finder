import React from 'react';
import {
	Restaurant,
	RestaurantInfo,
	Title,
	Address,
	RestaurantPhoto,
} from './styles';
import ReactStars from 'react-rating-stars-component';
import image from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => {
	return (
		<Restaurant onClick={onClick}>
			<RestaurantInfo>
				<Title>{restaurant.name}</Title>
				<ReactStars count={5} value={4.5} isHalf activeColor="#e7711c" />
				<Address>{restaurant.formatted_address}</Address>
			</RestaurantInfo>
			<RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : image} alt="foto do restaurante" />
		</Restaurant>
	);
};

export default RestaurantCard;
