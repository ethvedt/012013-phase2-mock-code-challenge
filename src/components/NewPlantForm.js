import React, { useState } from "react";

function NewPlantForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  });

  function handleFormChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [key]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      image: "",
      price: 0
    })
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleFormChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleFormChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleFormChange}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
