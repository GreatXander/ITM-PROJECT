import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SchoolLogo } from '../svgs/school__logo.svg'
import HeaderMenu from './HeaderMenu'
import HeaderSchoolTitle from './HeaderSchoolTitle'
import ProfileButton from './ProfileButton'
import HeaderSession from './HeaderSession';
import './Header.css'

export default class Header extends Component{
    getUserName = () => {
        return this.props.user.name + ' ' + this.props.user.lastname;
    }
    render(){
        return(
            <header>
                <Link to="/" className="school__logo-container">
                    <SchoolLogo className="school__logo"/>
                    <h1 className="school__logo-title">ITM</h1>
                </Link>

                {this.props.isLoggedIn ? <HeaderMenu /> : <HeaderSchoolTitle />}
                {this.props.isLoggedIn ? <ProfileButton username={this.getUserName()}/> : <HeaderSession />}
            </header>
        ) 
    }
}