import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
	const defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	return (
		<section className="map">
			<div className="container">
				<div className="map__content">
					<div style={{ height: '500px', width: '100%' }}>
						<GoogleMapReact
							bootstrapURLKeys={{ key: "" }}
							defaultCenter={defaultProps.center}
							defaultZoom={defaultProps.zoom}
						>
							<AnyReactComponent
								lat={59.955413}
								lng={30.337844}
								text="My Marker"
							/>
						</GoogleMapReact>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Map;