// App.js
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Form from './Views/Form/Form';

import Navbar from './Component/Navbar/Navbar';
import Details from './Views/Details/Details'; // Importa sin llaves

function App() {
  return (
    <div className="App">
      <Route path="*" component={Navbar} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/details/:id" component={Details} /> {/* Utiliza el componente directamente */}
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
