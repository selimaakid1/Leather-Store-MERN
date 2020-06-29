import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Customize from './Components/Customize'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './Components/Cart';
import Men from './Components/Men';
import Women from './Components/Women';
import Footer from './Components/Footer';
import Description from './Components/Description';
import Contact from './Components/Contact'
import FavouriteList from './Components/FavouriteList';

function App() {
  return (
    <BrowserRouter>
  
          <Navbar />
          <Route exact path='/' component={Home}/> 

    
        <div className='container'>
        <Switch>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/register' component={Register}/> 
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/customize' component={Customize}/>
          <Route exact path='/men' component={Men}/>
          <Route exact path='/women' component={Women}/>
          <Route exact path='/desc' component={Description}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/favourite' component={FavouriteList}/>




        </Switch>
        </div>
        <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
