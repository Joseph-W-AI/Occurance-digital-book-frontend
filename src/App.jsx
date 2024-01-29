import React from 'react';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
// import Navbar from './layout/Navbar'
import Main from './layout/Main';

import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Route index component={Main} />
      <Route index path="/login" component={Login} />
      {/* <Route path="register" element={<Register />} /> */}
    <Route path="/" component={Register} exact />
    
    </Router>
    </>
   
  );
}

export default App;




