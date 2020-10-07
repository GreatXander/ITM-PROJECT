import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SchoolLogo } from '../svgs/school__logo.svg'
import HeaderMenu from './HeaderMenu'
import ProfileButton from './ProfileButton'
import HeaderSession from './HeaderSession';
import './Header.css'

import HeaderSchoolTitle from './HeaderSchoolTitle'

export default class Header extends Component{
    render(){
        return(
            <header>
                <Link to="/" className="school__logo-container">
                    <SchoolLogo className="school__logo"/>
                    <h1 className="school__logo-title">ITM</h1>
                </Link>

                {!this.props.isLoggedIn && <HeaderSchoolTitle />}
                {!this.props.isLoggedin && <HeaderSession />}

                {this.props.isLoggedIn && <HeaderMenu />}
                {this.props.isLoggedIn && <ProfileButton username={this.props.user.name + ' ' + this.props.user.lastname + '.'}/>}
            </header>
        ) 
    }
}