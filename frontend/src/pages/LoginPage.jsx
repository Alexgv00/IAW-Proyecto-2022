import React from 'react'
import Login from '../components/authentication/Login'
import Header from '../components/common/Header'

const LoginPage = () => {
  return (
    <>
        <Header/>
        <main>
            <div>
                <Login/>
            </div>
        </main>

    </>
  )
}

export default LoginPage