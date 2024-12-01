import React from 'react'
import './Persona.css'
export const Persona = () => {
  return (
    <div className="persona">
        {/* <h1>Persona Scenario</h1> */}
        <div className="persona-container">
      <h1 className="persona-heading">Persona</h1>
      <div className="persona-section">
        <h2 className="persona-subheading">Basic Information</h2>
        <p><strong>Name:</strong> Emma Hart</p>
        <p><strong>DOB:</strong> 30/01/1990</p>
        <p><strong>Occupation:</strong> Freelance Designer</p>
        <p><strong>Email:</strong> emma@abc.com</p>
        <p><strong>Location:</strong> Berlin, Germany</p>
        <p><strong>Monthly Income:</strong> $3500</p>
        <p><strong>Monthly Savings:</strong> $600</p>
      </div>
      <div className="persona-section">
        <h2 className="persona-subheading">Scenario</h2>
        <p>
          Emma Hart, a freelance designer from Berlin, is planning a trip to
          Dubai to attend a special design exhibition running for three months.
          She can visit the event at any point during this period and plans to
          stay in Dubai for at least 10 days to experience the exhibition and
          explore the city.
        </p>
      </div>
      <div className="persona-section">
        <h2 className="persona-subheading">Preferences</h2>
        <ul className="persona-list">
          <li>Budget: Economy class with value-for-money options</li>
          <li>Flight Times: Prefers shorter flights</li>
          <li>Airline: Open to different airlines</li>
          <li>Travel Date: Flexible</li>
          <li>Baggage Requirements: A lightweight traveler</li>
        </ul>
      </div>
    </div>
    </div>
  )
}
