import React from 'react'
import {FaRegComments, FaConciergeBell} from "react-icons/fa"
import { Link } from 'react-router-dom'

const ListRestaurants = ({restaurants}) => {
  return (
    <section className='grid-restaurants'>
        {
            restaurants.map(restaurant =>
                    <Link to={`/restaurants/${restaurant._id}`} className="prueba" >
                        <article className="card">
                            <div className='card-l'>
                                <img src={`/assets/img/restaurants/${restaurant.photo}`} alt={restaurant.photo} />
                            </div>
                            <div className='card-r'>
                                <h4>{restaurant.name}</h4>
                                <p>{restaurant.description}</p>
                            </div>
                            <div className='card-f'>
                                    <span>{restaurant.stars}</span>
                                    <span>{restaurant.comments.length}<FaRegComments/></span>
                                    <span>{restaurant.dishes.length}<FaConciergeBell/></span>
                            </div>
                        </article>
                    </Link>
                )
        }
    </section>
  )
}

export default ListRestaurants