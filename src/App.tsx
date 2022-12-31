import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AddUser from './Admin/Component/AddUser';
import UserDetails from './Admin/Component/UserDetails';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={< UserDetails/>}/>
          <Route path="/adduser" element={< AddUser/>}/>
          <Route path="/adduser/:id" element={< AddUser/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App






