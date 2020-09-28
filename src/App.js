import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Us from './components/Us'
import Offer from './components/Offer'
import Community from './components/Community'
import Teachers from './components/Teachers'
import  Library from './components/Library'
import Footer from './components/Footer'

function App(){
    return(
    <Router>
        <Header />
        <Menu />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={Us} />
        <Route exact path="/oferta_academica" component={Offer} />
        <Route exact path="/comunidad" component={Community} />
        <Route exact path="/maestros" component={Teachers} />
        <Route exact path="/biblioteca" component={Library} />
        <Footer />
    </Router>
    )
}

export default App;