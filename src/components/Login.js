import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { ReactComponent as LoginIcon } from '../svgs/padlock.svg'
import { ReactComponent as Check } from '../svgs/check.svg'
import { ReactComponent as Error } from '../svgs/error.svg'
import axios from 'axios'

import './Login.css'

export default class Login extends Component{
    state = {
        email: '',
        password: '',
        emailState: false,
        passwordState: false
    }

    confirmUser = async () => {
        const user = await axios.get('http://localhost:4000/api/users/email/' + this.state.email);
        const emailStateDiv = document.getElementById('email__state');
        const passwordStateDiv = document.getElementById('password__state');

        emailStateDiv.style.display = 'flex';
        
        if(user.data){
            await this.setState({emailState : true})

            passwordStateDiv.style.display = 'flex';
            if(this.state.password === user.data.password){
                await this.setState({passwordState : true});
                this.props.functions.setUser(user.data);
                this.props.functions.setModal({visible: false, component: null})
            }else{
                await this.setState({passwordState : false});
            }
        }else{
            await this.setState({emailState : false});
        }
    }

    render(){
        return(
        <div className="login__container">
            
            <div className="login__header">

                <div className="login__icon-container">
                    <LoginIcon className="login__icon" />
                </div>

            </div>
            
            <form className="login__form" autoComplete="off"
            onSubmit = {e => e.preventDefault()}>
        
                <h2 className="login__title">EMAIL</h2>
                <div className="login__input-container">

                    <input type="text" name="email" id="email" className="login__input" placeholder="Inserte Su Email..." 
                    onChange = {e => this.setState({email: e.target.value})} />

                    <div className="login__state" id="email__state">
                        {this.state.emailState ? <Check className="checked checked__state" /> : <Error className="error error__state" />}
                    </div>

                </div>
                        
                <h2 className="login__title">CONTRASEÑA</h2>
                <div className="login__input-container">

                    <input type="password" name="password" id="password" className="login__input" placeholder="Inserte Su Contraseña..." 
                    onChange = {e => this.setState({password: e.target.value})}/>
                    
                    <div className="login__state" id="password__state">
                        {this.state.passwordState ? <Check className="checked checked__state" /> : <Error className="error error__state" />}
                    </div>

                </div>

                <Button className="login__button" onClick = {this.confirmUser} >INGRESAR</Button>
           
            </form>

            <div className="login__footer">

                <Link to="cambiar_contraseña" className="login__footer-link" aria-label="Cambiar Contraseña">
                    <Button className="footer__link-button" >NO RECUERDO MI CONTRASEÑA</Button>
                </Link>

                <Link to="" className="login__footer-link" aria-label="Crear Cuenta">
                    <Button className="footer__link-button" >NO TENGO UNA CUENTA</Button>
                </Link>

            </div>

        </div>
        )
    }
}