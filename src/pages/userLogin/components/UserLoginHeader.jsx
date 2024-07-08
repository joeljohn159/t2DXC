import '../UserLogin.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../../store/userContext.js'

export default function UserPageHeader(){

    const navigate = useNavigate();
    const userCtxt = useContext(userContext);
    if(userCtxt.user.nid === ''){
        return <Navigate to='/'/>
    }

    function handleSDRSubmit(event){
        event.preventDefault();
        const fd = new FormData(event.target)
        const Obj = Object.fromEntries(fd.entries());
        userCtxt.updateSDR(Obj);
        sessionStorage.setItem('SDR',JSON.stringify(Obj));
        navigate('/admin')
    }
    return (
        <>
        <form onSubmit={handleSDRSubmit}>
        <div className="loginContainerX">
            <div className="innerLoginContainer">
                <h5 style={{textAlign:'center',padding:'8px 0',margin:'12px 10px', border:'1.2px solid #000', borderRadius:'5px', backgroundColor:'#fff',color:'black', fontSize:'15px'}}>Welcome to SMO Task Tracker</h5>
                <div className="innerLoginChild">
            
            <div>
                <select name="shift" id="shift" required>
                    <option hidden value="">Select Shift</option>
                    <option value="generalShift">General Shift</option>
                    <option value="secondShift">Second Shift</option>
                    <option value="nightShift">Night Shift</option>
                </select>
            </div>
            
            <div>
                <select name="domain" id="domain" required>
                    <option hidden value="">Select Domain</option>
                    <option value="surety">Surety</option>
                    <option value="gcc">GCC/SCC</option>
                    <option value="claims">Claims</option>
                    <option value="mainframe">Mainframe</option>
                </select>
            </div>
            <div>
                <select name="role" id="role" required>
                    <option hidden value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="reviewer">Reviewer</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
            
        </div>
            </div>
        </div>
        </form>
        </>
        
    );
}