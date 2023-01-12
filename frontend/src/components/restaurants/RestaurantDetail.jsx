import './RestaurantDetail.css'
import React, { useState } from 'react'

const RestaurantDetail = ({restaurant}) => {
  console.log(restaurant.dishes)
  console.log(restaurant.comments);
  
  return (
    <>
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
                <h3><b>{dish.name}</b></h3>
                <p>{(dish.description.length>150)?dish.description.substring(0,100)+'(...)':dish.description}</p>
                <p><b>Precio:</b> {dish.price}€</p>
              </div>
            </article>  
          )}
        </div>
      </article>
          
      <div className='comments'>
      {restaurant.comments.map(comment =>
          <article className="comment">
            <div className='commentDescription'>
              <p>{(comment.description.length>150)?comment.description.substring(0,100)+'(...)':comment.description}</p>
              <p className='stars'>{comment.stars} ⭐</p>
            </div>
          </article>
        )}
      </div>
    </>
  )
}

export default RestaurantDetail