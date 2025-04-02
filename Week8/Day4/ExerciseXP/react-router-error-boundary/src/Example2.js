import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        {data.Skills.map((area, index) => (
          <div key={index}>
            <strong>{area.Area}</strong>
            <ul>
              {area.SkillSet.map((skill, i) => (
                <li key={i}>{skill.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
