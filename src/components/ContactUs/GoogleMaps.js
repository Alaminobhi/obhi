import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '15px'
};

const location = {
    lat: 23.797322,
    lng: 90.423645
};
const onLoad = marker => {
    console.log('marker: ', marker)
}
function GoogleMaps() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCK2zpg38A5V2QDZmPtVhB4WArPTLia2LM"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(GoogleMaps)
