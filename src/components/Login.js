import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ReactComponent as LoginIcon } from '../svgs/padlock.svg'
import { ReactComponent as Error } from '../svgs/error.svg'
import './Login.css'

export default class Login extends Component{
    state = {
        email: '',
        password: ''
    }

    confirmUser = async () => {
        const user = await axios.get('http://localhost:4000/api/users/email/' + this.state.email);
        if(user.data){
            document.getElementById('email__error').style.display = 'none';
            if(this.state.password === user.data.password){
                this.props.history.push('/')
            } 
            else {
                document.getElementById('password__error').style.display = 'flex';
            }
        } 
        else {
            document.getElementById('email__error').style.display = 'flex';
        }
    }

    render(){
        return(
            <div className="login__main">
                <div className="login__container">

                    <div className="login__header">
                        <div className="login__icon-container">
                            <LoginIcon className="login__icon" />
                        </div>
                    </div>

                    <form className="login__form">
                        
                        <h2 className="login__title">EMAIL</h2>
                        <div className="login__input-container">
                            <input type="text" name="email" className="login__input" placeholder="Inserte Su Email..." 
                            onChange = {e => this.setState({email: e.target.value})} />
                            <div className="login__error" id="email__error">
                                <Error className="error" />
                            </div>
                        </div>

                        <h2 className="login__title">CONTRASEÑA</h2>
                        <div className="login__input-container">
                            <input type="password" name="password" className="login__input" placeholder="Inserte Su Contraseña..." 
                            onChange = {e => this.setState({password: e.target.value})}/>
                            <div className="login__error" id="password__error">
                                <Error className="error" />
                            </div>
                        </div>

                        <button type="submit" className="login__button"
                        onClick = {this.confirmUser} >INGRESAR</button>
                    </form>

                    <div className="login__footer">
                        <Link className="footer__link-container">
                            <h3 className="login__footer-link">NO RECUERDO MI CONTRASEÑA</h3>
                        </Link>

                        <Link className="footer__link-container">
                            <h3 className="login__footer-link">NO TENGO UNA CUENTA</h3>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}