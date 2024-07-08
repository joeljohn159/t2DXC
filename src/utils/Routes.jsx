import { createBrowserRouter } from "react-router-dom";


import AdminPage  from '../pages/adminPage/AdminPage.jsx';
import CreateUser from '../pages/adminPage/components/CreateUser.jsx';
import CreateTask,{action as saveTaskAction, loader as taskLoader} from '../pages/adminPage/components/CreateTask.jsx';
import CreateBulkUser from '../pages/adminPage/components/CreateBulkUser.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

import UserLoginPage from '../pages/userLogin/UserLogin.jsx';
import Login from '../pages/userLogin/components/Login.jsx';

import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
    { 
        index: true, 
        element: <Login />, 
        errorElement: <ErrorPage /> 
    },
    { 
        path: '/shiftDomainRole', 
        element: <UserLoginPage /> 
    },
    {
        path: '/admin', 
        element: <ProtectedRoute><AdminPage /></ProtectedRoute>,
        errorElement: <ErrorPage />,
        children: [
            { 
                path: 'createUser', 
                element: <ProtectedRoute><CreateUser /> </ProtectedRoute>
            },
            { 
                path: 'createTask', 
                element:  <ProtectedRoute><CreateTask /></ProtectedRoute>,
                loader: taskLoader, 
                action: saveTaskAction 
            },
            { 
                path: 'createBulkUser', 
                element: <ProtectedRoute><CreateBulkUser /> </ProtectedRoute> 
            },
        ]
    },
])

export default router;