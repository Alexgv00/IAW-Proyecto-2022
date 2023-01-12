import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({item}) => {
    const userDataContext = useContext(UserContext);

  return (
    <header>
        <h1>FootFinder</h1>
        <Navigation item={item} />
        <Link to="/users/login">
          <button className='btn-login'>Login</button>
        </Link>
        <div className='user-container'>
            <span className='name-user'>{userDataContext.name}</span>
        </div>
    </header>
  )
}

export default Header