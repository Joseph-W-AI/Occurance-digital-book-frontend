import React from 'react';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
// import Navbar from './layout/Navbar'
import Main from './layout/Main';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateIncident from './components/CreateIncident';
import Incident from './components/Incidents';


function App() {
  return (
    <>
    <Router>
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />

      <Route path="/log-incidents" component={CreateIncident} />
      <Route path="/incidents" component={Incident} />

    <Route path="/" component={Register} exact />
    
    </Router>
    </>
   
  );
}

export default App;




