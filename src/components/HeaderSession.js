import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './HeaderSession.css'

export default class HeaderSession extends Component {
    render() {
        return (
            <div className="header__session-container">
                <Link to="/login" className="header__link">
                    <Button className="header__login-button">Iniciar Sesión</Button>
                </Link>

                <Link to="/registro" className="header__link">
                    <Button className="header__register-button">Registrarme</Button>
                </Link>
            </div>
        )
    }
}
