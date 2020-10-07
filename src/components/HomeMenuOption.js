import React, { Component } from 'react'
import './HomeMenuOption.css'

export default class HomeMenuOption extends Component {
    optionInfoId = this.props.buttoname + '__info';
    render() {
        return (
            <div className={`home__menu-option ${this.props.isLast && 'home__menu-last'}`}
            onMouseEnter={e => document.getElementById(this.optionInfoId).style.display = 'flex'}
            onMouseLeave={e => document.getElementById(this.optionInfoId).style.display = 'none'}>

                {this.props.icon}

                <div className="option__message-container" style={{background: this.props.buttoncolor}}><b className="home__option-message">{this.props.message}</b></div>
                
                <div className="option__info-container" style={{background: this.props.buttoncolor}} id={this.optionInfoId}>
                    <div className="option__info-header">
                        <h2 className="option__info-title">{this.props.message}</h2>
                    </div>
                    {this.props.optionInfo}
                </div>
            </div>
        )
    }
}