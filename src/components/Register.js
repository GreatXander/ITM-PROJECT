import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios'
import './Register.css'

import { ReactComponent as RegisterIcon } from '../svgs/note.svg'

export default class Register extends Component {

    state = {
        name: '',
        lastname: '',
        birthdate: '',
        email: '',
        password: ''
    }

    confirmRegistration = async () => {
        await axios.post('http://localhost:4000/api/users', this.state);
        this.props.history.push('/login');
    }

    render() {
        return (
        <div className="register__container">
            
            <div className="register__header">
                <div className="register__icon-container">
                    <RegisterIcon className="register__icon" />
                </div>
            </div>

            <form className="register__form" autoComplete="off"
            onClick = {e => e.preventDefault()}>

                <h2 className="register__title">Nombre</h2>
                <div className="register__input-container">
                    <input type="text" className="register__input" name="name" placeholder="Inserte Su Nombre... "
                    onChange = {e => this.setState({name: e.target.value})} />
                </div>
                
                <h2 className="register__title">Apellido</h2>
                <div className="register__input-container">
                    <input type="text" className="register__input" name="lastname"  placeholder="Inserte Su Apellido... "
                    onChange = {e => this.setState({lastname: e.target.value})} />
                </div>

                <h2 className="register__title">Fecha De Nacimiento</h2>
                <div className="register__input-container">
                    <input type="date" className="register__input" 
                    onChange = {e => this.setState({birthdate: e.target.value})}/>
                </div>

                <h2 className="register__title">Email</h2>
                <div className="register__input-container">
                    <input type="text" className="register__input" name="email"  placeholder="Inserte Su Email... "
                    onChange = {e => this.setState({email: e.target.value})} />
                </div>

                <h2 className="register__title">Contraseña</h2>
                <div className="register__input-container">
                    <input type="password" className="register__input" name="password"  placeholder="Inserte Su Contraseña... " 
                    onChange = {e => this.setState({password: e.target.value})} />
                </div>
                        
                <h2 className="register__title">Confirmar Contraseña</h2>
                <div className="register__input-container">
                    <input type="password" className="register__input" name="confirm__password"  placeholder="Confirme Su Contraseña... "/>
                </div>

                <Button className="register__button" 
                onClick = {this.confirmRegistration}>
                    REGISTRARME
                </Button>

            </form>

        </div>
        )
    }
}