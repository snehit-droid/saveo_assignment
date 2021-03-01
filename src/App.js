import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import GoogleMap from './GoogleMap';

function App() {
  const [landmark, setLandmark] = useState([]);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [location, setLocation] = useState("");

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

  const addHandler = (e) => {
    e.preventDefault();
    setLandmark([
      ...landmark, 
      { lat, long, location }
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
          <table>
            <thead>
              <th>
                <label>Location Name</label><br/>
                <input name="location" value={location} placeholder="Location" onChange={handleChange} type="text" className="input1" />
              </th>
              <th>
                <label>Enter Latitude</label><br/>
                <input name="lat" value={lat} placeholder="Lat" onChange={handleChange} type="text" className="input2" />
              </th>
              <th>
                <label label>Enter Longitude</label><br/>
                <input name="long" value={long} placeholder="Lon" onChange={handleChange} type="text" className="input3" />
              </th>
              <th>
                <button onClick={addHandler} style={(lat&&long&&location) ? {backgroundColor: "#72A1BF"} : {backgroundColor: "white", disable: "true"}} className="button1" type="submit">
                  {(lat&&long&&location) ? "ADD" : "SUBMIT"}
                </button>
              </th>
            </thead>
          </table>
        </div>
      </div>
      
      <div className="flex-container">
        
        <div className="box1">
          <div className="block1">
            <Table landmark={landmark}/>
            <button style={landmark.length === 0 ? {backgroundColor: "#C6D1D9",color: "#838A8F"} : {backgroundColor: "#074770",color: "#FFFFFF"}} className="button2">
              Show Route
            </button>
          </div>
        </div>
  
        <div className="box2">
          <div className="block2">
            <GoogleMap />
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
