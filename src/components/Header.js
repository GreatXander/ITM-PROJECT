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

                {Object.keys(this.props.user).length > 0
                ? 
                <HeaderMenu /> : <HeaderSchoolTitle />}
                
                {Object.keys(this.props.user).length > 0 
                ? 
                <ProfileButton username={this.getUserName()}/>
                :
                <HeaderSession 
                setModal={this.props.setModal} 
                setUser={this.props.setUser}/>}
            </header>
        ) 
    }
}