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
                buttoname="nosotros" 
                buttoncolor="var(--us-button)" 
                icon={<Director className="home__menu-svg"/>} 
                title="NOSOTROS" 
                optionInfo={
                    <p className="option__info-p">
                        
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="oferta_academica" 
                buttoncolor="var(--offer-button)" 
                icon={<Pencil className="home__menu-svg"/>} 
                title="OFERTAS" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="comunidad" 
                buttoncolor="var(--community-button)" 
                icon={<Community className="home__menu-svg"/>} 
                title="COMUNIDAD" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="maestros" 
                buttoncolor="var(--teachers-button)" 
                icon={<Rule className="home__menu-svg"/>} 
                title="MAESTROS" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>

                <HomeMenuOption 
                buttoname="biblioteca" 
                buttoncolor="var(--button-green)" 
                isLast={true} 
                icon={<BackPack className="home__menu-svg"/>}  
                title="BIBLIOTECA" 
                optionInfo={
                    <p className="option__info-p">
                     
                    </p>
                }/>
            </div>
        )
    }
}