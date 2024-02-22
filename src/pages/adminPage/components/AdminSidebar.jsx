import { NavLink } from 'react-router-dom';
import '../AdminPage.css';

export default function AdminSidebar(){
    return (
        <div className="adminSidebarContainer">
            <h3>Menu</h3>
            <ul className="adminSidebarList">
                <NavLink to="/admin/createUser" className={({isActive})=>isActive?'active': undefined} end><li>Create User</li></NavLink>
                <NavLink to="/admin/createTask" className={({isActive})=>isActive?'active': undefined} end><li>Create Task</li></NavLink>
                <a href=""><li>Escalation List</li></a>
            </ul>
        </div>
    );
}