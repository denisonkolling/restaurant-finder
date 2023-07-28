import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Google } from '@mui/icons-material';
import { useState } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapNew() {
	const center = {
		lat: -27.59559,
		lng: -48.55793,
	};

	const defaultProps = {
		center: {
			lat: -27.59559,
			lng: -48.55793,
		},
		zoom: 12,
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}>
				<AnyReactComponent
          lat={-27.59559}
          lng={-48.55793}
          text="My Point"
        />
			</GoogleMapReact>
		</div>
	);
}
