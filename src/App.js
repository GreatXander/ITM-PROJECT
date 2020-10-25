import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

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
import ModalWindow from './components/ModalWindow'

function App(){
    const [User, setUser] = useState( JSON.parse(localStorage.getItem('user')) || {} );
    const [Modal, setModal] = useState({visible: false, component: null, functions: {}});

    return(
    <BrowserRouter>
        <Header 
        user={User} 
        setUser={setUser}
        setModal={setModal} />

        {Object.keys(User).length > 0 && <TopAlert />}
        {Object.keys(User).length > 0 && <Menu />}
        
        {Modal.visible && 
        <ModalWindow 
        setModal={setModal} 
        component={Modal.component} 
        functions={Modal.functions} />
        }

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Us} />
            <Route exact path="/oferta_academica" component={Offer} />
            <Route exact path="/comunidad" component={Community} />
            <Route exact path="/maestros" component={Teachers} />
            <Route exact path="/biblioteca" component={Library} />
            <Route exact path="/cambiar_contraseña" component={ChangePass} />
            <Redirect to="/" />
        </Switch>
        <Footer />
    </BrowserRouter>
    )
}

export default App;