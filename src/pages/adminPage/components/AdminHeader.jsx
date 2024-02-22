import { useState } from 'react';
import UserLogo from '../../../assets/adminAssets/User.svg';
import '../AdminPage.css';

export default function AdminHeader(){
    const [open, setOpen] = useState(false);
    return (
        <header className="adminHeader">
             <button><b style={{color:"white"}}>LOGO</b></button>
            <button onClick={()=>setOpen(!open)}><img className='adminHeaderLogo' src={UserLogo} alt="Icon"  />
                {open && <DropDown/>}
            </button>
        </header>
    );
}

function DropDown(){

    return (
        <ul className='dropDownList'>
            <li> <a href="">Role</a></li>
            <li><a href="">Setting</a></li>
        </ul>
    );

}