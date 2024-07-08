import { useNavigate } from 'react-router-dom';
import classes from './login.module.css';

import { useContext } from 'react';
import {userContext} from '../../../store/userContext.js';


export default function Login(){

    const userCtxt = useContext(userContext);
    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();

        const fd = new FormData(event.target)
        const newObj = Object.fromEntries(fd.entries());

        
        if(newObj.email === "joeljohn159@gmail.com" && newObj.password === "Test123"){
            sessionStorage.setItem("email",newObj.email);
            navigate('/shiftDomainRole')
        }else{
            event.target.reset()
            alert('User unavailable')
            
        }
        
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainLoginContainer}>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <hr />
                <div className={classes.loginInput}>
                        <input type="email" name="email" id="email"  placeholder='Email' required/>
                </div>
                <div className={classes.loginInput} >
                        <input type="password" name="password" id="password" placeholder='Password' required minLength={6}/>
                </div>  
                <button type='submit'>Login</button>
            </form>
        </div>
        </div>
    );
}