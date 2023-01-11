import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
import Navigation from './Navigation'
import "./Header.css"

const Header = ({item}) => {
    const userDataContext = useContext(UserContext);

  return (
    <header>
        <h1>FootFinder</h1>
        <Navigation item={item} />

        <div className='user-container'>
            <span className='name-user'>{userDataContext.name}{userDataContext.surnames}</span>
        <span className="lang">{userDataContext.language} </span>
        </div>
    </header>
  )
}

export default Header