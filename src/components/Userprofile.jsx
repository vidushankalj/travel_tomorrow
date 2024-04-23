// UserProfile.js

import React, { useState } from 'react';
import '../Styles/UserProfile.css';

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState('/default-profile-pic.jpg');
  const [bio, setBio] = useState('');
  const [favoriteDestinations, setFavoriteDestinations] = useState([]);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleFavoriteDestinationsChange = (event, index) => {
    const updatedDestinations = [...favoriteDestinations];
    updatedDestinations[index] = event.target.value;
    setFavoriteDestinations(updatedDestinations);
  };

  const addFavoriteDestination = () => {
    setFavoriteDestinations([...favoriteDestinations, '']);
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="profile-info">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        </div>
        <div className="bio">
          <textarea
            placeholder="Enter your bio..."
            value={bio}
            onChange={handleBioChange}
          />
        </div>
      </div>
      <div className="favorite-destinations">
        <h2>Favorite Destinations</h2>
        {favoriteDestinations.map((destination, index) => (
          <div className="destination-tile" key={index}>
            <img
              src={`/${destination.replace(/\s/g, '-')}-image.jpg`} // Assuming image filenames follow the format "destination-name-image.jpg"
              alt={destination}
            />
            <input
              type="text"
              placeholder="Enter destination name"
              value={destination}
              onChange={(event) => handleFavoriteDestinationsChange(event, index)}
            />
          </div>
        ))}
        <button className="add-destination-btn" onClick={addFavoriteDestination}>
          Add Destination
        </button>
      </div>
    </div>
  );
};

export default UserProfile;