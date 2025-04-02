import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        {data.Experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <img
              src={exp.logo}
              alt="logo"
              width="200"
              height="200"
              style={{ borderRadius: '50%' }}
            />
            <br />
            <a href={exp.url} target="_blank" rel="noreferrer">
              {exp.companyName}
            </a>
            {exp.roles.map((role, idx) => (
              <div key={idx}>
                <p>
                  <strong>{role.title}</strong>
                  <br />
                  {role.startDate}
                  {role.location}
                </p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
