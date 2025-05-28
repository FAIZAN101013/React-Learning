import React from 'react'
import reactLogo from '../assets/react-core-concepts.png'




const reactDescription = ['Fundamental', 'Core', 'Crucial', 'Essential', 'Key']


const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

const Header = () => {
  const randomDescription = reactDescription[genRandomInt(4)]

  return (
    <div>
      <header>
        <img src={reactLogo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomDescription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  )
}

export default Header
