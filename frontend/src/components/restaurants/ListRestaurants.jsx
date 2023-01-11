import React from 'react'
import {FaRegComments, FaConciergeBell} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./ListRestaurant.css"

const ListRestaurants = ({restaurants}) => {
  return (
    <section className='container'>
        {
            restaurants.map(restaurant =>
                    <Link to={`/restaurants/${restaurant._id}`} className="container-link" key={restaurant._id}>
                        <article className="card">
                                <img src={`/assets/img/restaurants/${restaurant.photo}`} alt={restaurant.photo} />
                            <div className='description'>
                                <h4>{restaurant.name}</h4>
                                <p>{(restaurant.description.length>150)?restaurant.description.substring(0,100)+'(...)':restaurant.description}</p>
                            <div className='counts'>
                                    <span>{restaurant.stars} Stars </span>
                                    <span>{restaurant.comments.length}<FaRegComments/></span>
                                    <span>{restaurant.dishes.length}<FaConciergeBell/></span>
                            </div>
                            </div>
                        </article>
                    </Link>
                )
        }
    </section>
  )
}

export default ListRestaurants