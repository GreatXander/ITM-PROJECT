import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeContrast } from '../svgs/home__contrast.svg'
import { ReactComponent as DirectorContrast } from '../svgs/director__contrast.svg'
import { ReactComponent as PencilContrast } from '../svgs/pencil__contrast.svg'
import { ReactComponent as CommunityLogo } from '../svgs/community__logo.svg'
import { ReactComponent as Glasses } from '../svgs/glasses.svg'
import { ReactComponent as BackPackContrast } from '../svgs/backpack__contrast.svg'
import { ReactComponent as MenuButton } from '../svgs/menu__button.svg'
import './HeaderMenu.css'

export default class HeaderMenu extends Component {

    menu = {
        isOpen: false,
        handleOpeNClose: menudiv => {
            this.isOpen ? menudiv.style.top = '-310px' : menudiv.style.top = '124px';
            this.isOpen = !this.isOpen;
        }
    }

    render() {
        return (
            <>
            <nav className="header__nav">
                    <NavLink exact to="/" className="header__navlink" aria-label="Inicio" activeClassName="active">
                        <HomeContrast className="header__menu-option"/>
                    </NavLink>
                    
                    <NavLink to="/nosotros" className="header__navlink" aria-label="Nosotros" activeClassName="active">
                        <DirectorContrast className="header__menu-option"/>
                    </NavLink>
                    
                    <NavLink to="/oferta_academica" className="header__navlink" aria-label="Ofertas" activeClassName="active">
                        <PencilContrast className="header__menu-option"/>
                    </NavLink>
                    
                    <NavLink to="/comunidad" className="header__navlink" aria-label="Comunidad" activeClassName="active">
                        <CommunityLogo className="header__menu-option community__logo"/>
                    </NavLink>
                    
                    <NavLink to="/maestros" className="header__navlink" aria-label="Maestros" activeClassName="active">
                        <Glasses className="header__menu-option glasses"/>
                    </NavLink>
                   
                    <NavLink to="/biblioteca" className="header__navlink" aria-label="Biblioteca" activeClassName="active">
                        <BackPackContrast className="header__menu-option"/>
                    </NavLink>
            </nav>
            
            <div className="menu__button-container"
            onClick={e => this.menu.handleOpeNClose(document.querySelector('.menu__container'))}>
                <MenuButton className="menu__button" />
            </div>
            </>
        )
    }
}
