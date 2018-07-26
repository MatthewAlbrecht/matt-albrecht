import React, { Component } from 'react';

import './Skills.css'

class Skills extends Component {
  render() {
    return <section className="skills">
      <div className="front">
        <div className="skills-image"></div>
        <div className="skills-info">
          <h3 className="skills-header">Front End</h3>
          <span className="skills-rule"></span>
          <ul className="skills-list">
            <li className="skills-list-item">React</li>
            <li className="skills-list-item">React Native</li>
            <li className="skills-list-item">Angular</li>
            <li className="skills-list-item">Javascript</li>
            <li className="skills-list-item">JQuery</li>
            <li className="skills-list-item">HTML // CSS</li>
          </ul>
        </div>
      </div>
      <div className="back">
        <div className="skills-image"></div>
        <div className="skills-info">
          <h3 className="skills-header">Back End</h3>
          <span className="skills-rule"></span>
          <ul className="skills-list">
            <li className="skills-list-item">Node</li>
            <li className="skills-list-item">Express</li>
            <li className="skills-list-item">MongoDB</li>
            <li className="skills-list-item">Amazon AWS </li>
            <li className="skills-list-item">Loopback</li>
            <li className="skills-list-item">Postgresql</li>
          </ul>
        </div>
      </div>
    </section>;
  }
}

export default Skills;
