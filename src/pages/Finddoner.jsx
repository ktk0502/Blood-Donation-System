import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [nearestUsers, setNearestUsers] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [organ, setOrgan] = useState('');

  useEffect(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );
  } else {
    setError("Geolocation is not available in your browser.");
  }
}, []);

  const findNearestUsers = async () => {
    try {
      const response = await axios.get('/nearest-users', {
        params: { latitude, longitude },
      });

      setNearestUsers(response.data);
    } catch (error) {
      console.error('Error finding nearest users:', error);
    }
  };

  return (
    <div style={{margin:'10px'}}>
      <h1>Find Nearest Users</h1>
      <div>
        <span>
              Latitude:
            <input
              type="text"
              placeholder="Latitude"
              value={latitude}
              style={{margin:'10px'}}
              onChange={(e) => setLatitude(e.target.value)}
            />
            </span>
        <span>
            Longitude:
            <input
              type="text"
              placeholder="Longitude"
              value={longitude}
              style={{margin:'10px'}}
              onChange={(e) => setLongitude(e.target.value)}
            />
        </span>
    </div>

        <div>
          Name:
            <input
            type="text"
            placeholder="Name"
            value={name}
            style={{margin:'10px'}}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      <div>
        Email:
          <input
            type="text"
            placeholder="Email"
            value={email}
            style={{margin:'10px'}}
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div>
        Country:
          <input
            type="text"
            placeholder="Country"
            value={country}
            style={{margin:'10px'}}
            onChange={(e) => setCountry(e.target.value)}
          />
      </div>
      <div>
        State:
        <input
          type="text"
          placeholder="State"
          value={state}
          style={{margin:'10px'}}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        City:
          <input
            type="text"
            placeholder="City"
            value={city}
            style={{margin:'10px'}}
            onChange={(e) => setCity(e.target.value)}
          />
      </div>
      <div>
        Blood Group:
          <input
            type="text"
            placeholder="Blood Group"
            value={bloodGroup}
            style={{margin:'10px'}}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
      </div>
      <div>
        Organ Neede:
          <input
            type="text"
            placeholder="Organ"
            value={organ}
            style={{margin:'10px'}}
            onChange={(e) => setOrgan(e.target.value)}
          />
      </div>

        <div style={{margin:'10px'}}>
          <button onClick={findNearestUsers}>Find Nearest Users</button>
        </div>
      <ul>
        {nearestUsers.map((user) => (
          <li key={user.userId}>{user.name}</li>
        ))}
      </ul>
    </div>
    
  );
}



export default App;
