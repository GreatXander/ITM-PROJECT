import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default class Menu extends Component{
    render(){
        return(
            <>
            <div className="menu__container">
                <ul className="menu__ul">

                    <li className="menu__li"
                    onClick={e => document.getElementById('menu__button').click()}>
                        <Link to="/" className="menu__link home__button">
                            <b className="menu__link-title">HOME</b>
                        </Link>
                    </li>

                    <li className="menu__li"
                    onClick={e => document.getElementById('menu__button').click()}>
                        <Link to="/oferta_academica" className="menu__link offer__button">
                            <b className="menu__link-title">OFERTA ACADÉMICA</b>
                        </Link>
                    </li>

                    <li className="menu__li"
                    onClick={e => document.getElementById('menu__button').click()}>
                        <Link to="/maestros" className="menu__link last__li teachers__button">
                            <b className="menu__link-title">MAESTROS</b>
                        </Link>
                    </li>

                    <li className="menu__li"
                    onClick={e => document.getElementById('menu__button').click()}>
                        <Link to="/nosotros" className="menu__link us__button">
                            <b className="menu__link-title">NOSOTROS</b>
                        </Link>
                    </li>

                    <li className="menu__li"
                    onClick={e => document.getElementById('menu__button').click()}>
                        <Link to="/comunidad" className="menu__link community__button">
                            <b className="menu__link-title">COMUNIDAD</b>
                        </Link>
                    </li>

                    <li className="menu__li"
                    onClick={e => document.getElementById('menu__button').click()}>
                        <Link to="/biblioteca" className="menu__link last__li library__button">
                            <b className="menu__link-title">BIBLIOTECA</b>
                        </Link>
                    </li>
                </ul>
            </div>
            </>
        )
    }
}