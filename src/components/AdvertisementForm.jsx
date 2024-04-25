
import React, { useState } from 'react';
import "../Styles/AdvertisementForm.css";

const AdvertisementForm = (props) => {
  const [hotelName, setName] = useState('')
  const [address, setAddress] = useState('')
  const [town, setTown] = useState('')
  const [details, setDetails] = useState('')
  const [googleMap, setMapLink] = useState('')
  const [contactNum, setContactNumber] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hotel = {hotelName, address, town, details, googleMap, contactNum}

    const response = await fetch('http://localhost:8000/api/hotels', {
      method: 'POST',
      body: JSON.stringify(hotel),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      alert('submit failed')
      return
    }

    if (response.ok) {
      setName('')
      setAddress('')
      setTown('')
      setDetails('')
      setMapLink('')
      setContactNumber('')
      alert('new advertisment added')
      return
    }

  };

  const handleCancel = () => {
    setName('')
    setAddress('')
    setTown('')
    setDetails('')
    setMapLink('')
    setContactNumber('')
    console.log("Form closed");
  };

  return (
    <div className="advertisement-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Advertisement Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Hotel / Restaurant Name"
          value={hotelName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          name="town"
          placeholder="Town"
          value={town}
          onChange={(e) => setTown(e.target.value)}
        />
        <textarea
          name="details"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          type="text"
          name="mapLink"
          placeholder="Google Map Link"
          value={googleMap}
          onChange={(e) => setMapLink(e.target.value)}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={contactNum}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AdvertisementForm;
