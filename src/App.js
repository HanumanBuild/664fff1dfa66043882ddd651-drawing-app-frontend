import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">Drawing App</Link>
          <div>
            <Link to="/login" className="text-white mr-4">Login</Link>
            <Link to="/signup" className="text-white">Signup</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;