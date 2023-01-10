import React, {useState, useEffect} from 'react'
import Header from '../components/common/Header'
import RestaurantDetail from '../components/restaurants/RestaurantDetail'
import RestaurantService from '../services/RestaurantsService'

const RestaurantDetailPage = () => {
    const [restaurant, setRestaurant] = useState()
    useEffect(() => {
        RestaurantService.getRestaurantById().then(data=> setRestaurant(data))
    }, [])

    console.log(restaurant)
  return (
    <>
        <Header/>
        <main>
            <div>
                <RestaurantDetail restaurant={restaurant}/>
            </div>
        </main>
    </>
  )
}

export default RestaurantDetailPage