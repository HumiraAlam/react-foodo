import React from 'react'

const FoodCard = (props) => {
    return (
        <div className="food-card">
        <img src={props.img} alt={props.name} />
        <div className="content">
          <h2 className="name">{props.name}</h2>
          <p className="desc">{props.desc}</p>
          <div className="footer">
            <span className="price">${props.price}</span>
            <span className="rating">Rating: {props.rating} ⭐</span>
          </div>
        </div>
      </div>
    )
}

export default FoodCard