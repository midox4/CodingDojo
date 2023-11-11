import React, { useState } from 'react';
import '../../App.css'


const Card = (props) => {
  const [age,setAge] = useState(props.age)

  const addAge = ()=>{
    setAge(age +1)
  }
  const minusAge= ()=>{
    setAge(age -1)
  }
    return (
        <div className="person-card">
          <h2>{props.firstName} {props.lastName}</h2>
          <p>Age: {age}   <button  onClick={minusAge}>-</button></p>
          <p>Hair Color: {props.hairColor}</p>
          <button  onClick={addAge} >Brithday button for:  {props.firstName} {props.lastName}</button>
        </div>
      );
    }

export default Card;





