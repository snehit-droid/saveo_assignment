import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';
import GoogleMap from './GoogleMap';
import Map from './Map';

function App() {
  const [landmark, setLandmark] = useState([]);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [location, setLocation] = useState("bangalore");

  const handleChange = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case "lat":
        setLat(value);
        break;
      case "long":
        setLong(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;  
    }
  }

  useEffect(() => {
    const fetch = () => {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
        .then(res => res.json())
        .then(result => 
          setLandmark([
            ...landmark, 
            { lat: result.features[0].center[1], long: result.features[0].center[0], location }
          ]))
    }
    fetch(); 
  }, [location]);

  const addHandler = (e) => {
    e.preventDefault();
    setLandmark([
      ...landmark, 
      { location }
    ]);
    setLat("");
    setLong("");
    setLocation("");
  }

  return (
    <div className="main">
      <button className="button">
        HOME
      </button>
    <div className="App">

      <div className="head">
        <div className="form">
            <div className="input_section">
              <div className="input_fields">
                <label className="input_label">Location Name</label>
                <input name="location" value={location} placeholder="Location" onChange={handleChange} type="text" className="input1" />
              </div>
              <div className="input_fields">
                <label className="input_label">Enter Latitude</label>
                <input name="lat" value={lat} placeholder="Lat" onChange={handleChange} type="text" className="input2" />
              </div>
              <div className="input_fields">
                <label className="input_label">Enter Longitude</label>
                <input name="long" value={long} placeholder="Lon" onChange={handleChange} type="text" className="input3" />
              </div>
              <div className="input_fields_btn">
                <button onClick={addHandler} disabled={!(lat&&long&&location)} style={(lat&&long&&location) ? {backgroundColor: "#72A1BF"} : {backgroundColor: "white"}} className="button1" type="submit">
                  {(lat&&long&&location) ? "ADD" : "SUBMIT"}
                </button>
              </div>
            </div>
        </div>
      </div>
      
      <div className="flex-container">
        
        <div className="box1">
          <div className="block1">
            <Table landmark={landmark}/>
            <div className="bttn2">
              <button disabled={!(landmark.length)} style={landmark.length === 0 ? {backgroundColor: "#C6D1D9",color: "#838A8F"} : {backgroundColor: "#074770",color: "#FFFFFF"}} className="button2">
                Show Route
              </button>
            </div>
          </div>
        </div>
  
        <div className="box2">
          <div className="block2">
            {/* <Map /> */}
            <GoogleMap />
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;