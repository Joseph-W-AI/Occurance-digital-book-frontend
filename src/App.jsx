import React from 'react';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
// import Navbar from './layout/Navbar'
import Main from './layout/Main';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
)
function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
   
  );
}

export default App;




