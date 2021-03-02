import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1Ijoic25laGl0IiwiYSI6ImNrbHJwa201ZDByN2YydmxsY2hxcHNxOGsifQ.YJ4FD5s4CoSxBw-Tt973HQ";

const mapStyles = {
  width: '100%',
  height: '100%'
};

const Map = () => {
  const [state, setState] = useState({
    lng: 77.594566,
    lat: 12.971599,
    zoom: 14
  });

  const mapContainer = useRef("");
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [state.lng, state.lat],
      zoom: state.zoom
    });
  }, [state.lng, state.lat, state.zoom]);

  return (
    <div>
      <div style={mapStyles} ref={(el) => (mapContainer.current = el)} />
    </div>
  )
}

export default Map;
