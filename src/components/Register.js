import React, { Component } from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core';
import { ReactComponent as RegisterIcon } from '../svgs/note.svg'
import { ReactComponent as Check } from '../svgs/check.svg'
import { ReactComponent as Error } from '../svgs/error.svg'
import './Register.css'

const Verifier = require("email-verifier");
var verifier = new Verifier("at_DXelHJMWeEgWGIfgSltgvCqk7ctm8", "Xx02122717");

export default class Register extends Component {

    state = {
        name: {validation : false, value: ''},
        lastname: {validation : false, value: ''},
        birthdate: {validation : false, value: ''},
        email: {validation : false, value: ''},
        password: {validation : false, value: ''},
        confirmPassword: {validation: false, value: ''}
    };

    confirmRegistration = async () => {
        this.setState({confirmPassword: {
            validation: this.state.confirmPassword.value === this.state.password.value ?
            true : false
        }})
        document.getElementById('confirm-pass__state').style.display = 'flex';
       
        let validationResults = [];
        for(const property in this.state){
            if(this.state[property]['validation']){
                validationResults.push(this.state[property]['validation']);
            }
        }
        if(validationResults.length === 6){
            let newUser = {
                name: this.state.name.value,
                lastname: this.state.lastname.value,
                birthdate: this.state.birthdate.value,
                email: this.state.email.value,
                password: this.state.password.value
            };
            await axios.post('http://localhost:4000/api/users', newUser);
            this.props.functions.setModal({visible: false, component: null});
            this.props.setUser(newUser);
        }
    }

    emailValidation = (email) => {
        verifier.verify(email, (err, data) => {
            if(err){
                this.setState({email: {validation: false}});
            }
            else{
                this.setState({email: {validation: true}});
            }
            document.getElementById('email__state').style.display = 'flex';
        })
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
                    onChange = {
                        e => 
                        this.setState(e.target.value.length >= 2 ? 
                        {name: {validation: true, value: e.target.value}} :
                        {name: {validation: false}})
                    } 
                    onBlur = {e => document.getElementById('name__state').style.display = 'flex'} 
                    />
                    
                    <div className="register__state" id="name__state">
                        {this.state.name.validation ? 
                        <Check className="checked checked__state" /> :
                        <Error className="error error__state" />}
                    </div>
                </div>
                
                <h2 className="register__title">Apellido</h2>
                <div className="register__input-container">
                    <input type="text" className="register__input" name="lastname"  placeholder="Inserte Su Apellido... "
                    onChange = {
                        e => 
                        this.setState(e.target.value.length >= 2 ? 
                        {lastname: {validation: true, value: e.target.value}} :
                        {lastname: {validation: false}})
                    } 
                    onBlur = {e => document.getElementById('lastname__state').style.display = 'flex'}
                    />
                
                    <div className="register__state" id="lastname__state">
                        {this.state.lastname.validation ? 
                        <Check className="checked checked__state" /> :
                        <Error className="error error__state" />}
                    </div>
                </div>

                <h2 className="register__title">Fecha De Nacimiento</h2>
                <div className="register__input-container">
                    <input type="date" className="register__input" 
                    onChange = {
                        e => 
                        this.setState(
                        new Date(e.target.value)
                        ? 
                        {birthdate: {validation: true, value: e.target.value}} :
                        {birthdate: {validation: false}})
                    } 
                    onBlur = {e => document.getElementById('birthdate__state').style.display = 'flex'}
                    />
                
                    <div className="register__state" id="birthdate__state">
                        {this.state.birthdate.validation ? 
                        <Check className="checked checked__state" /> :
                        <Error className="error error__state" />}
                    </div>
                </div>

                <h2 className="register__title">Email</h2>
                <div className="register__input-container">
                    <input type="text" className="register__input" name="email"  placeholder="Inserte Su Email... "
                    onChange = {e => this.setState({email: {value: e.target.value}})}
                    onBlur = {e => this.emailValidation(e.target.value)}
                    />
                
                    <div className="register__state" id="email__state">
                        {this.state.email.validation ? 
                        <Check className="checked checked__state" /> :
                        <Error className="error error__state" />}
                    </div>
                </div>

                <h2 className="register__title">Contraseña</h2>
                <div className="register__input-container">
                    <input type="password" className="register__input" name="password"  placeholder="Inserte Su Contraseña... " 
                    onChange = {
                        e => 
                        this.setState(e.target.value.length >= 6 ? 
                        {password: {validation: true, value: e.target.value}} :
                        {password: {validation: false}})
                    } 
                    onBlur = {e => document.getElementById('password__state').style.display = 'flex'}
                    />
                
                    <div className="register__state" id="password__state">
                        {this.state.password.validation ? 
                        <Check className="checked checked__state" /> :
                        <Error className="error error__state" />}
                    </div>
                </div>
                        
                <h2 className="register__title">Confirmar Contraseña</h2>
                <div className="register__input-container">
                    <input type="password" className="register__input" name="confirm__password"  placeholder="Confirme Su Contraseña... "
                    onChange = {e => this.setState({confirmPassword: {value: e.target.value}})}
                    />
                
                    <div className="register__state" id="confirm-pass__state">
                        {this.state.confirmPasswordState ? 
                        <Check className="checked checked__state" /> :
                        <Error className="error error__state" />}
                    </div>
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