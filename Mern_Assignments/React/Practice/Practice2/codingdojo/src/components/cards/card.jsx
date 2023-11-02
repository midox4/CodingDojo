import React from 'react';

const Card = (props) => {
    return (
        <div className="person-card">
          <h2>{props.firstName} {props.lastName}</h2>
          <p>Age: {props.age}</p>
          <p>Hair Color: {props.hairColor}</p>
        </div>
      );
    }

export default Card;





