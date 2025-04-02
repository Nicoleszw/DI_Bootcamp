import React from 'react';

function FormComponent({ data, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#deb887', padding: '20px' }}>
        <h2 style={{ backgroundColor: '#383333', color: 'white', padding: '10px' }}>Sample form</h2>
        <input name="firstName" value={data.firstName} onChange={handleChange} placeholder="First Name" /><br />
        <input name="lastName" value={data.lastName} onChange={handleChange} placeholder="Last Name" /><br />
        <input name="age" value={data.age} onChange={handleChange} placeholder="Age" /><br />

        <input type="radio" name="gender" value="male" checked={data.gender === "male"} onChange={handleChange} /> Male<br />
        <input type="radio" name="gender" value="female" checked={data.gender === "female"} onChange={handleChange} /> Female<br />

        <label><b>Select your destination</b></label><br />
        <select name="destination" value={data.destination} onChange={handleChange}>
          <option value="">-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="Norway">Norway</option>
        </select><br /><br />

        <label><b>Dietary restrictions:</b></label><br />
        <input type="checkbox" name="nutsFree" checked={data.nutsFree} onChange={handleChange} /> Nuts free<br />
        <input type="checkbox" name="lactoseFree" checked={data.lactoseFree} onChange={handleChange} /> Lactose free<br />
        <input type="checkbox" name="vegan" checked={data.vegan} onChange={handleChange} /> Vegan<br /><br />

        <button type="submit">Submit</button>
      </form>

      <div style={{ backgroundColor: '#155e5e', color: 'white', padding: '20px', marginTop: '10px' }}>
        <h3>Entered information:</h3>
        <p><i>Your name:</i> {data.firstName} {data.lastName}</p>
        <p><i>Your age:</i> {data.age}</p>
        <p><i>Your gender:</i> {data.gender}</p>
        <p><i>Your destination:</i> {data.destination}</p>
        <p><i>Your dietary restrictions:</i></p>
        <p>**Nuts free : {data.nutsFree ? 'Yes' : 'No'}</p>
        <p>**Lactose free : {data.lactoseFree ? 'Yes' : 'No'}</p>
        <p>**Vegan meal : {data.vegan ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default FormComponent;
