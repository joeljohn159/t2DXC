import TaskModal from "../../features/TaskModal.jsx";
import AdminHeader from "./components/AdminHeader.jsx";
import AdminSidebar from "./components/AdminSidebar.jsx";
import { Outlet, useNavigation} from "react-router-dom";
export default function UserPage(){

  
    return (
        <>
        <AdminHeader />
        <div className="mainAdmin">
            <AdminSidebar />
            <Outlet></Outlet>
        </div>
        </>
    );
}