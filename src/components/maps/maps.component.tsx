import React from "react";
import { GoogleMap, useJsApiLoader, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginBottom: '20px',
  marginTop: '20px',
  borderRadius: '20px',
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapsComponent({origin, destination}: {origin?: any, destination?: any}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [directions, setDirections] = React.useState<google.maps.DirectionsResult | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error('Yönlendirme hatası:', status);
        }
      }
    );
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(MapsComponent);