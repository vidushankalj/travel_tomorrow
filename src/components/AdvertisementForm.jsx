
import React, { useState } from 'react';
import "../Styles/AdvertisementForm.css";

const AdvertisementForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    images: [],
    address: '',
    town: '',
    details: '',
    mapLink: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setFormData({ ...formData, images });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
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
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="town"
          placeholder="Town"
          value={formData.town}
          onChange={handleChange}
        />
        <textarea
          name="details"
          placeholder="Details"
          value={formData.details}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mapLink"
          placeholder="Google Map Link"
          value={formData.mapLink}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
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
