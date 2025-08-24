'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Typography from '@mui/material/Typography'

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 40.4093,
    lng: 49.8671
};

export default function MapComponent() {
    return (
        <>
            <Typography variant="subtitle13" component='h6' mt='100px'
                color="primary" mb='10px'>Мы на карте</Typography>

            <LoadScript googleMapsApiKey="AIzaSyC04U6MRDJrYm1KUPdKsgAGTQLIpYYARc8">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </>
    );
}
