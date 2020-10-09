import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import {ReactComponent as RightArrow} from '../svgs/right-arrow.svg'
import './HomeMenuOption.css'

export default class HomeMenuOption extends Component {
    optionInfoId = this.props.buttoname + '__info';
    optionInfoButton = `info__button + ${this.props.buttoname}`;

    handleOptionClick = () =>{
        document.getElementById(this.optionInfoButton).style.transform = 'scale(1)'
    }

    render() {
        return (
            <div className={`home__menu-option ${this.props.isLast && 'home__menu-last'}`}
            onMouseEnter={e => document.getElementById(this.optionInfoId).style.display = 'flex'}
            onMouseLeave={e => document.getElementById(this.optionInfoId).style.display = 'none'}>

                <div className="option__header" style={{background: this.props.buttoncolor}}>
                </div>

                {this.props.icon}
                
                <div className="option__message-container" style={{background: this.props.buttoncolor}}>
                    <b className="option-message">{this.props.message}</b>
                </div>
                
                <div className="option__info-container" style={{background: this.props.buttoncolor}} id={this.optionInfoId}>
                    
                    <div className="option__info-header">
                        <h2 className="option__info-title">
                            {this.props.message}
                        </h2>
                    </div>
                    
                    <div className="option__info-body">
                        {this.props.optionInfo}
                    </div>
                    
                    <Button className="option__info-button"
                    onMouseEnter={e => document.getElementById(this.optionInfoButton).style.transform = 'scale(1.1)'}
                    onMouseLeave={e => document.getElementById(this.optionInfoButton).style.transform = 'scale(1)'}
                    onClick={e => this.handleOptionClick()}
                    >
                        <RightArrow className="info__button-icon" id={this.optionInfoButton} />
                    </Button>
                  
                </div>

            </div>
        )
    }
}