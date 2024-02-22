import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import UserLogin from './pages/userLogin/UserLogin.jsx';
import AdminPage from './pages/adminPage/AdminPage.jsx';
import CreateUser from './pages/adminPage/components/CreateUser.jsx';
import CreateTask from './pages/adminPage/components/CreateTask.jsx';


const router = createBrowserRouter([
  {path:'/admin', element: <AdminPage/>,
  children:[
    {path:'createUser',element: <CreateUser/> },
    {path:'createTask',element: <CreateTask/> }
  ]
},
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
