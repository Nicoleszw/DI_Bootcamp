import React, { useState } from 'react';
import FormComponent from './components/FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      lactoseFree: formData.lactoseFree ? 'on' : 'off',
    });

    window.location.href = `http://localhost:3000/?${params.toString()}`;
  };

  return (
    <div>
      <FormComponent 
        data={formData} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
