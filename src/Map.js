import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const style = {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  height: '519px',
  borderRadius: '0px 0px 36px 0px'
};

export default function Map() {
  const [state, setState] = useState({
    lng: 78.962883,
    lat: 20.593683,
    zoom: 6
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
  }, []);

  return (
    <div className="App">
      <div style={style} ref={(el) => (mapContainer.current = el)} />
    </div>
  );
}