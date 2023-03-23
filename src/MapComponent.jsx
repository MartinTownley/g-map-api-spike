import React from "react";
// import GoogleMapReact from "google-map-react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div className="google-map">
      <h2> GMap Component</h2>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </div>
  );
}

export default MapComponent;
