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
import Skeleton from '../Skeleton';
import { useState } from 'react';

const RestaurantCard = ({ restaurant, onClick }) => {

	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<Restaurant onClick={onClick}>
			<RestaurantInfo>
				<Title>{restaurant.name}</Title>
				<ReactStars count={5} value={4.5} isHalf activeColor="#e7711c" />
				<Address>{restaurant.formatted_address}</Address>
			</RestaurantInfo>
			<RestaurantPhoto
				imageLoaded={imageLoaded}
				src={restaurant.photos ? restaurant.photos[0].getUrl() : image}
				onLoad={() => setImageLoaded(true)}
				alt="foto do restaurante"
			/>
			{!imageLoaded && <Skeleton width="100px" height="100px" />}
		</Restaurant>
	);
};

export default RestaurantCard;
