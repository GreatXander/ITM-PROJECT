import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as RightArrow } from '../svgs/right-arrow.svg'
import './HomeMenuOption.css'

export default class HomeMenuOption extends Component {
    optionInfo = { 
        id: this.props.buttoname + '__info',
        isVisible: false,
        handleOpeNClose: isMouseLeave => {
            if(isMouseLeave && !this.isVisible){
                return false;
            }
            this.isVisible
            ? 
            document.getElementById(this.optionInfo.id).style.display = "none" 
            : 
            document.getElementById(this.optionInfo.id).style.display = "flex";
            this.isVisible = !this.isVisible;
        }
    }

    infoButton =  {
        iconId : `info__button + ${this.props.buttoname}`,
        handleIcon : (scaleIcon) => {
            scaleIcon 
            ? 
            document.getElementById(this.infoButton.iconId).style.transform = "scale(1.1)" 
            : 
            document.getElementById(this.infoButton.iconId).style.transform = "scale(1)";
        }
    }

    render() {
        return (
            <div 
            className={`home__menu-option ${this.props.isLast && 'home__menu-last'}`}
            onMouseEnter={e => this.optionInfo.handleOpeNClose()}
            onMouseLeave={e => this.optionInfo.handleOpeNClose(true)}
            >
                
                {/* OPTION CONSTRUCT */}

                <div className="option__header" style={{background: this.props.buttoncolor}}>
                </div>

                <div className="option__body"
                onClick={e => this.optionInfo.handleOpeNClose()}>
                    {this.props.icon}
                </div>
                
                <div className="option__footer" style={{background: this.props.buttoncolor}}>
                    <b className="option-title">{this.props.title}</b>
                </div>

                {/* OPTION INFO CONSTRUCT */}
                
                <div className="option__info-container" 
                style={{background: this.props.buttoncolor}} 
                id={this.optionInfo.id}>
                    
                    <div className="option__info-header">
                        <h2 className="option__info-title">
                            {this.props.title}
                        </h2>
                    </div>
                    
                    <div className="option__info-body"
                    onClick={e => this.optionInfo.handleOpeNClose()}>
                        {this.props.optionInfo}
                    </div>
                    
                    <Link to={this.props.buttoname} className="info__button-container">
                        <div className="option__info-button"
                        onMouseEnter={e => this.infoButton.handleIcon(true)}
                        onMouseLeave={e => this.infoButton.handleIcon()}
                        onClick={e => this.infoButton.handleIcon()}
                        >
                            <RightArrow className="info__button-icon" id={this.infoButton.iconId} />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}