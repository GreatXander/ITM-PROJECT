import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { ReactComponent as SchoolLogo } from '../svgs/school__logo.svg'
import HeaderMenu from './HeaderMenu'
import './Header.css'

export default class Header extends Component{
    render(){
        return(
        <header>
            <Link to="/"><SchoolLogo className="school__logo"/></Link>
            <HeaderMenu/>
        </header>
        ) 
    }
}