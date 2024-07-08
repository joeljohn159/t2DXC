import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient.js';
import router from './utils/Routes.jsx';
import { userContext, userSample, updateSDR } from './store/userContext.js'



function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <userContext.Provider value={userSample}>
        <RouterProvider router={router} />
      </userContext.Provider>
    </QueryClientProvider>

  )
}

export default App
