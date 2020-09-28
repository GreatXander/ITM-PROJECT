import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to="/">
                        <li className="header__li home active" name="home"><HomeContrast className="header__menu-option"/></li>
                    </Link>
                    
                    <Link to="/nosotros">
                        <li className="header__li us" name="us"><DirectorContrast className="header__menu-option"/></li>
                    </Link>
                    
                    <Link to="/oferta_academica">
                        <li className="header__li offer" name="offer"><PencilContrast className="header__menu-option"/></li>
                    </Link>
                    
                    <Link to="/comunidad">
                        <li className="header__li community" name="community"><CommunityChat className="header__menu-option community__chat"/></li>
                    </Link>
                    
                    <Link to="/maestros">
                        <li className="header__li teachers" name="teachers"><Glasses className="header__menu-option glasses"/></li>
                    </Link>
                   
                    <Link to="/biblioteca">
                        <li className="header__li library" name="library"><BackPackContrast className="header__menu-option"/></li>
                    </Link>
            </ul>
            
            <MenuButton className="menu__button"/>
            </>
        )
    }
}
