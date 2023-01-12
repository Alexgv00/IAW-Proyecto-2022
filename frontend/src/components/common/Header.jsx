import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({item}) => {
    const userDataContext = useContext(UserContext);

    const handleLogout = (event) => { 
      event.preventDefault();

      localStorage.removeItem("userSession");
      window.location.reload(false)
     }

  return (
    <header>
        <h1>FootFinder</h1>
        <Navigation item={item} />
        {userDataContext.nickname == "loading"
        ? <div className='btn-section'>
            <Link to="/users/login">
              <button className='btn-login'>Login</button>
            </Link>
            <Link to="/users/register">
              <button className='btn-login'>Register</button>
            </Link>
          </div>
      :
        <>
          <Link to="/">
            <button className='btn-login' onClick={e => handleLogout(e)}>Logout</button>
          </Link>
          <div className='user-container'>
            <span className='name-user'>{userDataContext.nickname}</span>
          </div>
        </>
        }
        {/* <Link to="/users/login">
          <button className='btn-login'>Login</button>
        </Link> */}
        
    </header>
  )
}

export default Header