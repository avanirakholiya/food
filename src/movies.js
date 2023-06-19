import React from 'react'
import { Link } from 'react-router-dom';
import './movies.css';

export default function movie(props) {
  return (
    <div className='movie'>
      <div className='img'>
      <img src={props.strMealThumb} height={"300px"} width={"300px"} />
      </div>
      <Link to={`/Map/${props.idMeal}`}>
        <p style={{ color: "white", textAlign: "center", fontSize: "18px",marginTop:"30px" }}><b>{props.idMeal}</b></p>
      </Link>
      <div style={{ paddingLeft: "10px" }}>
        <p>strMeal:{props.strMeal}</p>
        <p>strArea:{props.strArea}</p>
        <p>strCategory:{props.strCategory}</p>

      </div>
    </div>
  )
}

