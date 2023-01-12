import './RestaurantDetail.css'
import React, { useState } from 'react'

const RestaurantDetail = ({restaurant}) => {
  console.log(restaurant)   
  
  return (
    <article className='card-e'>
      <div className='restaurant'>
        <div className='card-image'>
          <img src={`/assets/img/restaurants/${restaurant.photo}`} alt={restaurant.photo} />
        </div>
        <div className='descriptions'>
          <h4>{restaurant.name}</h4>
          <p>{restaurant.description}</p>
          <p>{restaurant.phone}</p>
          <p>{restaurant.direction}</p>
        </div>
      </div>
      <div className='dishes'>
        {restaurant.dishes.map(dish =>
          <article className="card">
            <img src={`${dish.photo}`} alt={dish.photo} />
            <div className='description'>
              <h4>{dish.name}</h4>
              <p>{(dish.description.length>150)?dish.description.substring(0,100)+'(...)':dish.description}</p>
              <p>{dish.price}</p>
            </div>
          </article>  
        )}
      </div>
        
      <div className='comments'>

       </div>
    </article>
  )
}

export default RestaurantDetail