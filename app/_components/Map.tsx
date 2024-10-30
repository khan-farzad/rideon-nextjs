import { OlaMaps } from "@/public/OlaMapsWebSDK/olamaps-js-sdk.es";
import { useEffect, useState } from "react";

const Map = () => {
  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [myMap, setMyMap] = useState<any>(null);

  // Get user's current location on component mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentCoords({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
      console.log(pos.coords)
    });
  }, []);

  // Initialize the map and marker once currentCoords are available
  useEffect(() => {
    if (currentCoords && !myMap) {
      const olaMaps = new OlaMaps({
        apiKey: process.env.NEXT_PUBLIC_API_KEY!,
      });

      const mapInstance = olaMaps.init({
        style:
          "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
        container: "map",
        center: [currentCoords.lng, currentCoords.lat],
        zoom: 15,
      });
      
      setMyMap(mapInstance);

      // Add marker at the user's current coordinates
      olaMaps
        .addMarker()
        .setLngLat([80.92520131983368,25.21618075540271])
        .addTo(mapInstance);
    }
  }, [currentCoords, myMap]);

  return <div id="map" className="h-[300px] w-[300px] rounded-full overflow-hidden"></div>;
};

export default Map;
