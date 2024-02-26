import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import AdminPage  from './pages/adminPage/AdminPage.jsx';
import CreateUser from './pages/adminPage/components/CreateUser.jsx';
import CreateTask,{action as saveTaskAction, loader as taskLoader} from './pages/adminPage/components/CreateTask.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {path:'/admin', element: <AdminPage/>,
  errorElement: <ErrorPage/> ,
  children:[
    {path:'createUser',element: <CreateUser/> },
    {path:'createTask',element: <CreateTask/>,loader: taskLoader ,action: saveTaskAction  }
  ]
},
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
