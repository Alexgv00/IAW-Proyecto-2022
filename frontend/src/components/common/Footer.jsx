import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <section className="logo">
            <img src="" alt="" width="100" height="100"/>
            <small>FoodFinder&copy; 2022-2023</small>
        </section>
        <section className="aboutus">
            <h2><strong>Información</strong></h2>
            <a href="">Aviso legal</a>
            <a href="">Privacidad</a>
            <a href="">Aviso de cookies</a>
        </section>
        <section className="aboutus">
            <h2><strong>Sobre nosotros</strong></h2>
            <a href="https://www.instagram.com/" target="_blank">Nuestro equipo</a>
            <a href="https://www.google.es/maps/@39.6249982,2.7211571,3a,75y,243.48h,100.46t/data=!3m6!1e1!3m4!1sOQ3GA1TNpnRg3JJl7qhnGA!2e0!7i16384!8i8192?hl" target="_blank">Localización</a>
        </section>
    </footer>
  )
}

export default Footer