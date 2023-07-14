import './App.css';
import{ Route, BrowserRouter, Switch} from 'react-router-dom'; 
import React from 'react';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Form from './Views/Form/Form';
import Details from './Views/Details/Details';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Route path= "*" component ={Navbar}/>
      <Switch>
        <Route path ="/home" component = {Home}/>
        <Route path ="/form" component = {Form}/>
        <Route path ="/" component = {Landing}/>
        <Route path ="/details:id" component = {Details}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
