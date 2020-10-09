import React, { Component } from 'react'
import { ReactComponent as Director } from '../svgs/director.svg'
import { ReactComponent as Pencil } from '../svgs/pencil.svg'
import { ReactComponent as Community } from '../svgs/community.svg'
import { ReactComponent as Rule } from '../svgs/rule.svg'
import { ReactComponent as BackPack } from '../svgs/backpack.svg'
import './HomeMenu.css'

import HomeMenuOption from './HomeMenuOption' 

export default class HomeMenu extends Component {
    render() {
        return (
            <div className="home__menu-container">
                <HomeMenuOption 
                buttoname="us__button" 
                buttoncolor="var(--us-button)" 
                icon={<Director className="home__menu-svg"/>}  message="NOSOTROS" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="offer__button" 
                buttoncolor="var(--offer-button)" 
                icon={<Pencil className="home__menu-svg"/>} message="OFERTAS" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="community__button" 
                buttoncolor="var(--community-button)" 
                icon={<Community className="home__menu-svg"/>} message="COMUNIDAD" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="teachers__button" 
                buttoncolor="var(--teachers-button)" 
                icon={<Rule className="home__menu-svg"/>} message="MAESTROS" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="library__button" 
                buttoncolor="var(--button-green)" 
                isLast={true} 
                icon={<BackPack className="home__menu-svg"/>}  message="BIBLIOTECA" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>
            </div>
        )
    }
}