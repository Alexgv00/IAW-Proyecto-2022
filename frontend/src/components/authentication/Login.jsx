import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const inputNickname = useRef(null);
    const inputPassword = useRef(null);
    const inicio = useNavigate();
  return (
    <form id="frm-user" name="frm-user" onSubmit={e => handleSubmit(e)}>
    <div className="imgcontainer">
      <img src="" alt="icon" className="icon"/>
    </div>

    <div className="container">
       <label htmlfor="nickname"><b>Nikname</b></label>
       <input type="text" id="nickname" placeholder="Enter Nikname" name="nickname" required ref={inputNickname}></input>

       <label htmlfor="password"><b>Password</b></label>
       <input type="text" id="password" placeholder="Enter Password" name="password" required ref={inputPassword}></input>

       <section className='panelButton'>
         <button type="submit"><FaEdit size='16' /> Login</button>
       </section>
       <label> 
         {/* TODO: Implementar sessión storage o local storage */}
         <input type="checkbox" checked="checked" name="remember">Remember me</input>
       </label>
    </div>

    <div className="container" style="background-color:#f1f1f1">
         {/* TODO: El botón cancel debe volver a la página de inicio */}
        <button type="button" className="cancelbtn" onClick={()=> inicio(-1)}>Cancel</button>
    </div>
    {message && <div className='action-message'>{message}</div>}
  </form>
  )
}

export default Login