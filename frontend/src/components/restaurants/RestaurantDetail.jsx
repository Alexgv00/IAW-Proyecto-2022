import React, { useState } from 'react'

const RestaurantDetail = ({restaurant}) => {
       
  return (
    <article className='card-e'>
        <div className='card-image'>
            <img src={`/assets/img/restaurants/${restaurant.photo}`} alt={restaurant.photo} />
        </div>
        <div className='descriptions'>
            <h4>{restaurant.name}</h4>
            <p>{restaurant.description}</p>
        </div>
        <div className='comments'>

        </div>
    </article>
  )
}

export default RestaurantDetail