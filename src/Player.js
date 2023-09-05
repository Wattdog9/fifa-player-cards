// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
      <img variant="top" src={imageUrl} />
               
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        
    </div>
  );
};

export default Player;

Player.defaultProps = {
    name: "Player Name",
    team: "Team",
    nationality: "Nationality",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://example.com/placeholder.jpg",
  };
  