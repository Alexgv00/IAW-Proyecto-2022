import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/common/Header'
import ListRestaurants from '../components/restaurants/ListRestaurants'
import RestaurantService from '../services/RestaurantsService'


const ListRestaurantsPage = () => {
    const [restaurants, setRestaurants] = useState([])
  
    useEffect(() => {
        RestaurantService.getRestaurants().then(data=> setRestaurants(data))
    }, [])
  return (
    <>
        <Header item="home"/>
        <main>
            <div>
                <ListRestaurants restaurants={restaurants}/>
            </div>
        </main>
    </>
  )
}

export default ListRestaurantsPage