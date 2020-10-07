import React, { Component } from 'react'
import './ProfileButton.css'

export default class ProfileButton extends Component {
    render() {
        return (
            <div className="profile__button">
                <div className="profile__button-img-container">
                    <img className="profile__button-img" 
                    src={require("../images/example.png")} alt="UserImg" />
                </div>
            <h2 className="profile__button-title">{this.props.username}</h2>
            </div>
        )
    }
}
