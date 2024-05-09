import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const mySkills = [
  {
    name: 'JavaScript',
    comfort: 9,
    frontEnd: true,
    backend: true
  },
  {
    name: 'CSS',
    comfort: 8,
    frontEnd: true,
    backend: false
  },
  {
    name: 'HTML',
    comfort: 10,
    frontEnd: true,
    backend: false
  }
];


const PortfolioPage = () => {
  const backgroundStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'changeColor 10s infinite alternate',
    backgroundColor: '#ff0000' // Initial background color
  };

  return (
    <div style = {backgroundStyle}>
      <h1>Welcome to Stanley's Portfolio Page</h1>
      <hr />
      <h2>Skills</h2>
      <ul>
        {mySkills.map((skill, index) => (
          <li key={index}>
            <p>{`Name: ${skill.name}`}</p>
            <p>{`Comfort Level: ${skill.comfort}`}</p>
            <p>{`Frontend: ${skill.frontEnd ? 'Yes' : 'No'}`}</p>
            <p>{`Backend: ${skill.backend ? 'Yes' : 'No'}`}</p>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPage;