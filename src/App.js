import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import ChangePass from './components/ChangePass'
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Us from './components/Us'
import Offer from './components/Offer'
import Community from './components/Community'
import Teachers from './components/Teachers'
import  Library from './components/Library'
import Footer from './components/Footer'

import TopAlert from './components/TopAlert'

function App(){
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [User, setUser] = useState({});

    let passNsetUser = (user) => {
        setisLoggedIn(true);
        setUser(user);
    }

    return(
    <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} user={User} />
        {isLoggedIn && <TopAlert />}
        {isLoggedIn && <Menu />}
        <Switch>
            <Route exact path="/login" render={props => (<Login {...props} passNsetUser={passNsetUser} />)} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/cambiar_contraseña" component={ChangePass} />
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Us} />
            <Route exact path="/oferta_academica" component={Offer} />
            <Route exact path="/comunidad" component={Community} />
            <Route exact path="/maestros" component={Teachers} />
            <Route exact path="/biblioteca" component={Library} />
        </Switch>
        <Footer />
    </BrowserRouter>
    )
}

export default App;