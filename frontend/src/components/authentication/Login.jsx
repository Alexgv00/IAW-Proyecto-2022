import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa';
import './Login.css';
import UsersService from "../../services/UsersService.js"

const Login = () => {
    const [message, setMessage] = useState("")
    const inputNickname = useRef(null);
    const inputPassword = useRef(null);
    const inicio = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      const nickname = inputNickname.current.value;
      const password = inputPassword.current.value;
      const params = {
        "nickname": nickname,
        "password": password
      }
      console.log(params);
      UsersService.login(params).then(data => {
        document.getElementById("frm-user").reset();
        localStorage.setItem("userSession", JSON.stringify(data))
        inicio(-1)
      })
    }
  return (
    <form id="frm-user" name="frm-user" onSubmit={e => handleSubmit(e)} className="form-container">

    <div className="container">
       <label htmlFor="nickname"><b>Nickname</b></label>
       <input type="text" id="nickname" placeholder="Enter Nickname" name="nickname" required ref={inputNickname}/>

       <label htmlFor="password"><b>Password</b></label>
       <input type="password" id="password" placeholder="Enter Password" name="password" required ref={inputPassword}/>

       <section className='panelButton'>
         <button type="submit"><FaEdit size='16' /> Login</button>
       <label> 
         {/* TODO: Implementar sessión storage o local storage */}
         <input type="checkbox" defaultChecked="checked" name="remember"/><span>Remember me</span>
       </label>
       </section>
    </div>
        <button type="button" className="cancelbtn" onClick={()=> inicio(-1)}>Cancel</button>

    {message && <div className='action-message'>{message}</div>}
  </form>
  )
}

export default Login