import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
import {ROLES} from "../../constants/app_constants.js"
import { Link } from 'react-router-dom'


const Navigation = ({item}) => {
  return (
    <nav>
        {/* <Link to="/" className={item === "home" ? 'active' : 'off'}>Home</Link>
        <Link to="/profile" className={item === "home" ? 'active' : 'off'}>Profile</Link> */}
    </nav>
  )
}

export default Navigation