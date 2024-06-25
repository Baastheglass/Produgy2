import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() 
{
  // Handle any logic or state management within this function
    const navigate = useNavigate();
    const handleLogin = () =>
    {
        navigate('/focus');
    }
  return (
    <>
        <div id = "left">
            <h1>
                Produgy
            </h1>
        </div>
        <div id = "right">
            <div id = "buttons">
                <input type = "text" id = "inpt1" placeholder = "Username: "/>
                <br/>
                <input type = "text" id = "inpt2" placeholder = "Password: "/>
                <br/>
                <button id = "lgn" onClick = {handleLogin}>Login!</button>
                <br/>
                <p>Dont have an Account?</p>
                <br/>
                <button id = "sgnup">Sign up!</button>
            </div>
        </div>
    </>
  );
}

export default LoginPage;
