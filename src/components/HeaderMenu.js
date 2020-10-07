import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeContrast } from '../svgs/home__contrast.svg'
import { ReactComponent as DirectorContrast } from '../svgs/director__contrast.svg'
import { ReactComponent as PencilContrast } from '../svgs/pencil__contrast.svg'
import { ReactComponent as CommunityChat } from '../svgs/community__chat.svg'
import { ReactComponent as Glasses } from '../svgs/glasses.svg'
import { ReactComponent as BackPackContrast } from '../svgs/backpack__contrast.svg'
import { ReactComponent as MenuButton } from '../svgs/menu__button.svg'
import './HeaderMenu.css'

export default class HeaderMenu extends Component {
    render() {
        return (
            <>
            <ul className="header__ul">
                    <NavLink to="/" aria-label="Inicio" activeClassName="active">
                        <li className="header__li"><HomeContrast className="header__menu-option"/></li>
                    </NavLink>
                    
                    <NavLink to="/nosotros" aria-label="Nosotros" activeClassName="active">
                        <li className="header__li"><DirectorContrast className="header__menu-option"/></li>
                    </NavLink>
                    
                    <NavLink to="/oferta_academica" aria-label="Ofertas" activeClassName="active">
                        <li className="header__li"><PencilContrast className="header__menu-option"/></li>
                    </NavLink>
                    
                    <NavLink to="/comunidad" aria-label="Comunidad" activeClassName="active">
                        <li className="header__li"><CommunityChat className="header__menu-option community__chat"/></li>
                    </NavLink>
                    
                    <NavLink to="/maestros" aria-label="Maestros" activeClassName="active">
                        <li className="header__li"><Glasses className="header__menu-option glasses"/></li>
                    </NavLink>
                   
                    <NavLink to="/biblioteca" aria-label="Biblioteca" activeClassName="active">
                        <li className="header__li"><BackPackContrast className="header__menu-option"/></li>
                    </NavLink>
            </ul>
            
            <div className="menu__button-container">
                <MenuButton className="menu__button" />
            </div>
            </>
        )
    }
}
