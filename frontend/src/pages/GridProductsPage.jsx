import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./GridProductsPage.css"
const GridProductsPage = () => {
    const [products, setProducts] = useState([])

    const getProducts = async() => {
        try {
            const res = await fetch('/data/products.json')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(
        ()=>{
            getProducts()
        }, []
    )
  return (
    <div>
        <h1>Product List</h1>
        <section className='products-grid'>
            {
                products.map(e => 
                    <article className="card" key={e.id}>
                        <h3><Link to={`/product/${e.id}`}> {e.name} </Link> </h3>
                        <p>{e.price}</p>
                    </article>
                    )
            }
        </section>
    </div>
  )
}

export default GridProductsPage