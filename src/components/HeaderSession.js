import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Login from './Login'
import Register from './Register'
import './HeaderSession.css'

export default class HeaderSession extends Component {
    render() {
        return (
            <div className="header__session-container">
                <Link to="" className="header__link">

                    <Button className="header__login-button"
                    onClick=
                    {e => this.props.setModal(
                        {visible: true, component: Login, 
                        functions: {setUser: this.props.setUser, setModal: this.props.setModal}}
                    )}>
                        <b className="session__button-text">INGRESAR</b>
                    </Button>

                </Link>

                <Link to="" className="header__link">

                    <Button 
                    className="header__register-button"
                    onClick=
                    {e => this.props.setModal({visible: true, component: Register})}>
                        <b className="session__button-text">Registrarme</b>
                    </Button>

                </Link>
            </div>
        )
    }
}