import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom/dist'

const ProductPage = () => {
    const [product, setProduct] = useState(null)
    const {idProduct} = useParams()
    const navigate = useNavigate()

    const getProduct = async(idProduct) => {
        try {
            const res = await fetch('/data/products.json')
            const data = await res.json()
            const productData = data.find(e=>e.id==idProduct)
            setProduct(productData)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(
        ()=>{
            getProduct(idProduct)
        }, []
    )
  return (
    <main>
        {product ?
            <article>
                <h2> {product.name}</h2>
                <p> {product.description} </p>
                <p> {product.price} </p>
                <button onClick={()=> navigate(-1)}>Back</button>
            </article>
            : <h1>Not found</h1>
        }
    </main>
  )
}

export default ProductPage