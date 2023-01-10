import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header'
import RestaurantDetail from '../components/restaurants/RestaurantDetail'
import RestaurantService from '../services/RestaurantsService'

const RestaurantDetailPage = () => {
    const [restaurant, setRestaurant] = useState()
    const {idRestaurant} = useParams()
    useEffect(() => {
        RestaurantService.getRestaurantById(idRestaurant).then(data=> setRestaurant(data))
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