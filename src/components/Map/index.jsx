import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { setRestaurant, setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
	const dispatch = useDispatch();
	const { restaurants } = useSelector((state) => state.restaurants);
	const [map, setMap] = useState(null);
	const { google, query, placeId } = props;

	useEffect(() => {
		if (query) {
			searchByQuery(query);
		}
	}, [query]);

	useEffect(() => {
		if (placeId) {
			getRestaurantById(placeId);
		}
	}, [placeId]);

	function getRestaurantById(placeId) {
		const service = new google.maps.places.PlacesService(map);
		dispatch(setRestaurant(null));

		const request = {
			placeId,
			fields: [
				'name',
				'opening_hours',
				'formatted_address',
				'formatted_phone_number',
			],
		};

		service.getDetails(request, (place, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				dispatch(setRestaurant(place));
			}
		});
	}

	const searchByQuery = (query) => {
		const service = new google.maps.places.PlacesService(map);
		dispatch(setRestaurants([]));

		const request = {
			location: map.center,
			radius: '500',
			type: ['restaurant'],
			query,
		};

		service.textSearch(request, (results, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				dispatch(setRestaurants(results));
			}
		});
	};

	const searchNearby = (map, center) => {
		const service = new google.maps.places.PlacesService(map);
		dispatch(setRestaurants([]));

		const request = {
			location: center,
			radius: '10000',
			type: ['restaurant'],
		};

		service.nearbySearch(request, (results, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				dispatch(setRestaurants(results));
			}
		});
	};

	function onMapReady(_, map) {
		setMap(map);
		searchNearby(map, map.center);
	}

	const containerStyle = {
		position: 'relative',  
		width: '100%',
		height: '100%'
	}

	return (

		<Map
			// className="mapContainerWrapper"
			google={google}
			centerAroundCurrentLocation
			onReady={onMapReady}
			onRecenter={onMapReady}
			zoom={13}
			// containerStyle={containerStyle}
			// size={400, 400}
			// style={{width: '80vw', height: '100vh'}}
			{...props}>
			{restaurants.map((restaurant) => (
				<Marker
					key={restaurant.place_id}
					name={restaurant.name}
					position={{
						lat: restaurant.geometry.location.lat(),
						lng: restaurant.geometry.location.lng(),
					}}
				/>
			))}
			{/* <style jsx>{`
				.mapContainerWrapper {
					position: relative !important;
				}
				.mapContainerWrapper div:first-child {
					position: relative !important;
				}
			`}</style> */}
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
	language: 'pt-BR',
})(MapContainer);
