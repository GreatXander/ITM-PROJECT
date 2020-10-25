import React, { Component } from 'react'
import './InfoDiv.css'

export default class InfoDiv extends Component {
    render() {
        return (
            <div className={
                `home__container ${this.props.isWelcome && 'welcome__container'}`
            }>
                <div className={
                    `home__container-inner ${this.props.isWelcome && 'welcome'}`
                }>
                    {this.props.svg}
                    {this.props.tag}
                    {this.props.info}
                </div>
            </div>
        )
    }
}
