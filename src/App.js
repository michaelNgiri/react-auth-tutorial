import React, { useState } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import {AuthContext} from "./Context/Auth";



function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return ( 
  <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router >
     <div >
        <ul > ... </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
      </div> 
      </Router> 
    </AuthContext.Provider>
  );
}

export default App;