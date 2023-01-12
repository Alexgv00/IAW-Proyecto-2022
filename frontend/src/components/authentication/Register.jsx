import './Register.css';
import React, { useEffect, useRef, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UsersService.js';

const Register = () => {

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("")
  const inicio = useNavigate();
  
  const inputNickname = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputPassCheck = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO Comprobar contraseña: 
    //Que las 2 contraseñas sean iguales, longitud
    
    const user = {
      "nickname": inputNickname.current.value,
      "email": inputEmail.current.value,
      "password": inputPassword.current.value
    }

    
    UserService.new(user).then(data => {
        document.getElementById("frm-user").reset();
        console.log(data);
        // setMessage(data.message)
    });
  }

  useEffect(() => {
    UserService.getUsers().then(data => setUsers(data));
  }, [message]);


  return (
     <form id="frm-user" name="frm-user" onSubmit={e => handleSubmit(e)} className="form-container">
       {/* <div className="imgcontainer">
         <img src="" alt="icon" className="icon"/>
       </div> */}

       <div className="container">
          <label htmlFor="nickname"><b>Nikname</b></label>
          <input type="text" id="nickname" placeholder="Enter Nikname" name="nickname" required ref={inputNickname}/>

          <label htmlFor="email"><b>Email</b></label>
          <input type="email" id="email" placeholder="Enter Email" name="email" required ref={inputEmail}/>

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" id="password" placeholder="Enter Password" name="password" required ref={inputPassword}/>

          <label htmlFor="password2"><b>Confirm Password</b></label>
          <input type="password" id="password2" placeholder="Repeat Password" name="password2" required ref={inputPassCheck}/>

          <section className='panelButton'>
            <button type="submit"><FaEdit size='16' />Register</button>
          </section>
       </div>
           <button type="button" className="cancelbtn" onClick={()=> inicio(-1)}>Cancel</button>

       {message && <div className='action-message'>{message}</div>}
     </form>
  )
}

export default Register