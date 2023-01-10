import './Register.css';
import React, { useEffect, useRef, useState } from 'react'
import UserService from '../../services/UserService.js'
import { FaEdit } from "react-icons/fa";

const Register = () => {

  const [users, setUsers] = useState([]);
  
  const inputNickname = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO Comprobar contraseña: 
    //Que las 2 contraseñas sean iguales, longitud
    // const checkResult = checkImageName(inputFlag.current.value);
    // if (checkResult.error) {
    //     windowsSwal.fire({
    //         title: <strong>Warning</strong>,
    //         html: <i>{checkResult.message}</i>,
    //         icon: 'error'
    //     })
    //     return false;
    // }
    const user = {
        "nickname": inputNickname.current.value,
        "email": inputEmail.current.value
    }
    UserService.new(user).then(data => {
        document.getElementById("frm-user").reset();
        setMessage(data.message)
    });
  }
  
  const handleDelete = (id) => {
    UserService.delete(id).then(data => setMessage(data.message));
  }

  useEffect(() => {
    UserService.getUsers().then(data => setUsers(data));
  }, [message]);


  return (
     <form id="frm-user" name="frm-user" onSubmit={e => handleSubmit(e)}>
       <div className="imgcontainer">
         <img src="" alt="icon" className="icon"/>
       </div>

       <div className="container">
          <label htmlfor="nickname"><b>Nikname</b></label>
          <input type="text" id="nickname" placeholder="Enter Nikname" name="nickname" required ref={inputNickname}></input>

          <label htmlfor="email"><b>Email</b></label>
          <input type="text" id="email" placeholder="Enter Email" name="email" required ref={inputEmail}></input>

          <label htmlfor="password"><b>Password</b></label>
          <input type="text" id="password" placeholder="Enter Password" name="password" required ref={inputPassword}></input>

          <label htmlfor="password"><b>Confirm Password</b></label>
          <input type="text" id="password2" placeholder="Repeat Password" name="password2" required></input>

          <section className='panelButton'>
            <button type="submit"><FaEdit size='16' />Register</button>
          </section>
       </div>

       <div className="container" style="background-color:#f1f1f1">
            {/* TODO: El botón cancel debe volver a la página de inicio */}
           <button type="button" className="cancelbtn">Cancel</button>
       </div>
       {message && <div className='action-message'>{message}</div>}
     </form>
  )
}

export default Register